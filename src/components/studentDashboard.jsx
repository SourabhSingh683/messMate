import React, { useState } from 'react';

const StudentDashboard = () => {
  const todayMenu = [
    { item: 'Poha', status: 'Available' },
    { item: 'Tea', status: 'Available' },
    { item: 'Bread & Butter', status: 'Available' },
  ];

  const [meals, setMeals] = useState([
    { name: 'Breakfast', marked: false },
    { name: 'Lunch', marked: false },
    { name: 'Dinner', marked: false },
  ]);

  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const announcements = [
    {
      time: 'Today',
      title: 'Special Dinner Menu for Festival',
      description: 'Join us for a special festive dinner tomorrow!',
      color: 'bg-blue-500'
    },
    {
      time: 'Yesterday',
      title: 'Maintenance Notice',
      description: 'Kitchen will be under maintenance on Sunday.',
      color: 'bg-orange-500'
    },
    {
      time: '2 days ago',
      title: 'New Menu Items Added',
      description: 'Check out our new breakfast options!',
      color: 'bg-green-500'
    }
  ];

  const handleMealMarking = (index) => {
    setMeals((prevMeals) => {
      return prevMeals.map((meal, i) =>
        i === index ? { ...meal, marked: !meal.marked } : meal
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-2xl font-bold text-white">Student Dashboard</h1>
          <p className="text-orange-400">Manage your mess experience effortlessly</p>
        </div>

        {/* Today's Menu */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Today's Menu</h2>
            <span className="bg-blue-900/50 text-blue-200 text-sm px-2 py-1 rounded">Breakfast</span>
          </div>
          <div className="p-4 space-y-3">
            {todayMenu.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-300">{item.item}</span>
                <span className="text-green-400">{item.status}</span>
              </div>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-md shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200">
              View Full Menu
            </button>
          </div>
        </div>

        {/* Meal Attendance */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Meal Attendance</h2>
            <span className="bg-green-900/50 text-green-200 text-sm px-2 py-1 rounded">Today</span>
          </div>
          <div className="p-4 space-y-4">
            {meals.map((meal, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-300">{meal.name}</span>
                <button
                  onClick={() => handleMealMarking(index)}
                  className={`px-6 py-2 rounded-md shadow-md text-white font-medium transition-all duration-200 ${
                    meal.marked
                      ? "bg-green-600 hover:bg-green-700 shadow-green-500/40"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-blue-500/20 hover:shadow-blue-500/40"
                  }`}
                >
                  {meal.marked ? "Marked ✅" : "Mark"}
                </button>
              </div>
            ))}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Monthly Attendance</span>
                <span className="font-semibold text-white">85%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Feedback */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Submit Feedback</h2>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <p className="mb-2 text-gray-300">Rate Today's Food</p>
              <div className="flex space-x-4">
                {['😞', '😐', '🙂', '😊'].map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedEmoji(index)}
                    className={`w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800 transition-colors ${
                      selectedEmoji === index ? "bg-blue-700 text-white" : ""
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-gray-300">Comments</p>
              <textarea
                placeholder="Your feedback helps us improve"
                className="w-full h-24 bg-gray-800 border border-gray-700 rounded-md p-2 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-md shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200">
              Submit Feedback
            </button>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Announcements</h2>
          </div>
          <div className="p-4 space-y-4">
            {announcements.map((announcement, index) => (
              <div key={index} className="flex gap-4">
                <div className={`w-1 rounded ${announcement.color}`} />
                <div className="flex-1">
                  <div className="text-sm text-gray-400">{announcement.time}</div>
                  <div className="font-medium text-gray-200">{announcement.title}</div>
                  <div className="text-sm text-gray-400">{announcement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
