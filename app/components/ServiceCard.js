// components/ServiceCard.js
'use client';

export default function ServiceCard({ title, description, icon }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div className="text-diva-pink mb-4 text-4xl animate-fade-in-up delay-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-diva-pink">{title}</h3>
        <p className="text-gray-600 ">{description}</p>
        
      </div>
    )
  }
  