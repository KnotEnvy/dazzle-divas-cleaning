

'use client';

import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const addTrail = (x, y) => {
      setTrails(prevTrails => [...prevTrails, { x, y, id: Date.now() }]);
      setTimeout(() => {
        setTrails(prevTrails => prevTrails.slice(1));
      }, 750); // Trail duration
    };

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (isHovering) {
        addTrail(e.clientX, e.clientY);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setTrails([]);
    };

    window.addEventListener('mousemove', updatePosition);
    document.querySelectorAll('.hover-effect').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.querySelectorAll('.hover-effect').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isHovering]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: isHovering ? 'rgba(255, 105, 180, 0.5)' : 'transparent',
        }}
      />
      {trails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
          }}
        />
      ))}
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: background-color 0.3s ease;
        }
        .cursor-trail {
          position: fixed;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(255, 105, 180, 0.3);
          pointer-events: none;
          z-index: 9998;
          animation: fadeOut 0.75s forwards;
        }
        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: scale(0.5);
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;