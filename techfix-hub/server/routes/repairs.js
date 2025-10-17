const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all repair requests
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.promise().execute(
      'SELECT * FROM repairs ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching repair requests:', error);
    res.status(500).json({ error: 'Failed to fetch repair requests' });
  }
});

// Get repair request by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.promise().execute(
      'SELECT * FROM repairs WHERE id = ?',
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Repair request not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching repair request:', error);
    res.status(500).json({ error: 'Failed to fetch repair request' });
  }
});

// Create new repair request
router.post('/', async (req, res) => {
  try {
    const { customer_name, phone, email, device_type, problem, image_url } = req.body;
    
    const [result] = await db.promise().execute(
      'INSERT INTO repairs (customer_name, phone, email, device_type, problem, image_url) VALUES (?, ?, ?, ?, ?, ?)',
      [customer_name, phone, email, device_type, problem, image_url]
    );
    
    res.status(201).json({ 
      id: result.insertId, 
      message: 'Repair request submitted successfully' 
    });
  } catch (error) {
    console.error('Error creating repair request:', error);
    res.status(500).json({ error: 'Failed to submit repair request' });
  }
});

// Update repair request status (Admin only)
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    const [result] = await db.promise().execute(
      'UPDATE repairs SET status = ? WHERE id = ?',
      [status, req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Repair request not found' });
    }
    
    res.json({ message: 'Repair request updated successfully' });
  } catch (error) {
    console.error('Error updating repair request:', error);
    res.status(500).json({ error: 'Failed to update repair request' });
  }
});

// Delete repair request (Admin only)
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.promise().execute(
      'DELETE FROM repairs WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Repair request not found' });
    }
    
    res.json({ message: 'Repair request deleted successfully' });
  } catch (error) {
    console.error('Error deleting repair request:', error);
    res.status(500).json({ error: 'Failed to delete repair request' });
  }
});

module.exports = router;