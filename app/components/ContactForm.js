// components/ContactForm.js

'use client';

export default function ContactForm() {
    return (
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-100">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-lg"></textarea>
        </div>
        <button type="submit" className="bg-diva-pink text-white px-4 py-2 rounded-full">Send Message</button>
      </form>
    )
  }
  