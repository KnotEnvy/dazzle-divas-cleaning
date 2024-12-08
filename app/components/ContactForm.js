// app/components/ContactForm.js
// email sending and receiving in contact us


'use client';

import { useState, useCallback } from 'react';
import { init, send } from '@emailjs/browser';
import { Loader2, AlertCircle } from 'lucide-react';

// Initialize EmailJS only once
init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// Validation rules
const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s-']+$/,
    message: {
      required: "Name is required",
      minLength: "Name must be at least 2 characters",
      maxLength: "Name cannot exceed 50 characters",
      pattern: "Please enter a valid name"
    }
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: {
      required: "Email is required",
      pattern: "Please enter a valid email address"
    }
  },
  phone: {
    pattern: /^[\d\s-+()]*$/,
    message: {
      pattern: "Please enter a valid phone number"
    }
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: {
      required: "Message is required",
      minLength: "Message must be at least 10 characters",
      maxLength: "Message cannot exceed 1000 characters"
    }
  }
};

// Simple input sanitization
const sanitizeInput = (value) => {
  if (typeof value !== 'string') return '';
  return value
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 1000);
};

// Simple rate limiting using localStorage
const checkRateLimit = () => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
  const recentSubmissions = submissions.filter(time => now - time < 3600000); // Last hour
  
  if (recentSubmissions.length >= 5) return false;
  
  localStorage.setItem('formSubmissions', JSON.stringify([...recentSubmissions, now]));
  return true;
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'residential'
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Validate field
  const validateField = (name, value) => {
    const rules = VALIDATION_RULES[name];
    if (!rules) return null;

    if (rules.required && !value) {
      return rules.message.required;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return rules.message.minLength;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return rules.message.maxLength;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.message.pattern;
    }

    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check rate limit
    if (!checkRateLimit()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please wait a while before submitting another message."
      });
      return;
    }

    // Validate all fields
    const newErrors = {};
    Object.keys(VALIDATION_RULES).forEach(field => {
      if (field in formData) {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Dazzle Divas",
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service_type: formData.serviceType,
          timestamp: new Date().toISOString(),
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
        serviceType: 'vacation'
      });
      setErrors({});

    } catch (error) {
      console.error('Form submission error:', error);
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
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 placeholder-gray-400 
            ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          disabled={status.submitting}
          placeholder="Sally Fields"
        />
        {errors.name && (
          <div className="mt-1 text-red-600 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.name}
          </div>
        )}
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
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 placeholder-gray-400
            ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          disabled={status.submitting}
          placeholder="needAclean@gmail.com"
        />
        {errors.email && (
          <div className="mt-1 text-red-600 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.email}
          </div>
        )}
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
          onBlur={handleBlur}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 placeholder-gray-400
            ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          disabled={status.submitting}
          placeholder="555-303-8899"
        />
        {errors.phone && (
          <div className="mt-1 text-red-600 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.phone}
          </div>
        )}
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
          onBlur={handleBlur}
          rows="4"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-diva-pink focus:border-diva-pink text-gray-700 placeholder-gray-400
            ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          disabled={status.submitting}
          placeholder="Our place is a mess please help!"
        />
        {errors.message && (
          <div className="mt-1 text-red-600 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.message}
          </div>
        )}
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
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}

      {status.error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          {status.error}
        </div>
      )}
    </form>
  );
}