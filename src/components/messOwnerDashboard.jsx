import React, { useState } from "react";
import { Users, DollarSign, AlertCircle } from "lucide-react";
import AddStudentModal from "./addStudentsModal";
import ViewStudentsModal from "./viewStudentsModal";
import ManageProfilesModal from "./manageProfilesModal";
import EditMenuModal from "./editMenuModal";
import ManageStaffModal from "./manageStaffModal";
import InventoryModal from "./inventoryModal";

const MessOwnerDashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isManageProfilesOpen, setIsManageProfilesOpen] = useState(false);
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [isManageStaffOpen, setIsManageStaffOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  const [students, setStudents] = useState([]);
  const [menu, setMenu] = useState({
    Breakfast: { items: "Poha, Tea", time: "7:30 AM - 9:00 AM" },
    Lunch: { items: "Roti, Dal, Rice, Sabji", time: "12:30 PM - 2:00 PM" },
    Dinner: { items: "Paneer, Rice, Roti", time: "7:30 PM - 9:00 PM" },
  });

  const handleEditMenuClick = () => {
    console.log("Opening Edit Menu Modal...");
    setIsEditMenuOpen(true);
  };

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, startDate: new Date().toLocaleDateString() }]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Mess Owner Dashboard</h1>
        <p className="text-orange-400">Manage your mess operations efficiently</p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold text-white">{students.length}</div>
            <div className="text-sm text-green-500">+12% from last month</div>
          </div>
          <Users className="text-blue-500" size={36} />
        </div>
        <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold text-white">178</div>
            <div className="text-sm text-blue-500">72% of total students</div>
          </div>
          <Users className="text-green-500" size={36} />
        </div>
        <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold text-white">₹8,75,000</div>
            <div className="text-sm text-green-500">+8.5% from last month</div>
          </div>
          <DollarSign className="text-yellow-500" size={36} />
        </div>
        <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold text-white">₹45,000</div>
            <div className="text-sm text-red-500">from 15 students</div>
          </div>
          <AlertCircle className="text-red-500" size={36} />
        </div>
      </div>

      {/* Student Management Section */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Student Management</h2>
        <div className="flex space-x-4">
          <button onClick={() => setIsAddModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Add Student
          </button>
          <button onClick={() => setIsViewModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            View Students
          </button>
          <button onClick={() => setIsManageProfilesOpen(true)} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
            Manage Profiles
          </button>
        </div>
      </div>

      {/* Today's Menu Management */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Today's Menu Management</h2>
        <div className="space-y-4">
          {Object.keys(menu).map((meal, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-900 p-3 rounded-lg">
              <div>
                <p className="text-lg font-semibold">{meal}</p>
                <p className="text-gray-400 text-sm">{menu[meal].time}</p>
                <p className="text-gray-300">{menu[meal].items}</p>
              </div>
              <button 
                onClick={handleEditMenuClick} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Edit Menu
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory Management */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Inventory Alert</h2>
        <div className="space-y-3">
          {["Rice - Running low on stock", "Vegetables - Need to restock"].map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-900 p-3 rounded-lg">
              <p className="text-lg">{item}</p>
              <button 
                onClick={() => setIsInventoryOpen(true)} 
                className={`bg-${index === 0 ? "red" : "yellow"}-600 hover:bg-${index === 0 ? "red" : "yellow"}-700 text-white px-4 py-2 rounded-md`}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Management */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Staff Attendance</h2>
        <div className="flex justify-between items-center">
          <p className="text-lg">Present Staff: 12/15</p>
          <p className="text-lg">On Leave: 3</p>
        </div>
        <button 
          onClick={() => setIsManageStaffOpen(true)} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-4 rounded-md"
        >
          Manage Staff
        </button>
      </div>

      {/* Modals */}
      <AddStudentModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSave={handleAddStudent} />
      <ViewStudentsModal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} students={students} />
      <ManageProfilesModal isOpen={isManageProfilesOpen} onClose={() => setIsManageProfilesOpen(false)} students={students} setStudents={setStudents} />
      <EditMenuModal isOpen={isEditMenuOpen} onClose={() => setIsEditMenuOpen(false)} menu={menu} setMenu={setMenu} />
      <ManageStaffModal isOpen={isManageStaffOpen} onClose={() => setIsManageStaffOpen(false)} />
      <InventoryModal isOpen={isInventoryOpen} onClose={() => setIsInventoryOpen(false)} />
    </div>
  );
};

export default MessOwnerDashboard;
