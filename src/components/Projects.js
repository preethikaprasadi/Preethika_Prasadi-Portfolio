import React from 'react';
import { motion } from 'framer-motion';
//import './Projects.css'; // Optional: Add custom styles for the projects section

const Projects = () => {
  const projects = [
    {
      title: 'Heart Disease Prediction',
      description: 'This project focuses on predicting the likelihood of heart disease using a dataset containing various clinical and demographic features. It implements data preprocessing, model training, evaluation, and hyperparameter tuning using Python and several machine learning libraries.',
      link: 'https://github.com/preethikaprasadi/heart-disease-prediction',
    },
    {
      title: 'Customer Shopping Behavior Analysis and Revenue Insights',
      description: 'This project focuses on analyzing customer shopping data to derive meaningful insights and recommendations for improving business strategies. Using Python and popular data analysis libraries, we explore revenue patterns, customer demographics, and shopping behaviors, offering actionable insights for better inventory and marketing management.',
      link: 'https://github.com/preethikaprasadi/Customer-Shopping-Behavior-Analysis-and-Revenue-Insights',
    },
    {
      title: 'Body Curve Analyzer',
      description: 'BodyCurve Analyzer is an AI-powered mobile application that analyzes body measurements to determine body shape, offering personalized fitness, fashion, and health recommendations. Users can track their progress and receive tailored insights to achieve their body goals..',
      link: 'https://github.com/preethikaprasadi/Body-Curve-Analyzer',
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