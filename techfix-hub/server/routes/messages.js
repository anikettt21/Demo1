const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all messages
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.promise().execute(
      'SELECT * FROM messages ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// Get message by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.promise().execute(
      'SELECT * FROM messages WHERE id = ?',
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching message:', error);
    res.status(500).json({ error: 'Failed to fetch message' });
  }
});

// Create new message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const [result] = await db.promise().execute(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    
    res.status(201).json({ 
      id: result.insertId, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Delete message (Admin only)
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.promise().execute(
      'DELETE FROM messages WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

module.exports = router;