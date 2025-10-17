import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Star, CheckCircle, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types';

// Demo products data (same as in Shop.tsx)
const demoProducts: Product[] = [
  {
    id: 1,
    name: 'Dell XPS 13 Laptop',
    category: 'laptop',
    condition: 'new',
    price: 1299.99,
    description: 'High-performance ultrabook with Intel i7 processor and 16GB RAM',
    image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
    created_at: '2024-01-01'
  },
  {
    id: 2,
    name: 'MacBook Pro 14"',
    category: 'laptop',
    condition: 'used',
    price: 1899.99,
    description: 'Excellent condition MacBook Pro with M2 chip and 512GB SSD',
    image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    created_at: '2024-01-02'
  },
  {
    id: 3,
    name: 'Gaming PC Build',
    category: 'pc',
    condition: 'new',
    price: 2199.99,
    description: 'Custom gaming PC with RTX 4070, Intel i7, 32GB RAM, 1TB SSD',
    image_url: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800',
    created_at: '2024-01-03'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    category: 'accessories',
    condition: 'new',
    price: 149.99,
    description: 'RGB mechanical keyboard with Cherry MX switches',
    image_url: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800',
    created_at: '2024-01-04'
  },
  {
    id: 5,
    name: 'Gaming Mouse',
    category: 'accessories',
    condition: 'used',
    price: 79.99,
    description: 'High-precision gaming mouse with customizable RGB lighting',
    image_url: 'https://images.unsplash.com/photo-1527864550417-7f91c4da4b4c?w=800',
    created_at: '2024-01-05'
  },
  {
    id: 6,
    name: 'NVIDIA RTX 4080',
    category: 'components',
    condition: 'new',
    price: 1199.99,
    description: 'High-end graphics card for gaming and content creation',
    image_url: 'https://images.unsplash.com/photo-1591799264318-7e4ef8ddb7ea?w=800',
    created_at: '2024-01-06'
  },
  {
    id: 7,
    name: '27" 4K Monitor',
    category: 'accessories',
    condition: 'used',
    price: 299.99,
    description: 'Ultra-sharp 4K monitor perfect for work and gaming',
    image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    created_at: '2024-01-07'
  },
  {
    id: 8,
    name: 'Intel Core i9 Processor',
    category: 'components',
    condition: 'new',
    price: 599.99,
    description: 'Latest generation Intel Core i9 processor for maximum performance',
    image_url: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800',
    created_at: '2024-01-08'
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  // const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const productId = parseInt(id || '0');
    const foundProduct = demoProducts.find(p => p.id === productId);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_ITEM', payload: product });
    }
  };

  const features = [
    'Free shipping on orders over $100',
    '30-day return policy',
    '1-year warranty included',
    'Expert technical support'
  ];

  const specifications = [
    { label: 'Category', value: product.category.charAt(0).toUpperCase() + product.category.slice(1) },
    { label: 'Condition', value: product.condition === 'new' ? 'New' : 'Used' },
    { label: 'Price', value: `$${product.price.toFixed(2)}` },
    { label: 'Added', value: new Date(product.created_at).toLocaleDateString() }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2">
                <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  product.condition === 'new' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {product.condition === 'new' ? 'New' : 'Used'}
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(4.8/5)</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary-600">
                  ${product.price.toFixed(2)}
                </span>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Free shipping</p>
                  <p className="text-sm text-gray-600">30-day returns</p>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center text-lg font-semibold"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">What's Included</h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="space-y-2">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders over $100</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Warranty</h3>
            <p className="text-gray-600">1-year warranty included</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Returns</h3>
            <p className="text-gray-600">30-day return policy</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;