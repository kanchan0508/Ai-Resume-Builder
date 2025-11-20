import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg',
  'https://www.resumebuilder.com/wp-content/uploads/2020/03/Internship-Entry-Level-e1702495087380-768x1052.png'
];

const AnimatedZoomImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically switch images every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="flex justify-center items-center py-10 gap-8">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Resume ${index + 1}`}
          className="w-48 md:w-60 rounded-lg shadow-2xl border-4 border-white object-cover"
          // Zoom effect based on the current active image
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={{ 
            scale: currentIndex === index ? 1.1 : 0.9,
            opacity: currentIndex === index ? 1 : 0.7,
            zIndex: currentIndex === index ? 10 : 1
          }} 
          transition={{ duration: 0.6 }} 
        />
      ))}
    </div>
  );
};

export default AnimatedZoomImages;
