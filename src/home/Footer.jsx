import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // Animation variants for the footer items
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-300 text-white py-10 mt-8 border-t-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 md:mb-0"
        >
          <h2 className="text-2xl font-bold">Resume Builder</h2>
          <p className="mt-2 text-gray-200">
            Create your standout resume effortlessly and land your dream job!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-pink-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-pink-300"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-300"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-pink-300"><FaInstagram /></a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4">
        <div className="container mx-auto text-center text-gray-200">
          <p>© 2024 Resume Builder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
