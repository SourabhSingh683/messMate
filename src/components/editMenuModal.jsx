import React, { useState } from "react";

const EditMenuModal = ({ isOpen, onClose, menu, setMenu }) => {
  const [updatedMenu, setUpdatedMenu] = useState(menu);

  const handleChange = (meal, field, value) => {
    setUpdatedMenu((prevMenu) => ({
      ...prevMenu,
      [meal]: { ...prevMenu[meal], [field]: value },
    }));
  };

  const handleSave = () => {
    setMenu(updatedMenu);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Edit Today's Menu</h2>
        
        {Object.keys(updatedMenu).map((meal) => (
          <div key={meal} className="mb-4">
            <h3 className="text-lg font-semibold">{meal}</h3>
            <input
              type="text"
              value={updatedMenu[meal].items}
              onChange={(e) => handleChange(meal, "items", e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white mt-2"
              placeholder="Enter items"
            />
            <input
              type="text"
              value={updatedMenu[meal].time}
              onChange={(e) => handleChange(meal, "time", e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white mt-2"
              placeholder="Enter time"
            />
          </div>
        ))}

        <div className="flex justify-end space-x-3 mt-4">
          <button onClick={onClose} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMenuModal;
