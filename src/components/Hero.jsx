import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import profileImg from '../assets/profile.png'; 

const Hero = () => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // --- Professional Parallax Logic (disabled on mobile/reduced motion) ---
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 200]);

  return (
    <section 
      ref={ref} 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10 overflow-hidden relative"
    >
      
      {/* Background Glow (Static atmosphere) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT COLUMN: TEXT CONTENT --- */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -50 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center md:text-left z-10"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-lg mb-2"
          >
             Hi There, I'm
          </motion.h3>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Savindu <br className="hidden md:block"/>
            Weerarathna
          </h1>

          <div className="text-xl md:text-2xl text-textSecondary font-semibold mb-6 h-12">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                'Software Engineer (Undergraduate)', 1000,
                'Java & OOP Enthusiast', 1000,
                'Full Stack Developer', 1000,
                'Mobile App Developer', 1000
              ]}
              wrapper="span"
              speed={50}
              className="text-primary"
              repeat={Infinity}
            />
          </div>

        <p className="text-textSecondary mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            A 3rd-year Software Engineering undergraduate at SLIIT, bridging the gap between <strong className="text-white">Java (OOP) fundamentals</strong> and <strong className="text-white">Modern Web Architectures</strong>. 
            Passionately focused on engineering <strong className="text-primary">scalable, high-performance software solutions</strong>.
        </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <motion.a 
              href="/cv.pdf" 
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-background font-bold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
            >
              <FaFileDownload /> Download CV
            </motion.a>

            <div className="flex gap-4">
              <SocialLink href="https://github.com/SavinduS" icon={<FaGithub />} />
              <SocialLink href="https://www.linkedin.com/in/savinduweerarathna/" icon={<FaLinkedin />} />
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: PROFESSIONAL IMAGE --- */}
        <div className="relative flex justify-center perspective-1000">
          
          {/* 1. The Rotating Tech Ring (Behind) - Slower on mobile */}
          <motion.div 
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={shouldReduceMotion ? {} : { duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-primary/20 border-t-primary/60 border-r-primary/60 mx-auto"
          />
          
          {/* 2. The Counter-Rotating Ring (Smaller, Inner) - Slower on mobile */}
          <motion.div 
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={shouldReduceMotion ? {} : { duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-white/10 mx-auto top-3 md:top-3"
          />

          {/* 3. The Image Container (Floating) - Reduced on mobile */}
          <motion.div
             animate={shouldReduceMotion ? {} : { y: [0, -15, 0] }}
             transition={shouldReduceMotion ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
             whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
             className="w-[250px] h-[250px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-surface shadow-[0_20px_50px_rgba(6,182,212,0.3)] relative z-10 bg-surface mt-4 md:mt-5 will-change-transform"
          >
             <img 
               src={profileImg} 
               alt="Savindu Weerarathna" 
               className="w-full h-full object-cover"
               onError={(e) => {e.target.src = "https://via.placeholder.com/400x400?text=Savindu+W"}}
             />
             
             {/* Glass Reflection Overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <motion.a 
    href={href}
    target="_blank"
    whileHover={{ y: -5, color: '#06b6d4' }}
    className="text-2xl text-textSecondary hover:text-primary transition-colors cursor-pointer"
  >
    {icon}
  </motion.a>
);

export default Hero;