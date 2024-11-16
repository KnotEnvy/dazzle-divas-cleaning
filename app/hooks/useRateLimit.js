// app/hooks/useRateLimit.js

import { useState, useEffect } from 'react';

export function useRateLimit(key, maxAttempts = 5, windowMs = 3600000) { // 1 hour window by default
  const [attempts, setAttempts] = useState([]);

  // Load attempts from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(`rateLimit_${key}`);
    if (stored) {
      setAttempts(JSON.parse(stored));
    }
  }, [key]);

  // Clean up old attempts
  useEffect(() => {
    const now = Date.now();
    const validAttempts = attempts.filter(timestamp => 
      now - timestamp < windowMs
    );
    
    if (validAttempts.length !== attempts.length) {
      setAttempts(validAttempts);
      localStorage.setItem(`rateLimit_${key}`, JSON.stringify(validAttempts));
    }
  }, [attempts, key, windowMs]);

  const canSubmit = attempts.length < maxAttempts;

  const recordSubmission = () => {
    const newAttempts = [...attempts, Date.now()];
    setAttempts(newAttempts);
    localStorage.setItem(`rateLimit_${key}`, JSON.stringify(newAttempts));
  };

  return { canSubmit, recordSubmission };
}
