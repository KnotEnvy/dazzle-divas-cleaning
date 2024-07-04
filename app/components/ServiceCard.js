// components/ServiceCard.js
'use client';

export default function ServiceCard({ title, description, icon }) {
    return (
      <div className="bg-blue-400 shadow-md rounded-lg p-6">
        <div className="text-diva-pink mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
  