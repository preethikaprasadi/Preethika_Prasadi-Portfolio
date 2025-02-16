import React from 'react';
import { motion } from 'framer-motion';
import reactLogo from '../assets/logos/react.png';
import nodeLogo from '../assets/logos/node2.png';
import pythonLogo from '../assets/logos/pyhton.png';
import javascriptLogo from '../assets/logos/javascript.png';
import typescriptLogo from '../assets/logos/typescript1.jfif';
import powerbiLogo from '../assets/logos/powerbi.png';
import cLogo from '../assets/logos/c.png';
import cssLogo from '../assets/logos/css.png';
import figmaLogo from '../assets/logos/figma.png';
import githubLogo from '../assets/logos/github.png';
import htmlLogo from '../assets/logos/HTML.png';
import jupitorLogo from '../assets/logos/jupitor.png';
import mongodbLogo from '../assets/logos/mongodb.png';
import mysqlLogo from '../assets/logos/mysql.png';
import nestLogo from '../assets/logos/nest.png';
import pandasLogo from '../assets/logos/pandas.png';
import phpLogo from '../assets/logos/php.png';
import postmanLogo from '../assets/logos/postman.jfif';
import vscodeLogo from '../assets/logos/vscode.png';
import trelloLogo from '../assets/logos/trello.png';
import tableauLogo from '../assets/logos/tableau.png';
import tenserflowLogo from '../assets/logos/tenserflow.png';
import pytorchLogo from '../assets/logos/pytorch.png';
import scikitlearnLogo from '../assets/logos/scikitlearn.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faReact, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
//import './Skills.css'; // Optional: Add custom styles for the skills section

const Skills = () => {
  const skills = [
    { name: 'Software Engineering', description: 'Skilled in JavaScript, Python, and software development best practices.' },
    { name: 'Web Development', description: 'Expertise in React, Node.js, and full-stack development.' },
    { name: 'Machine Learning', description: 'Experience with Scikit-learn, TensorFlow, and PyTorch for building predictive models.' },
    { name: 'Data Analytics', description: 'Proficient in Python, SQL, and data visualization tools like Tableau and Power BI.' }, 
    { name: 'Data Science', description: 'Strong foundation in statistics, data wrangling, and exploratory data analysis.' },  
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

      {/* Floating Logos */}
      <div className="floating-icons">
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        >
          <img src={reactLogo} alt="React" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={nodeLogo} alt="Node" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <img src={pythonLogo} alt="Python" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <img src={javascriptLogo} alt="JavaScript" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <img src={powerbiLogo} alt="Power BI" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <img src={typescriptLogo} alt="typeScript" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={cLogo} alt="c" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        >
          <img src={cssLogo} alt="css" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <img src={figmaLogo} alt="figma" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <img src={githubLogo} alt="github" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <img src={htmlLogo} alt="html" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        >
          <img src={jupitorLogo} alt="jupitor" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={mongodbLogo} alt="mongodb" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <img src={mysqlLogo} alt="mysql" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <img src={nestLogo} alt="nest" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <img src={pandasLogo} alt="pandas" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        >
          <img src={phpLogo} alt="php" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={postmanLogo} alt="postman" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        >
          <img src={vscodeLogo} alt="vscode" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={trelloLogo} alt="trello" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={tableauLogo} alt="tableau" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={tenserflowLogo} alt="tenserflow" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={pytorchLogo} alt="pytorch" className="logo" />
        </motion.div>
        <motion.div
          className="floating-icon"
          animate={{ y: [0, -60, 1000] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={scikitlearnLogo} alt="scikitlearn" className="logo" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;