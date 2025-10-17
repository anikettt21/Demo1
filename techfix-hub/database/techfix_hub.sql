-- TechFix Hub Database Schema
-- This file contains the complete database schema for the TechFix Hub website

-- Create database
CREATE DATABASE IF NOT EXISTS techfix_hub;
USE techfix_hub;

-- Products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category ENUM('laptop', 'pc', 'accessories', 'components') NOT NULL,
    condition ENUM('new', 'used') NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Repair requests table
CREATE TABLE repairs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    device_type ENUM('laptop', 'pc', 'other') NOT NULL,
    problem TEXT NOT NULL,
    image_url VARCHAR(500),
    status ENUM('pending', 'in_progress', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Customer messages table
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin users table
CREATE TABLE admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO products (name, category, condition, price, description, image_url) VALUES
('Dell XPS 13 Laptop', 'laptop', 'new', 1299.99, 'High-performance ultrabook with Intel i7 processor and 16GB RAM', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'),
('MacBook Pro 14"', 'laptop', 'used', 1899.99, 'Excellent condition MacBook Pro with M2 chip and 512GB SSD', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'),
('Gaming PC Build', 'pc', 'new', 2199.99, 'Custom gaming PC with RTX 4070, Intel i7, 32GB RAM, 1TB SSD', 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400'),
('Mechanical Keyboard', 'accessories', 'new', 149.99, 'RGB mechanical keyboard with Cherry MX switches', 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400'),
('Gaming Mouse', 'accessories', 'used', 79.99, 'High-precision gaming mouse with customizable RGB lighting', 'https://images.unsplash.com/photo-1527864550417-7f91c4da4b4c?w=400'),
('NVIDIA RTX 4080', 'components', 'new', 1199.99, 'High-end graphics card for gaming and content creation', 'https://images.unsplash.com/photo-1591799264318-7e4ef8ddb7ea?w=400'),
('27" 4K Monitor', 'accessories', 'used', 299.99, 'Ultra-sharp 4K monitor perfect for work and gaming', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'),
('Intel Core i9 Processor', 'components', 'new', 599.99, 'Latest generation Intel Core i9 processor for maximum performance', 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400'),
('ASUS ROG Laptop', 'laptop', 'used', 1599.99, 'Gaming laptop with RTX 3060, AMD Ryzen 7, 16GB RAM', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'),
('Custom Workstation', 'pc', 'new', 2499.99, 'Professional workstation for video editing and 3D rendering', 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400');

INSERT INTO repairs (customer_name, phone, email, device_type, problem) VALUES
('John Doe', '(555) 123-4567', 'john@example.com', 'laptop', 'Screen is cracked and needs replacement'),
('Jane Smith', '(555) 987-6543', 'jane@example.com', 'pc', 'Computer won\'t turn on, possible power supply issue'),
('Mike Johnson', '(555) 456-7890', 'mike@example.com', 'laptop', 'Keyboard not working properly, some keys are stuck'),
('Sarah Wilson', '(555) 321-0987', 'sarah@example.com', 'other', 'External hard drive not being recognized by computer'),
('David Brown', '(555) 654-3210', 'david@example.com', 'pc', 'Graphics card overheating and causing crashes');

INSERT INTO messages (name, email, message) VALUES
('Mike Johnson', 'mike@example.com', 'Do you repair gaming laptops? I have an ASUS ROG that needs fixing.'),
('Sarah Wilson', 'sarah@example.com', 'What are your rates for data recovery from a failed hard drive?'),
('Tom Davis', 'tom@example.com', 'Do you offer pickup and delivery service for computer repairs?'),
('Lisa Anderson', 'lisa@example.com', 'I need help building a custom PC for video editing. Can you help?'),
('Robert Taylor', 'robert@example.com', 'My laptop is running very slow. Can you help optimize it?');

-- Insert default admin user (password: admin123)
INSERT INTO admin_users (username, password) VALUES
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_condition ON products(condition);
CREATE INDEX idx_repairs_status ON repairs(status);
CREATE INDEX idx_repairs_created_at ON repairs(created_at);
CREATE INDEX idx_messages_created_at ON messages(created_at);