import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ContactInfo = ({ icon, text }) => (
  <p className="flex items-center space-x-2">
    {icon} <span>{text}</span>
  </p>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
      // Handle form submission logic here
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12">Have questions? We're here to help!</p>

        <div className="bg-white p-6 shadow-lg rounded-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <textarea
              name="message"
              placeholder="Your message here..."
              rows="4"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ContactInfo icon={<MapPin size={16} />} text="123 Mess Street, College Campus, City - 400001" />
            <ContactInfo icon={<Phone size={16} />} text="+91 123 456 7890" />
            <ContactInfo icon={<Mail size={16} />} text="support@messmate.com" />
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
            <p>Monday - Friday: <span className="font-semibold">7:00 AM - 10:00 PM</span></p>
            <p>Saturday: <span className="font-semibold">7:30 AM - 9:30 PM</span></p>
            <p>Sunday: <span className="font-semibold">8:00 AM - 9:00 PM</span></p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">MessMate</h3>
            <p className="mt-2 text-gray-400">Simplifying mess management for institutions and students across India.</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ContactInfo icon={<MapPin size={16} />} text="123 Mess Street, College Campus, City - 400001" />
            <ContactInfo icon={<Mail size={16} />} text="support@messmate.com" />
            <ContactInfo icon={<Phone size={16} />} text="+91 123 456 7890" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
