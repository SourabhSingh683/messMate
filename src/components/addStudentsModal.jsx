import React, { useState } from 'react';

const AddStudentModal = ({ isOpen, onClose, onSave }) => {
  const [student, setStudent] = useState({ name: '', location: '', startDate: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (student.name && student.location && student.startDate) {
      onSave(student);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-white mb-4">Add New Student</h2>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={student.location}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        <input
          type="date"
          name="startDate"
          value={student.startDate}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700"
        />
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
