import React, { useState } from "react";

const ManageProfilesModal = ({ isOpen, onClose, students, setStudents }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [editStudentIndex, setEditStudentIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedLocation, setEditedLocation] = useState("");

  if (!isOpen) return null;

  // Handle Edit Student
  const handleEdit = (index) => {
    setEditStudentIndex(index);
    setEditedName(students[index].name);
    setEditedLocation(students[index].location);
  };

  // Save Edited Student
  const handleSaveEdit = () => {
    if (editStudentIndex !== null) {
      setStudents((prevStudents) => {
        const updatedStudents = [...prevStudents]; // Create a new array reference
        updatedStudents[editStudentIndex] = { name: editedName, location: editedLocation };
        return updatedStudents;
      });
      setEditStudentIndex(null);
    }
  };

  // Handle Delete Student
  const handleDelete = (index) => {
    setStudents((prevStudents) => prevStudents.filter((_, i) => i !== index));
  };

  // Filter students based on search query
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-[500px]">
        <h2 className="text-xl font-semibold mb-3">Manage Student Profiles</h2>
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 rounded-md text-white"
        />

        {filteredStudents.map((student, index) => (
          <div key={index} className="bg-gray-800 p-3 rounded-lg mb-2 flex justify-between items-center">
            <div>
              <p className="text-lg">{student.name}</p>
              <p className="text-gray-400 text-sm">{student.location}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {editStudentIndex !== null && (
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Edit Student</h3>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full p-2 mb-2 bg-gray-700 rounded-md text-white"
              placeholder="Edit Name"
            />
            <input
              type="text"
              value={editedLocation}
              onChange={(e) => setEditedLocation(e.target.value)}
              className="w-full p-2 mb-2 bg-gray-700 rounded-md text-white"
              placeholder="Edit Location"
            />
            <div className="flex space-x-2">
              <button
                onClick={handleSaveEdit}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white"
              >
                Save
              </button>
              <button
                onClick={() => setEditStudentIndex(null)}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <button onClick={onClose} className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 mt-4 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};

export default ManageProfilesModal;
