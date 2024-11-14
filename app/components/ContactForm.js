// app/components/ContactForm.js
// email sending and receiving in contact us


'use client';

import { useState } from 'react';
import { init, send } from '@emailjs/browser';
import { Loader2 } from 'lucide-react';

init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'residential'
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,    // EmailJS service ID from env
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,  // EmailJS template ID
        {
          from_name: formData.name,
          to_name: "Dazzle Divas",
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service_type: formData.serviceType
        }
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceType: 'residential'
      });

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again."
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-diva-blue mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 placeholder-gray-400"
          disabled={status.submitting}
          placeholder="Sally Fields"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-diva-blue mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 placeholder-gray-400"
          disabled={status.submitting}
          placeholder="needAclean@gmail.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-diva-blue mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 placeholder-gray-400"
          disabled={status.submitting}
          placeholder="555-303-8899"
        />
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-diva-blue mb-1">
          Service Type *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 bg-white"
          disabled={status.submitting}
        >
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="deepClean">Deep Cleaning</option>
          <option value="movein">Move In/Out Cleaning</option>
          <option value="vacation">Vacation Rental</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-diva-blue mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 placeholder-gray-400"
          disabled={status.submitting}
          placeholder="Our place is a mess please help!"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status.submitting}
        className="w-full bg-diva-pink text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.submitting ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      {status.submitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {status.error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          {status.error}
        </div>
      )}
    </form>
  );
}