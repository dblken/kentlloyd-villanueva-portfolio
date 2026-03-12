import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMonitor, FiSmartphone, FiArrowRight } from 'react-icons/fi';

import kingdomImg from '../assets/image/kingdom_learning_network.png';
import attendance1 from '../assets/image/attendance_1.jpeg';
import attendance2 from '../assets/image/attendance_2.jpeg';
import mobile1 from '../assets/image/mobile_1.jpg';
import mobile2 from '../assets/image/mobile_2.jpg';

// Auto-cycling image component for laptop mockup
const CyclingLaptopImage = ({ images, alt }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover object-top"
        />
      </AnimatePresence>
    </div>
  );
};

// Auto-cycling image component for phone mockup
const CyclingPhoneImage = ({ images, alt }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-gray-900 pt-8">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover object-top"
        />
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <p className="text-gray-400 font-inter">A showcase of real-world digital solutions I've built.</p>
        </div>

        <div className="space-y-32">

          {/* Project 1 — Kingdom Learning Network */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative mx-auto max-w-[600px] bg-dark-bg border-[12px] border-dark-border rounded-t-xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative overflow-hidden bg-gray-900">
                  <img
                    src={kingdomImg}
                    alt="Kingdom Learning Network"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="h-4 bg-dark-border w-[110%] -ml-[5%] rounded-b-xl" />
              <div className="h-2 bg-dark-border w-[20%] mx-auto rounded-b-xl" />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-10 -right-10 glass p-4 rounded-xl hidden md:block"
              >
                <FiMonitor className="text-3xl text-primary" />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Full Website Development</span>
              <h3 className="text-3xl md:text-4xl font-outfit font-bold mt-4 mb-6">Kingdom Learning Network</h3>
              <p className="text-gray-400 text-lg mb-8 font-inter">
                A modern SaaS-style learning platform built for Kingdom Learning Network. Designed for seamless course discovery, clean UI navigation, and an engaging user experience across all devices.
              </p>
              <ul className="space-y-4 mb-10">
                {['Modern SaaS Landing Page Design', 'Responsive & Mobile-First Layout', 'Smooth Animations with Framer Motion', 'Built with Next.js & Tailwind CSS'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href="https://kingdom-learning-network.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 font-bold text-primary hover:text-white transition-colors group"
              >
                Visit Live Site <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Project 2 — Attendance System (no link) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative mx-auto max-w-[600px] bg-dark-bg border-[12px] border-dark-border rounded-t-xl overflow-hidden shadow-2xl">
                <div className="aspect-video">
                  <CyclingLaptopImage images={[attendance1, attendance2]} alt="Attendance System" />
                </div>
              </div>
              <div className="h-4 bg-dark-border w-[110%] -ml-[5%] rounded-b-xl" />
              <div className="h-2 bg-dark-border w-[20%] mx-auto rounded-b-xl" />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-10 -left-10 glass p-4 rounded-xl hidden md:block"
              >
                <FiMonitor className="text-3xl text-secondary" />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Web System Development</span>
              <h3 className="text-3xl md:text-4xl font-outfit font-bold mt-4 mb-6">Attendance Management System</h3>
              <p className="text-gray-400 text-lg mb-8 font-inter">
                A comprehensive web-based attendance tracking system designed to streamline monitoring, reporting, and record-keeping for organizations. Features real-time updates and an intuitive admin dashboard.
              </p>
              <ul className="space-y-4 mb-10">
                {['Real-Time Attendance Tracking', 'Admin Dashboard & Reports', 'User Role Management', 'Clean & Responsive UI'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Project 3 — Mobile App (no link) */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative flex justify-center"
            >
              <div className="relative w-[280px] h-[580px] bg-dark-bg border-[10px] border-dark-border rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark-border rounded-b-2xl z-20" />
                <CyclingPhoneImage images={[mobile1, mobile2]} alt="Mobile App" />
              </div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 glass p-4 rounded-xl hidden md:block"
              >
                <FiSmartphone className="text-3xl text-primary" />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Mobile App Design</span>
              <h3 className="text-3xl md:text-4xl font-outfit font-bold mt-4 mb-6">Mobile Application</h3>
              <p className="text-gray-400 text-lg mb-8 font-inter">
                A sleek and modern mobile app UI designed with a focus on usability, clean visual hierarchy, and smooth interactions. Crafted to deliver an exceptional on-the-go experience.
              </p>
              <ul className="space-y-4 mb-10">
                {['Intuitive Mobile UI Design', 'Clean Visual Hierarchy', 'Dark Mode Optimized', 'Smooth Screen Transitions'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
