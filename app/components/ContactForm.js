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
    pattern: /^[a-zA-Z\s\-'\.]+$/,
    message: {
      required: "Name is required",
      minLength: "Name must be at least 2 characters",
      maxLength: "Name cannot exceed 50 characters",
      pattern: "Please enter a valid name (letters, spaces, hyphens, apostrophes only)"
    }
  },
  email: {
    required: true,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: {
      required: "Email is required",
      pattern: "Please enter a valid email address"
    }
  },
  phone: {
    pattern: /^[\d\s\-\+\(\)]*$/,
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

// Enhanced input sanitization
const sanitizeInput = (value, fieldType = 'text') => {
  if (typeof value !== 'string') return '';
  
  let sanitized = value; // MODIFICATION: Remove .trim() here
  
  // Remove potentially dangerous characters but preserve spaces
  sanitized = sanitized.replace(/[<>]/g, '');
  
  // Remove excessive whitespace (multiple spaces become single space)
  // This will now also allow single leading/trailing spaces during typing.
  sanitized = sanitized.replace(/\s+/g, ' '); 
  
  // Apply field-specific sanitization
  switch (fieldType) {
    case 'name':
      // Allow letters, spaces, hyphens, apostrophes, and periods
      sanitized = sanitized.replace(/[^a-zA-Z\s\-'\.]/g, '');
      break;
    case 'email':
      // Basic email character set
      sanitized = sanitized.replace(/[^a-zA-Z0-9@._+-]/g, '');
      break;
    case 'phone':
      // Keep digits, spaces, dashes, parentheses, plus
      sanitized = sanitized.replace(/[^\d\s\-\+\(\)]/g, '');
      break;
    case 'message':
      // Allow most characters but remove dangerous ones
      // The global /[<>]/g removal above already handles this for message.
      // No additional character stripping that would remove spaces here.
      break;
  }
  
  return sanitized.slice(0, 1000); // Max length cap
};

// Phone number formatting
const formatPhoneNumber = (value) => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  
  // Format based on length
  if (digits.length === 0) return '';
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length <= 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  
  // Handle longer numbers (with country code)
  if (digits.length === 11 && digits[0] === '1') {
    return `+1 ${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
  }
  
  // Default formatting for 10+ digits
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

// Enhanced rate limiting with IP simulation and CSRF protection
const checkRateLimit = () => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
  const recentSubmissions = submissions.filter(time => now - time < 3600000); // Last hour
  
  // More restrictive rate limiting
  if (recentSubmissions.length >= 3) return false;
  
  localStorage.setItem('formSubmissions', JSON.stringify([...recentSubmissions, now]));
  return true;
};

// Generate a simple CSRF token
const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
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
  
  const [csrfToken] = useState(() => generateCSRFToken());

  // Validate field
  const validateField = (name, value) => {
    const rules = VALIDATION_RULES[name];
    if (!rules) return null;

    if (rules.required && !value.trim()) {
      return rules.message.required;
    }

    if (rules.minLength && value.trim().length < rules.minLength) {
      return rules.message.minLength;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return rules.message.maxLength;
    }

    if (rules.pattern && value.trim() && !rules.pattern.test(value)) {
      return rules.message.pattern;
    }

    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    
    // Apply field-specific processing
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value);
    } else {
      processedValue = sanitizeInput(value, name);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
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
        error: "Too many submission attempts. Please wait before trying again."
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

    // Additional security checks
    const suspiciousPatterns = [
      /script/i,
      /javascript/i,
      /onload/i,
      /onerror/i,
      /onclick/i,
      /<iframe/i,
      /<object/i,
      /<embed/i,
      /eval\(/i,
      /expression\(/i
    ];

    const allFieldsText = Object.values(formData).join(' ').toLowerCase();
    if (suspiciousPatterns.some(pattern => pattern.test(allFieldsText))) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Invalid input detected. Please check your message."
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          to_name: "Dazzle Divas",
          from_email: formData.email.trim(),
          phone: formData.phone || 'Not provided',
          message: formData.message.trim(),
          service_type: formData.serviceType,
          timestamp: new Date().toISOString(),
          csrf_token: csrfToken,
          user_agent: navigator.userAgent.substring(0, 100), // Truncated for security
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
      setErrors({});

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again or call us directly."
      });
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h3 className="text-2xl font-bold mb-6 text-white">Get Free Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
        {/* Hidden CSRF token */}
        <input type="hidden" name="csrf_token" value={csrfToken} />
        
        <div>
          <label htmlFor="name" className="sr-only">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${errors.name ? 'border-red-400/60' : 'border-white/30'} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            disabled={status.submitting}
            placeholder="Sally Fields"
            maxLength="50"
            autoComplete="name"
          />
          {errors.name && (
            <div className="mt-1 text-red-200 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${errors.email ? 'border-red-400/60' : 'border-white/30'} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            disabled={status.submitting}
            placeholder="needAclean@gmail.com"
            autoComplete="email"
          />
          {errors.email && (
            <div className="mt-1 text-red-200 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${errors.phone ? 'border-red-400/60' : 'border-white/30'} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            disabled={status.submitting}
            placeholder="555-303-8899"
            maxLength="20"
            autoComplete="tel"
          />
          {errors.phone && (
            <div className="mt-1 text-red-200 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phone}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="serviceType" className="sr-only">Service Type *</label>
          <select
            id="serviceType"
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            disabled={status.submitting}
          >
            <option value="vacationTurnover">Vacation rental turnover</option>
            <option value="residential">Residential Clean</option>
            <option value="commercial">Commercial Clean</option>
            <option value="joinTeam">Join the Team</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message *</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="4"
            className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${errors.message ? 'border-red-400/60' : 'border-white/30'} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            disabled={status.submitting}
            placeholder="Property details, special requests..."
            maxLength="1000"
          />
          <div className="text-xs text-white/80 mt-1">
            {formData.message.length}/1000 characters
          </div>
          {errors.message && (
            <div className="mt-1 text-red-200 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status.submitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Sending...
            </>
          ) : (
            'Get My Free Quote'
          )}
        </button>

        {status.submitted && (
          <div className="mt-4 p-4 rounded-md border border-green-400/30 bg-green-500/10 text-green-200">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}

        {status.error && (
          <div className="mt-4 p-4 rounded-md border border-red-400/30 bg-red-500/10 text-red-200 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {status.error}
          </div>
        )}

        <p className="text-xs text-white/70 mt-4 text-center">Will respond within 24 hours</p>
      </form>
    </div>
  );
}
