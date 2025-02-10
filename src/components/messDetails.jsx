import React from "react";
import { useParams } from "react-router-dom";

const messList = [
  {
    id: 1,
    name: "Shree Krishna Mess",
    location: "Near Engineering College, Pune",
    rating: 4.5,
    totalRatings: "4.2/5",
    monthlyPlan: 2000,
    phone: "+91 98765 43210",
    description: "Shree Krishna Mess provides healthy and hygienic food for students with a variety of meals.",
  },
  {
    id: 2,
    name: "Maharaja Mess",
    location: "Kothrud, Pune",
    rating: 4.4,
    totalRatings: "4.8/5",
    monthlyPlan: 2500,
    phone: "+91 98765 43211",
    description: "Maharaja Mess is known for its home-style cooked meals with high-quality ingredients.",
  },
  {
    id: 3,
    name: "Annapurna Mess",
    location: "FC Road, Pune",
    rating: 4.5,
    totalRatings: "4.5/5",
    monthlyPlan: 1800,
    phone: "+91 98765 43212",
    description: "Annapurna Mess offers a balanced diet at an affordable price, catering to students' needs.",
  }
];

const MessDetails = () => {
  const { id } = useParams();
  const mess = messList.find((m) => m.id === parseInt(id));

  if (!mess) {
    return <h2 className="text-white text-center mt-10">Mess Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-4">{mess.name}</h2>
      <p className="text-gray-400">{mess.description}</p>
      <div className="mt-4">
        <p><strong>Location:</strong> {mess.location}</p>
        <p><strong>Rating:</strong> {mess.rating} ({mess.totalRatings})</p>
        <p><strong>Monthly Plan:</strong> ₹{mess.monthlyPlan}</p>
        <p><strong>Phone:</strong> {mess.phone}</p>
      </div>
    </div>
  );
};

export default MessDetails;
