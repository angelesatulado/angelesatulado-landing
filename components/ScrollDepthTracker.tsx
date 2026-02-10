"use client";

import { useEffect, useRef } from 'react';

const ScrollDepthTracker = () => {
  const trackedThresholds = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined" || !window.fbq) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      const thresholds = [25, 50, 75, 100];

      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.current.has(threshold)) {
          window.fbq('trackCustom', 'ScrollDepth', { percent: threshold });
          trackedThresholds.current.add(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollDepthTracker;
