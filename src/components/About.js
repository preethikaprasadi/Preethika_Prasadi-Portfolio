import React from 'react';
import { motion } from 'framer-motion';
//import './About.css'; // Optional: Add custom styles for the about section

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="animate__animated animate__fadeIn">About Me</h2>
      <motion.div
        className="about-content"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <p>
          Hi, I'm Preethika Prasadi. I'm a passionate data scientist and software engineer with expertise in machine learning,
          data analytics, and full-stack web development. I love solving complex problems and building innovative solutions
          that make a difference.
        </p>
        <p>
          With a strong foundation in programming and data analysis, I enjoy working on projects that challenge me to learn
          and grow. Let's build something amazing together!
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;