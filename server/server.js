const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { ensureDatabaseInitialized, getPool } = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Static uploads directory
const uploadsDir = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsDir));

// Routes
app.get('/api/health', (req, res) => {
  try {
    // Quick ping using pool if available
    getPool().query('SELECT 1');
    res.json({ status: 'ok', service: 'techfix-hub-api' });
  } catch {
    res.json({ status: 'ok', service: 'techfix-hub-api', db: 'initializing' });
  }
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/repairs', require('./routes/repairs'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/uploads', require('./routes/uploads'));
app.use('/api/admin', require('./routes/admin'));

// Fallback
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

async function start() {
  try {
    await ensureDatabaseInitialized();
    app.listen(PORT, () => {
      console.log(`TechFix Hub API listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
