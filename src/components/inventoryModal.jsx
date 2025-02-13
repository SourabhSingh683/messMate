import React, { useState } from 'react';

const InventoryModal = ({ isOpen, onClose }) => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Rice', quantity: 10, unit: 'kg' },
    { id: 2, name: 'Lentils', quantity: 5, unit: 'kg' },
    { id: 3, name: 'Vegetables', quantity: 2, unit: 'kg' }
  ]);

  const handleReorder = (id) => {
    setInventory(inventory.map(item => item.id === id ? { ...item, quantity: item.quantity + 10 } : item));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold text-white mb-4">Inventory Management</h2>
        <ul className="mb-4">
          {inventory.map(item => (
            <li key={item.id} className="flex justify-between bg-gray-700 p-2 rounded my-1">
              <span>{item.name}: {item.quantity} {item.unit}</span>
              <button onClick={() => handleReorder(item.id)} className="bg-yellow-600 px-2 py-1 rounded">Reorder</button>
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="bg-gray-600 px-4 py-2 rounded w-full">Close</button>
      </div>
    </div>
  );
};

export default InventoryModal;
