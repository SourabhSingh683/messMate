import React, { useState } from 'react';

const ManageProfilesModal = ({ isOpen, onClose, students, updateStudent, deleteStudent }) => {
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedLocation, setUpdatedLocation] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg w-3/4">
        <h2 className="text-xl font-bold text-white mb-4">Manage Students</h2>
        
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search by name or location" 
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Student List */}
        <div className="max-h-60 overflow-y-auto">
          {students.length === 0 ? (
            <p className="text-gray-400 text-center">No students available</p>
          ) : (
            students
              .filter(student => 
                student.name.toLowerCase().includes(search.toLowerCase()) ||
                student.location.toLowerCase().includes(search.toLowerCase())
              )
              .map((student) => (
                <div 
                  key={student.id} 
                  className={`flex justify-between bg-gray-800 p-2 rounded-lg mb-2 cursor-pointer ${
                    selectedStudent && selectedStudent.id === student.id ? "border border-blue-500" : ""
                  }`}
                  onClick={() => {
                    setSelectedStudent(student);
                    setUpdatedName(student.name);
                    setUpdatedLocation(student.location);
                  }}
                >
                  <div>
                    <p className="text-white">{student.name}</p>
                    <p className="text-sm text-gray-400">{student.location}</p>
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Edit Form */}
        {selectedStudent && (
          <div className="mt-4">
            <input
              type="text"
              className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
              value={updatedLocation}
              onChange={(e) => setUpdatedLocation(e.target.value)}
            />

            <div className="flex gap-2">
              <button
                onClick={() => {
                  updateStudent(selectedStudent.id, { name: updatedName, location: updatedLocation });
                  setSelectedStudent(null);
                }}
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white"
              >
                Save
              </button>
              <button
                onClick={() => setSelectedStudent(null)}
                className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Close Button */}
        <button onClick={onClose} className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ManageProfilesModal;
