import React from 'react';
import { motion } from 'framer-motion';
//import './Projects.css'; // Optional: Add custom styles for the projects section

const Projects = () => {
  const projects = [
    {
      title: 'Predictive Analytics Model',
      description: 'Built a machine learning model to predict customer churn using Python and Scikit-learn.',
      link: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created an interactive dashboard using Tableau to visualize sales data.',
      link: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Developed a React and Node.js app for managing tasks and projects.',
      link: 'https://github.com/yourusername/project3',
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="animate__animated animate__fadeIn">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;