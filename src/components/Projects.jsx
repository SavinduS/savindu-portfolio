import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAndroid } from 'react-icons/fa';

// Import project images
import farmImg from '../assets/farm.png';
import foodImg from '../assets/food.png';
import movieImg from '../assets/movie.png';
import companyImg from '../assets/company.png';
import habbitImg from '../assets/habbit.jpg';

const projects = [
  {
    title: "MERN Stack E-Commerce",
    description: "A complete e-commerce platform with user authentication, product management, cart functionality, and payment gateway integration.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    github: "https://github.com/SavinduS/Smart-Farm-System", 
    live: "https://smart-farm-system-deployed-frontend.onrender.com", 
    image: farmImg
  },
  {
    title: "Online Food Ordering (OOP)",
    description: "Java Servlet-based application simulating restaurant operations. Features include menu browsing, order placement, and invoice generation.",
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    github: "https://github.com/SavinduS/Online-Food-Ordering",
    live: "https://online-food-ordering-app-lfmu.onrender.com", 
    image: foodImg
  },
  {
    title: "Movie Booking System",
    description: "Comprehensive cinema reservation platform with dynamic seat selection, booking history, and admin dashboard for management.",
    tech: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
    github: "https://github.com/SavinduS/Online-Movie-Booking",
    live: "https://swanscinema.fwh.is/", 
    image: movieImg
  },
  {
    title: "360 Technologies Official Site",
    description: "Designed and developed the official corporate website for 360 Technologies, focusing on modern UI/UX and responsive design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/The360Technologies/CompanyWeb", 
    live: "https://360tecnologies.com/", 
    image: companyImg
  },
  {
    title: "Mobile Fitness Tracker",
    description: "Native Android application built with Kotlin. Tracks workouts, calculates calories, and visualizes progress using charts.",
    tech: ["Kotlin", "Android Studio", "MPAndroidChart"],
    github: "https://github.com/SavinduS/PersonalWellness", 
    live: null, 
    image: habbitImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            A selection of my recent work, ranging from Web Applications to Mobile Solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-lg group hover:-translate-y-2"
    >
      {/* Image area */}
      <div className="h-48 w-full relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-surface to-background-light flex items-center justify-center">
            <p className="text-textSecondary text-sm">Image coming soon</p>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
        {/* Overlay Icon */}
        <div className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm text-white">
          {project.tech.includes("Kotlin") ? <FaAndroid /> : <FaExternalLinkAlt />}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-textSecondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-all flex-1 justify-center"
          >
            <FaGithub /> Code
          </a>
          
          {/* Only show Live Demo if link exists */}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-background bg-primary px-4 py-2 rounded-lg hover:bg-cyan-400 transition-all flex-1 justify-center font-bold"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;