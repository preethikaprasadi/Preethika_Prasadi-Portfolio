import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/preethika-photo1.jpg'; // Import your photo
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
          <h1 className="animate__animated animate__fadeInDown">Preethika Prasadi</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">
            Software Engineer | Web Developer | <br/>
            AI & ML Enthusisast
          </p>
          <motion.div
        className="floating"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🚀
      </motion.div>
        </motion.div>
      </div>
      <>
      
      </>
    </motion.div>
  );
};

export default Home;