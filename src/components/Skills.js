import React from 'react';
import { motion } from 'framer-motion';
//import './Skills.css'; // Optional: Add custom styles for the skills section

const Skills = () => {
  const skills = [
    { name: 'Data Analytics', description: 'Proficient in Python, SQL, and data visualization tools like Tableau and Power BI.' },
    { name: 'Machine Learning', description: 'Experience with Scikit-learn, TensorFlow, and PyTorch for building predictive models.' },
    { name: 'Data Science', description: 'Strong foundation in statistics, data wrangling, and exploratory data analysis.' },
    { name: 'Software Engineering', description: 'Skilled in Java, C++, and software development best practices.' },
    { name: 'Web Development', description: 'Expertise in React, Node.js, and full-stack development.' },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="animate__animated animate__fadeIn">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;