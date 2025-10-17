import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Star, Eye } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types';

// Demo products data
const demoProducts: Product[] = [
  {
    id: 1,
    name: 'Dell XPS 13 Laptop',
    category: 'laptop',
    condition: 'new',
    price: 1299.99,
    description: 'High-performance ultrabook with Intel i7 processor and 16GB RAM',
    image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    created_at: '2024-01-01'
  },
  {
    id: 2,
    name: 'MacBook Pro 14"',
    category: 'laptop',
    condition: 'used',
    price: 1899.99,
    description: 'Excellent condition MacBook Pro with M2 chip and 512GB SSD',
    image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    created_at: '2024-01-02'
  },
  {
    id: 3,
    name: 'Gaming PC Build',
    category: 'pc',
    condition: 'new',
    price: 2199.99,
    description: 'Custom gaming PC with RTX 4070, Intel i7, 32GB RAM, 1TB SSD',
    image_url: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400',
    created_at: '2024-01-03'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    category: 'accessories',
    condition: 'new',
    price: 149.99,
    description: 'RGB mechanical keyboard with Cherry MX switches',
    image_url: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
    created_at: '2024-01-04'
  },
  {
    id: 5,
    name: 'Gaming Mouse',
    category: 'accessories',
    condition: 'used',
    price: 79.99,
    description: 'High-precision gaming mouse with customizable RGB lighting',
    image_url: 'https://images.unsplash.com/photo-1527864550417-7f91c4da4b4c?w=400',
    created_at: '2024-01-05'
  },
  {
    id: 6,
    name: 'NVIDIA RTX 4080',
    category: 'components',
    condition: 'new',
    price: 1199.99,
    description: 'High-end graphics card for gaming and content creation',
    image_url: 'https://images.unsplash.com/photo-1591799264318-7e4ef8ddb7ea?w=400',
    created_at: '2024-01-06'
  },
  {
    id: 7,
    name: '27" 4K Monitor',
    category: 'accessories',
    condition: 'used',
    price: 299.99,
    description: 'Ultra-sharp 4K monitor perfect for work and gaming',
    image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    created_at: '2024-01-07'
  },
  {
    id: 8,
    name: 'Intel Core i9 Processor',
    category: 'components',
    condition: 'new',
    price: 599.99,
    description: 'Latest generation Intel Core i9 processor for maximum performance',
    image_url: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400',
    created_at: '2024-01-08'
  }
];

const Shop: React.FC = () => {
  const [products] = useState<Product[]>(demoProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(demoProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const { dispatch } = useCart();

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'laptop', label: 'Laptops' },
    { value: 'pc', label: 'PCs' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'components', label: 'Components' }
  ];

  const conditions = [
    { value: 'all', label: 'All Conditions' },
    { value: 'new', label: 'New' },
    { value: 'used', label: 'Used' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' }
  ];

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by condition
    if (selectedCondition !== 'all') {
      filtered = filtered.filter(product => product.condition === selectedCondition);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, selectedCondition, sortBy]);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop Tech Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our selection of new and pre-owned computers, accessories, and components
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Condition Filter */}
            <div>
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {conditions.map(condition => (
                  <option key={condition.value} value={condition.value}>
                    {condition.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    product.condition === 'new' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {product.condition === 'new' ? 'New' : 'Used'}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <Link
                    to={`/shop/${product.id}`}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                  >
                    <Eye className="h-4 w-4 text-gray-600" />
                  </Link>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedCondition('all');
                }}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;