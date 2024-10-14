import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg',
  'https://i.pinimg.com/736x/5d/e6/75/5de675c806a055f1219aed28600f3a62.jpg',
  'https://www.resumebuilder.com/wp-content/uploads/2020/03/Internship-Entry-Level-e1702495087380-768x1052.png'
];

const AnimatedZoomImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically switch images every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen space-x-4">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          width={250}
          height={200}
          alt={`Resume ${index + 1}`}
          className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"
          // Zoom effect based on the current active image
          initial={{ scale: 0.8 }}
          animate={{ scale: currentIndex === index ? 1.2 : 0.8 }} // Zoom in on the active image, zoom out on others
          transition={{ duration: 0.6 }} // Smooth transition duration
        />
      ))}
    </div>
  );
};

export default AnimatedZoomImages;
