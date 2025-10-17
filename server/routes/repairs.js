const express = require('express');
const { getPool } = require('../config/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await getPool().query('SELECT * FROM repairs ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  const { customer_name, phone, email, device_type, problem, image_url } = req.body;
  try {
    const [result] = await getPool().query(
      'INSERT INTO repairs (customer_name, phone, email, device_type, problem, image_url) VALUES (?, ?, ?, ?, ?, ?)',
      [customer_name, phone, email, device_type, problem, image_url]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
