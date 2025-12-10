import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const formData = new FormData(e.target);
    
    // IMPORTANT: Replace with your own Web3Forms Access Key
    formData.append("access_key", "31109048-ac92-4440-b6fb-7269ed0b3528"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionStatus('success');
        e.target.reset();
      } else {
        console.error("Error from Web3Forms:", data);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Let's <span className="text-primary">Connect</span></h2>
          <p className="text-textSecondary">
            I am currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <ContactItem 
              icon={<FaEnvelope />} 
              label="Email" 
              value="savinduweerarathna@gmail.com" 
              href="mailto:savinduweerarathna@gmail.com"
            />
            <ContactItem 
              icon={<FaPhone />} 
              label="Phone" 
              value="+94 77 065 7948" 
              href="tel:+94770657948"
            />
            <ContactItem 
              icon={<FaMapMarkerAlt />} 
              label="Location" 
              value="Galle, Sri Lanka" 
              href="#"
            />

            {/* Availability Status */}
            <div className="p-6 bg-surface border border-primary/20 rounded-xl mt-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 font-bold">Open for Internships</span>
              </div>
              <p className="text-textSecondary text-sm">
                Ready to join your team immediately.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 rounded-2xl border border-white/5 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white text-sm font-medium block mb-2">Name</label>
                  <input type="text" name="name" placeholder="Savindu Weerarathna" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div>
                  <label className="text-white text-sm font-medium block mb-2">Email</label>
                  <input type="email" name="email" placeholder="savindu@gmail.com" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" required />
                </div>
              </div>
              
              <div>
                <label className="text-white text-sm font-medium block mb-2">Subject</label>
                <input type="text" name="subject" placeholder="Internship Inquiry" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" required />
              </div>

              <div>
                <label className="text-white text-sm font-medium block mb-2">Message</label>
                <textarea rows="4" name="message" placeholder="Your message here..." className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" required></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-background font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)] disabled:bg-primary/50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>

              {submissionStatus === 'success' && (
                <p className="text-green-400 text-center">Thank you! Your message has been sent successfully.</p>
              )}
              {submissionStatus === 'error' && (
                <p className="text-red-400 text-center">Something went wrong. Please try again later.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, href }) => (
  <a href={href} className="flex items-center gap-4 group">
    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-background transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-textSecondary text-sm mb-1">{label}</h4>
      <p className="text-white font-medium group-hover:text-primary transition-colors">{value}</p>
    </div>
  </a>
);

export default Contact;