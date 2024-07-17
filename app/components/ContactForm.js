// components/ContactForm.js
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-diva-blue mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="text-diva-pink w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-diva-pink"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-diva-blue mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-diva-pink w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-diva-pink"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-diva-blue mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="text-diva-pink w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-diva-pink"
          rows="4"
        ></textarea>
      </div>
      <button type="submit" className="bg-diva-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
        Send Message
      </button>
    </form>
  )
}