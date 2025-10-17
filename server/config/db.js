const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

// We first create a pool without database to ensure DB exists
const basePool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

let pool;

async function ensureDatabaseInitialized() {
  // Ensure database exists and apply schema file if present
  const schemaPath = path.join(__dirname, '../../database/techfix.sql');
  const dbName = process.env.DB_NAME || 'techfix';
  const baseConn = await basePool.getConnection();
  try {
    await baseConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  } finally {
    baseConn.release();
  }

  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: dbName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  if (fs.existsSync(schemaPath)) {
    const sqlContent = fs.readFileSync(schemaPath, 'utf8');
    const segments = sqlContent.split(/;\s*\n/).map(s => s.trim()).filter(Boolean);
    const connection = await pool.getConnection();
    try {
      for (const segment of segments) {
        await connection.query(segment);
      }
    } finally {
      connection.release();
    }
  }
}

function getPool() {
  if (!pool) throw new Error('Database not initialized yet. Call ensureDatabaseInitialized first.');
  return pool;
}

module.exports = { pool: undefined, getPool, ensureDatabaseInitialized };
