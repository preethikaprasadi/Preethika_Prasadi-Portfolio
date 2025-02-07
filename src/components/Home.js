import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/preethika-photo.jpg'; // Import your photo
import './Home.css'; // Optional: Add custom styles for the home section

const Home = () => {
  return (
    <motion.div
      className="home-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-container">
        <motion.div
          className="photo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={myPhoto}
            alt="My Name"
            className="profile-photo"
          />
        </motion.div>
        <motion.div
          className="text-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="animate__animated animate__fadeInDown">Welcome to My Portfolio</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">
            Hi, I'm Preethika Prasadi. I'm a data scientist and software engineer with expertise in machine learning,
            data analytics, and full-stack web development. Let's build something amazing together!
          </p>
        </motion.div>
      </div>
      <motion.div
        className="floating"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🚀
      </motion.div>
    </motion.div>
  );
};

export default Home;