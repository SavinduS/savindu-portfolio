import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FaCode, FaLaptopCode, 
  FaJava, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaPhp 
} from 'react-icons/fa';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiJavascript, SiCplusplus, SiC, SiKotlin, SiAndroidstudio, SiMysql,
  SiPostman, SiFigma, SiTailwindcss
} from 'react-icons/si';

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-background relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none overflow-hidden"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        
       {/* --- LEFT COLUMN: TEXT CONTENT --- */}
        <motion.div 
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -50 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        className="will-change-transform"
        >
        <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-10 bg-primary"></span>
            <span className="text-primary font-mono uppercase tracking-widest text-sm">About Me</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Engineering Logic meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Creative Solutions</span>
        </h2>
        
        <p className="text-textSecondary text-lg leading-relaxed mb-6">
            I am a 3rd-year Software Engineering undergraduate at <strong className="text-white">SLIIT</strong>. 
            My coding journey began with the strong logic of <strong className="text-white">C and C++</strong>, which laid the foundation for mastering <strong className="text-white">Java (OOP)</strong> and modern web technologies.
        </p>
        
        <p className="text-textSecondary text-lg leading-relaxed mb-8">
            Today, I specialize in the <strong className="text-white">MERN Stack</strong> and <strong className="text-white">Android (Kotlin)</strong>, while proficiently handling version control with <strong className="text-white">GitHub</strong>, API testing with <strong className="text-white">Postman</strong>, and UI design in <strong className="text-white">Figma</strong>. I am ready to tackle complex engineering challenges.
        </p>

        {/* Single Stat Card Layout */}
        <div className="flex justify-start">
            <div className="w-full sm:w-1/2"> 
                <StatsCard 
                icon={<FaCode />} 
                value="20+" 
                label="Tools & Languages" 
                />
            </div>
        </div>
        </motion.div>


        {/* --- RIGHT COLUMN: TECH STACK GRID --- */}
        <div id="skills" className="scroll-mt-28">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <FaLaptopCode className="text-primary" /> Tech Arsenal
          </h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 gap-4"
          >
            {/* ROW 1: MERN Stack */}
            <TechItem icon={<SiReact />} name="React" color="#61DAFB" />
            <TechItem icon={<SiNodedotjs />} name="Node.js" color="#339933" />
            <TechItem icon={<SiExpress />} name="Express" color="#ffffff" />
            <TechItem icon={<SiMongodb />} name="MongoDB" color="#47A248" />
            
            {/* ROW 2: Core Engineering Languages */}
            <TechItem icon={<SiJavascript />} name="JavaScript" color="#F7DF1E" />
            <TechItem icon={<FaJava />} name="Java" color="#007396" />
            <TechItem icon={<FaPython />} name="Python" color="#3776AB" />
            <TechItem icon={<SiCplusplus />} name="C++" color="#00599C" />

            {/* ROW 3: Mobile, C & Database */}
            <TechItem icon={<SiC />} name="C" color="#A8B9CC" />
            <TechItem icon={<SiKotlin />} name="Kotlin" color="#7F52FF" />
            <TechItem icon={<SiAndroidstudio />} name="Android Studio" color="#3DDC84" />
            <TechItem icon={<SiMysql />} name="MySQL" color="#4479A1" />

            {/* ROW 4: Professional Tools */}
            <TechItem icon={<FaGitAlt />} name="Git" color="#F05032" />
            <TechItem icon={<FaGithub />} name="GitHub" color="#ffffff" />
            <TechItem icon={<SiPostman />} name="Postman" color="#FF6C37" />
            <TechItem icon={<SiFigma />} name="Figma" color="#F24E1E" />
            
            {/* ROW 5: Web Foundations */}
            <TechItem icon={<SiTailwindcss />} name="Tailwind" color="#06B6D4" />
            <TechItem icon={<FaHtml5 />} name="HTML5" color="#E34F26" />
            <TechItem icon={<FaCss3Alt />} name="CSS3" color="#1572B6" />
            <TechItem icon={<FaPhp />} name="PHP" color="#777BB4" />

          </motion.div>
        </div>

      </div>
    </section>
  );
};

// --- Helper Components ---
const StatsCard = ({ icon, value, label }) => (
  <div className="bg-surface border border-white/5 p-4 rounded-lg flex items-center gap-4 hover:border-primary/30 transition-colors shadow-lg">
    <div className="text-3xl text-primary bg-primary/10 p-2 rounded-md">
      {icon}
    </div>
    <div>
      <h4 className="text-2xl font-bold text-white">{value}</h4>
      <p className="text-textSecondary text-sm">{label}</p>
    </div>
  </div>
);

const TechItem = ({ icon, name, color }) => (
  <motion.div 
    variants={{
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 }
    }}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center justify-center p-4 bg-surface rounded-xl border border-white/5 hover:border-white/20 transition-all group cursor-default will-change-transform"
  >
    <div 
      className="text-3xl mb-2 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
      style={{ color: '#94a3b8' }} 
      onMouseEnter={(e) => e.currentTarget.style.color = color}
      onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
    >
      {icon}
    </div>
    <span className="text-xs font-medium text-textSecondary group-hover:text-white transition-colors">
      {name}
    </span>
  </motion.div>
);

export default About;