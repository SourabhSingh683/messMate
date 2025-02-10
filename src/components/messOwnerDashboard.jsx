import React from 'react';
import { Users, DollarSign, AlertCircle } from 'lucide-react';

const DashboardItem = ({ title, value, metadata, icon }) => (
  <div className="bg-gray-800 rounded-lg p-4">
    <div className="flex justify-between items-start">
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className={`text-sm ${metadata.color || 'text-gray-400'}`}>{metadata.text}</div>
      </div>
      {icon}
    </div>
  </div>
);

const MessOwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Mess Owner Dashboard</h1>
        <p className="text-orange-400">Manage your mess operations efficiently</p>
      </div>

      {/* Total Students Section */}
      <div className="mb-6">
        <DashboardItem 
          value="245"
          metadata={{ text: "+12% from last month", color: "text-green-500" }}
          icon={<Users className="text-blue-500" size={32} />}
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md my-4">
          + Add New Student
        </button>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded-md">Manage Profiles</button>
          <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded-md">View Details</button>
        </div>
      </div>

      {/* Today's Attendance */}
      <div className="mb-6">
        <DashboardItem 
          value="178"
          metadata={{ text: "72% of total students", color: "text-blue-500" }}
          icon={<Users className="text-green-500" size={32} />}
        />
      </div>

      {/* Monthly Revenue */}
      <div className="mb-6">
        <DashboardItem 
          value="₹8,75,000"
          metadata={{ text: "+8.5% from last month", color: "text-green-500" }}
          icon={<DollarSign className="text-yellow-500" size={32} />}
        />
      </div>

      {/* Pending Payments */}
      <div className="mb-6">
        <DashboardItem 
          value="₹45,000"
          metadata={{ text: "from 15 students", color: "text-red-500" }}
          icon={<AlertCircle className="text-red-500" size={32} />}
        />
      </div>
    </div>
  );
};

export default MessOwnerDashboard;
