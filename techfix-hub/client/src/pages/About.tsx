import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Heart, 
  Target, 
  Lightbulb,
  CheckCircle,
  Star
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality. Every repair and product meets our high standards.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We treat every customer like family.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay updated with the latest technology to provide the best solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from repairs to customer service.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & Lead Technician',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      description: 'John started TechFix Hub with a vision to provide honest, reliable computer repair services to the community.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Technician',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      description: 'Sarah specializes in laptop repairs and data recovery. She has saved countless important files for our customers.'
    },
    {
      name: 'Mike Chen',
      role: 'PC Build Specialist',
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      description: 'Mike is our go-to expert for custom PC builds and gaming systems. He knows exactly what components work best together.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Devices Repaired' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '24hr', label: 'Average Repair Time' }
  ];

  const achievements = [
    'BBB A+ Rating for 10 consecutive years',
    'Local Business Excellence Award 2023',
    'Customer Choice Award - Computer Repair',
    'Certified Apple and Dell Service Provider',
    'Microsoft Certified Partner',
    'Google My Business 5-Star Rating'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About TechFix Hub
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Your trusted local computer repair and sales shop since 2009
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TechFix Hub was founded in 2009 by John Smith, a passionate computer technician 
                who wanted to provide honest, reliable repair services to the local community. 
                What started as a small repair shop in a garage has grown into the area's most 
                trusted computer service center.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've helped thousands of customers with everything from simple 
                software issues to complex hardware repairs. Our commitment to quality and 
                customer satisfaction has earned us a reputation as the go-to place for all 
                computer-related needs.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to offer not just repair services, but also a curated selection 
                of quality new and pre-owned computers, accessories, and components. We believe 
                in giving technology a second life through our "Repair. Upgrade. Reuse." philosophy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600"
                alt="TechFix Hub workspace"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at TechFix Hub
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to providing the best service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-center mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 text-center mb-4">
                  {member.experience} experience
                </p>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Achievements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're proud of the recognition we've received from our customers and the community. 
                These achievements reflect our commitment to excellence and customer satisfaction.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
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
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                alt="Awards and certifications"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-yellow-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 fill-current" />
                  <div>
                    <div className="text-lg font-bold">5.0</div>
                    <div className="text-sm">Google Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              "To provide exceptional computer repair and sales services while building lasting 
              relationships with our customers. We believe in the power of technology to improve 
              lives and are committed to making it accessible, reliable, and affordable for everyone."
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <p className="text-lg font-semibold">
                  "Repair. Upgrade. Reuse."
                </p>
                <p className="text-primary-100 text-sm mt-2">
                  Our commitment to sustainable technology
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;