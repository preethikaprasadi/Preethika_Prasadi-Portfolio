import React from 'react';
import { motion } from 'framer-motion';
//import './Contact.css'; // Optional: Add custom styles for the contact section

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="animate__animated animate__fadeIn">Contact Me</h2>
      <p className="animate__animated animate__fadeIn animate__delay-1s">
        Let's connect! Feel free to reach out via any of the platforms below.
      </p>
      <div className="contact-links">
        <motion.a
          href="https://www.linkedin.com/in/preethika-prasadi-663637318/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </motion.a>
        <motion.a
          href="mailto:preethikaprasadi@gmail.com"
          className="contact-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-envelope"></i>
          Email
        </motion.a>
        <motion.a
          href="tel:+94741070784"
          className="contact-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-phone"></i>
          Phone
        </motion.a>
        <motion.a
          href="https://github.com/preethikaprasadi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-github"></i>
          GitHub
        </motion.a>
        <motion.a
          href="https://www.facebook.com/share/1BUj945bUw/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-facebook"></i>
          Facebook
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;