import React from "react";

const Pricing = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose the perfect plan for your mess management needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="text-2xl font-bold my-3">₹999 <span className="text-sm">/month</span></p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Up to 50 students</li>
              <li>✅ Basic attendance tracking</li>
              <li>✅ Simple menu management</li>
              <li>✅ Email support</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-black text-white shadow-lg rounded-lg p-6 relative">
            <span className="absolute top-3 right-3 bg-blue-500 text-xs text-white px-2 py-1 rounded-full">Popular</span>
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-2xl font-bold my-3">₹1999 <span className="text-sm">/month</span></p>
            <ul className="space-y-2 text-gray-300">
              <li>✅ Up to 200 students</li>
              <li>✅ Advanced attendance tracking</li>
              <li>✅ Advanced menu management</li>
              <li>✅ Priority support</li>
              <li>✅ Analytics dashboard</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-2xl font-bold my-3">Custom</p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Unlimited students</li>
              <li>✅ Custom features</li>
              <li>✅ 24/7 dedicated support</li>
              <li>✅ Custom integration</li>
            </ul>
            <button className="w-full bg-black text-white py-2 mt-4 rounded-lg hover:bg-gray-800">
              Contact Us
            </button>
          </div>
        </div>

        {/* User Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
          <p className="text-center text-gray-600 mb-12">
            Trusted by mess owners and students across the country
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h4 className="text-lg font-bold">Rahul Kumar</h4>
              <p className="text-gray-300 text-sm">Mess Owner</p>
              <p className="mt-2">"MessMate has revolutionized how I manage my mess. The automated attendance and billing systems have saved me countless hours."</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h4 className="text-lg font-bold">Priya Singh</h4>
              <p className="text-gray-300 text-sm">Student</p>
              <p className="mt-2">"The app makes it so easy to check the menu, mark attendance, and pay my mess fees. Great user experience!"</p>
              <p className="mt-2">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
