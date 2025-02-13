import React, { useState } from 'react';

const ManageStaffModal = ({ isOpen, onClose }) => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'Ramesh', present: true },
    { id: 2, name: 'Suresh', present: false },
    { id: 3, name: 'Amit', present: true }
  ]);

  const toggleAttendance = (id) => {
    setStaff(staff.map(s => s.id === id ? { ...s, present: !s.present } : s));
  };

  const handleAddStaff = () => {
    const newName = prompt("Enter new staff member's name:");
    if (newName) {
      setStaff([...staff, { id: staff.length + 1, name: newName, present: true }]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold text-white mb-4">Manage Staff</h2>
        <ul className="mb-4">
          {staff.map(member => (
            <li key={member.id} className="flex justify-between bg-gray-700 p-2 rounded my-1">
              <span>{member.name}</span>
              <button onClick={() => toggleAttendance(member.id)} className={`px-2 py-1 rounded ${member.present ? 'bg-green-600' : 'bg-red-600'}`}>
                {member.present ? 'Present' : 'Absent'}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <button onClick={handleAddStaff} className="bg-blue-600 px-4 py-2 rounded">Add Staff</button>
          <button onClick={onClose} className="bg-gray-600 px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ManageStaffModal;
