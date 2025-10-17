const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all products
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.promise().execute(
      'SELECT * FROM products ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.promise().execute(
      'SELECT * FROM products WHERE id = ?',
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Create new product (Admin only)
router.post('/', async (req, res) => {
  try {
    const { name, category, condition, price, description, image_url } = req.body;
    
    const [result] = await db.promise().execute(
      'INSERT INTO products (name, category, condition, price, description, image_url) VALUES (?, ?, ?, ?, ?, ?)',
      [name, category, condition, price, description, image_url]
    );
    
    res.status(201).json({ 
      id: result.insertId, 
      message: 'Product created successfully' 
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Update product (Admin only)
router.put('/:id', async (req, res) => {
  try {
    const { name, category, condition, price, description, image_url } = req.body;
    
    const [result] = await db.promise().execute(
      'UPDATE products SET name = ?, category = ?, condition = ?, price = ?, description = ?, image_url = ? WHERE id = ?',
      [name, category, condition, price, description, image_url, req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete product (Admin only)
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.promise().execute(
      'DELETE FROM products WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;