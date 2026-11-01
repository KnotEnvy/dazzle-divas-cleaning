// app/components/ContactForm.js
// email sending and receiving in contact us


'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

import { Loader2, AlertCircle } from 'lucide-react';
import { track, EVENTS } from '../lib/analytics';

// Validation rules
const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 1,
    maxLength: 100,

    message: {
      required: "Name is required",
      minLength: "Please enter your name",
      maxLength: "Name cannot exceed 100 characters"
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
    pattern: /^[\d\s+().xX#-]*$/,
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

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'residential'
  });

  // Honeypot. Hidden from people, irresistible to bots.
  const [company, setCompany] = useState('');
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const widget = useRef(null);
  const widgetId = useRef(null);
  const [challengeReady, setChallengeReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  useEffect(() => {
    if (!siteKey || !challengeReady || !window.turnstile || !widget.current) return;
    widgetId.current = window.turnstile.render(widget.current, {
      sitekey: siteKey, action: 'quote', size: 'compact', callback: setTurnstileToken,
      'expired-callback': () => setTurnstileToken(''),
      'error-callback': () => { setTurnstileToken(''); return true; },
    });
    return () => { if (widgetId.current != null) window.turnstile?.remove(widgetId.current); };
  }, [siteKey, challengeReady]);

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
    const processedValue = value;

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
    if (status.submitting) return;

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

    if (siteKey && !turnstileToken) {
      setStatus({ submitting: false, submitted: false, error: 'Please complete the verification, or call (386) 301-5775.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // The server validates and dispatches; only confirmed acceptance clears the form.
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          company, // honeypot
          turnstileToken,
          source: typeof window !== 'undefined' ? window.location.pathname : 'website',
        }),
      });

      const result = await res.json().catch(() => ({}));
      setTurnstileToken('');
      if (widgetId.current != null) window.turnstile?.reset(widgetId.current);

      if (!res.ok || result.ok !== true || result.delivered !== true) {
        if (result.errors) setErrors(result.errors);
        setStatus({
          submitting: false,
          submitted: false,
          error:
            result.error ||
            'Please check the highlighted fields and try again.',
        });
        track(EVENTS.QUOTE_SUBMIT_FAILED, { stage: 'capture', status: res.status });
        return;
      }
    } catch (error) {
      setTurnstileToken('');
      if (widgetId.current != null) window.turnstile?.reset(widgetId.current);
      setStatus({
        submitting: false,
        submitted: false,
        error:
          "We couldn't reach our server. Please try again, or call (386) 301-5775.",
      });
      track(EVENTS.QUOTE_SUBMIT_FAILED, { stage: 'capture', status: 'network' });
      return;
    }

    track(EVENTS.QUOTE_SUBMIT, { service_type: formData.serviceType });

    setStatus({ submitting: false, submitted: true, error: null });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      serviceType: 'residential'
    });
    setCompany('');
    setErrors({});
  };

  return (
    <div className="min-w-0 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
      <h3 className="text-2xl font-bold mb-6 text-white">Get Free Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
        {/* Honeypot — visually hidden and skipped by assistive tech and
            autofill. Bots fill it; the server drops anything that has it. */}
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="company">Company (leave this field empty)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

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
            className={`min-w-0 max-w-full w-full px-4 py-3 rounded-lg bg-white/20 border ${errors.name ? 'border-red-400/60' : 'border-white/30'} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            disabled={status.submitting}
            placeholder="Sally Fields"
            maxLength="100"
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
            className={`min-w-0 max-w-full w-full px-4 py-3 rounded-lg bg-white/20 border ${errors.email ? 'border-red-400/60' : 'border-white/30'} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            disabled={status.submitting}
            placeholder="needAclean@gmail.com"
            autoComplete="email"
            maxLength="254"
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
            className={`min-w-0 max-w-full w-full px-4 py-3 rounded-lg bg-white/20 border ${errors.phone ? 'border-red-400/60' : 'border-white/30'} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            disabled={status.submitting}
            placeholder="555-303-8899"
            maxLength="40"
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
            className="min-w-0 max-w-full w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
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
            className={`min-w-0 max-w-full w-full px-4 py-3 rounded-lg bg-white/20 border ${errors.message ? 'border-red-400/60' : 'border-white/30'} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400`}
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

        {siteKey && <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={() => setChallengeReady(true)} onError={() => setStatus(prev => ({ ...prev, error: 'Verification could not load. Please retry or call (386) 301-5775.' }))} />
          <div ref={widget} />
        </>}
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

        <p className="text-sm text-white mt-4 text-center">You can also call <a href="tel:+13863015775" className="underline">(386) 301-5775</a>.</p>
        <p className="text-xs text-white/70 mt-4 text-center">Will respond within 24 hours</p>
      </form>
    </div>
  );
}
