const express = require('express');
const { getPool } = require('../config/db');
const auth = require('../middleware/auth');

const router = express.Router();

// Products CRUD (protected)
router.post('/products', auth, async (req, res) => {
  const { name, category, condition, price, description, image_url } = req.body;
  try {
    const [result] = await getPool().query(
      'INSERT INTO products (name, category, `condition`, price, description, image_url) VALUES (?, ?, ?, ?, ?, ?)',
      [name, category, condition, price, description, image_url]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/products/:id', auth, async (req, res) => {
  const { name, category, condition, price, description, image_url } = req.body;
  try {
    await getPool().query(
      'UPDATE products SET name=?, category=?, `condition`=?, price=?, description=?, image_url=? WHERE id=?',
      [name, category, condition, price, description, image_url, req.params.id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/products/:id', auth, async (req, res) => {
  try {
    await getPool().query('DELETE FROM products WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Repairs management
router.put('/repairs/:id', auth, async (req, res) => {
  const { status } = req.body;
  try {
    await getPool().query('UPDATE repairs SET status=? WHERE id=?', [status || 'received', req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/repairs/:id', auth, async (req, res) => {
  try {
    await getPool().query('DELETE FROM repairs WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Messages
router.delete('/messages/:id', auth, async (req, res) => {
  try {
    await getPool().query('DELETE FROM messages WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
