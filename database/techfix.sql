CREATE DATABASE IF NOT EXISTS techfix;
USE techfix;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category ENUM('Laptop','PC','Accessories','Components') NOT NULL,
  `condition` ENUM('New','Used') NOT NULL DEFAULT 'New',
  price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  description TEXT,
  image_url VARCHAR(1024),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS repairs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255),
  device_type ENUM('Laptop','PC','Other') NOT NULL,
  problem TEXT NOT NULL,
  status ENUM('received','in_progress','ready','delivered') DEFAULT 'received',
  image_url VARCHAR(1024),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed demo data
INSERT INTO admin (username, password)
SELECT 'owner', '$2a$10$yWzYSN1mYlL5mTFq0s8u.O6s8oV0m0W3J4QYqk4E0i.7GfGtZ6OOy' -- password: techfix123
WHERE NOT EXISTS (SELECT 1 FROM admin WHERE username='owner');

INSERT INTO products (name, category, `condition`, price, description, image_url)
VALUES
('Refurbished ThinkPad T480', 'Laptop', 'Used', 399.99, 'i5, 16GB RAM, 512GB SSD, Windows 11', ''),
('Custom Gaming PC - Ryzen 5', 'PC', 'New', 999.99, 'Ryzen 5 5600, RTX 3060, 16GB, 1TB NVMe', ''),
('Logitech MX Master 3S', 'Accessories', 'New', 99.99, 'Ergonomic wireless mouse', ''),
('Samsung 970 EVO 1TB NVMe', 'Components', 'New', 79.99, 'Fast NVMe SSD for laptops and desktops', '');

INSERT INTO repairs (customer_name, phone, email, device_type, problem)
VALUES
('Alice Johnson', '555-1234', 'alice@example.com', 'Laptop', 'Screen flickering intermittently'),
('Bob Smith', '555-5678', 'bob@example.com', 'PC', 'No display after power on');
