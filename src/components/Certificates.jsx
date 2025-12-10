import React from 'react';
import { motion } from 'framer-motion';
import { SiPostman, SiMongodb, SiGithub, SiPython } from 'react-icons/si';
import { FaUniversity, FaAward } from 'react-icons/fa';

const certificates = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2024",
    icon: <SiPostman />,
    color: "text-orange-500",
    bg: "group-hover:bg-orange-500/10",
    border: "group-hover:border-orange-500/50"
  },
  {
    title: "GitHub Foundation",
    issuer: "GitHub",
    date: "2025", // Based on your CV plan
    icon: <SiGithub />,
    color: "text-white",
    bg: "group-hover:bg-white/10",
    border: "group-hover:border-white/50"
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB",
    date: "2025",
    icon: <SiMongodb />,
    color: "text-green-500",
    bg: "group-hover:bg-green-500/10",
    border: "group-hover:border-green-500/50"
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2025",
    icon: <SiPython />, // Python Icon
    color: "text-yellow-400",
    bg: "group-hover:bg-yellow-400/10",
    border: "group-hover:border-yellow-400/50"
  },
  {
    title: "Web Designer for Beginners",
    issuer: "University of Moratuwa",
    date: "2025",
    icon: <FaUniversity />, // General Uni Icon for Web Design
    color: "text-blue-400",
    bg: "group-hover:bg-blue-400/10",
    border: "group-hover:border-blue-400/50"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Licenses & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-textSecondary">
            Continuous learning and validation of technical skills.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative p-6 bg-surface rounded-xl border border-white/5 transition-all duration-300 ${cert.border}`}
    >
      {/* Hover Background Glow */}
      <div className={`absolute inset-0 rounded-xl transition-colors duration-300 opacity-0 group-hover:opacity-100 ${cert.bg}`}></div>

      <div className="relative z-10 flex items-center gap-6">
        {/* Icon Box */}
        <div className={`text-4xl p-3 bg-white/5 rounded-lg ${cert.color} transition-transform group-hover:scale-110`}>
          {cert.icon}
        </div>

        {/* Text Details */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {cert.title}
          </h3>
          <div className="flex items-center gap-2 text-textSecondary mt-1 text-sm">
            <FaAward className="text-primary/70" />
            <span>{cert.issuer}</span>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span>{cert.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;