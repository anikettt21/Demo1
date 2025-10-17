import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  Smartphone, 
  Wrench, 
  Shield, 
  Zap,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Laptop Repair',
      description: 'Expert repair services for all laptop brands and models'
    },
    {
      icon: Monitor,
      title: 'Custom PC Builds',
      description: 'Custom-built computers tailored to your needs'
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Professional data recovery from damaged drives'
    },
    {
      icon: Smartphone,
      title: 'Accessories',
      description: 'Quality tech accessories and components'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Excellent service! They fixed my laptop in just one day and the price was very reasonable.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      text: 'Great custom PC build. Exactly what I needed for my gaming setup.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      text: 'Recovered all my important files from a crashed hard drive. Highly recommended!',
      rating: 5
    }
  ];

  const features = [
    'Free diagnostic',
    'Same-day repair available',
    'Warranty on all repairs',
    'Competitive pricing',
    'Expert technicians',
    'Quality parts only'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                TechFix Hub
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Repair. Upgrade. Reuse.
              </p>
              <p className="text-lg mb-8 text-primary-200">
                Your trusted local computer repair and sales shop. We specialize in laptop repairs, 
                custom PC builds, data recovery, and quality second-hand tech products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/repair"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Wrench className="mr-2 h-5 w-5" />
                  Book Repair
                </Link>
                <Link
                  to="/shop"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Laptop className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Laptop Repair</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Monitor className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">PC Builds</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <HardDrive className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Data Recovery</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Smartphone className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Accessories</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive computer repair and sales services to meet all your tech needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose TechFix Hub?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We pride ourselves on providing exceptional service with a personal touch. 
                Our experienced technicians are committed to getting your devices working perfectly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Wrench className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Technicians</h3>
                      <p className="text-gray-600">Certified professionals with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Warranty Guaranteed</h3>
                      <p className="text-gray-600">All repairs come with our satisfaction guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fast Turnaround</h3>
                      <p className="text-gray-600">Most repairs completed within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for a free diagnostic or browse our selection of quality tech products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              to="/shop"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;