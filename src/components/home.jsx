import React, { useState } from 'react';
import { Search, MapPin, Phone, Star, Clock, ClipboardList, BarChart, MessageSquare, Users, CreditCard } from 'lucide-react';
import { Link } from "react-router-dom";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('');

  const messList = [
    {
      name: 'Shree Krishna Mess',
      location: 'Near Engineering College, Pune',
      rating: 4.5,
      totalRatings: '4.2/5',
      monthlyPlan: 2000,
      phone: '+91 98765 43210'
    },
    {
      name: 'Maharaja Mess',
      location: 'Kothrud, Pune',
      rating: 4.4,
      totalRatings: '4.8/5',
      monthlyPlan: 2500,
      phone: '+91 98765 43211'
    },
    {
      name: 'Annapurna Mess',
      location: 'FC Road, Pune',
      rating: 4.5,
      totalRatings: '4.5/5',
      monthlyPlan: 1800,
      phone: '+91 98765 43212'
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Attendance',
      description: 'Track meal attendance and manage daily operations efficiently with automated systems.'
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-green-500" />,
      title: 'Digital Menu Management',
      description: 'Plan and publish weekly menus, receive feedback, and make improvements.'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-500" />,
      title: 'Payment Processing',
      description: 'Secure payment gateway for mess fees with automated billing and receipts.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-500" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive reports and insights for better decision making.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-500" />,
      title: 'Feedback System',
      description: 'Collect and manage student feedback to improve mess services.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'User Management',
      description: 'Efficient student and staff management with role-based access control.'
    }
  ];

  const stats = [
    { value: '100+', label: 'Active Messes' },
    { value: '50k+', label: 'Students' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Support' }
  ];

  const missions = [
    {
      title: 'Digital Transformation',
      description: 'Bringing traditional mess management into the digital age with innovative solutions.'
    },
    {
      title: 'Quality Service',
      description: 'Ensuring high standards of service and food quality through systematic management.'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Prioritizing student satisfaction through responsive feedback systems and continuous improvement.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">

<div className="text-center py-20">
  <h1 className="text-5xl font-bold mb-4">Simplify Your Mess Management</h1>
  <p className="text-gray-300 mb-8">
    Streamline your mess operations with our comprehensive management system.
    Perfect for both mess owners and students.
  </p>
  <div className="space-x-4">
    <Link to="/owner-login">
      <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
        Mess Owner Login
      </button>
    </Link>
    <Link to="/student-login">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
        Student Login
      </button>
    </Link>
  </div>
</div>
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-gray-800 p-4 rounded-lg flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full bg-gray-700 rounded-md py-2 px-4 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          <select
            className="bg-gray-700 rounded-md py-2 px-4"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Price Range</option>
            <option value="0-2000">₹0 - ₹2000</option>
            <option value="2000-3000">₹2000 - ₹3000</option>
            <option value="3000+">₹3000+</option>
          </select>
          <select
            className="bg-gray-700 rounded-md py-2 px-4"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by Rating</option>
            <option value="high">Highest First</option>
            <option value="low">Lowest First</option>
          </select>
        </div>
      </div>

      {/* Mess Cards */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messList.map((mess, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">{mess.name}</h3>
            <div className="flex items-center text-gray-400 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {mess.location}
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(mess.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-400'
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-400">({mess.totalRatings})</span>
            </div>
            <div className="text-gray-300 mb-2">
              Monthly Plan: ₹{mess.monthlyPlan}
            </div>
            <div className="flex items-center text-gray-400 mb-4">
              <Phone className="w-4 h-4 mr-1" />
              {mess.phone}
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Powerful Features for Everyone
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Streamline your mess management with our comprehensive suite of features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:transform hover:scale-105 transition"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About MessMate</h2>
          <p className="text-gray-300 mb-8">
            MessMate is a comprehensive mess management solution designed to streamline the daily operations of
            mess facilities while enhancing the dining experience for students.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center text-green-500">
              <span className="mr-2">✓</span>
              Serving mess owners and students since 2020
            </div>
            <div className="flex items-center text-green-500">
              <span className="mr-2">✓</span>
              Supporting 100+ mess facilities nationwide
            </div>
            <div className="flex items-center text-green-500">
              <span className="mr-2">✓</span>
              Trusted by 50,000+ students
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-300 mb-12">
            To revolutionize mess management by providing cutting-edge digital solutions that benefit both mess
            owners and students, creating a seamless and efficient dining experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{mission.title}</h3>
                <p className="text-gray-300">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;









