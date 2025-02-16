import React from 'react';
import { motion } from 'framer-motion';
//import './Blogs.css'; // Optional: Add custom styles for the blogs section

const Blogs = () => {
  const blogs = [
    {
      title: 'Software Development Life Cycle',
      description: 'Structured process used to design, develop, and test high-quality software',
      link: 'https://github.com/preethikaprasadi/',
    },
    {
      title: 'Building a Full-Stack Web Application',
      description: 'Programmer who develops World Wide Web applications using a client–server model.',
      link: 'https://github.com/preethikaprasadi/',
    },
    {
      title: 'Predictive Analytics',
      description: 'Process of using historical data, machine learning algorithms, and statistical techniques to predict future events or trends.',
      link: 'https://github.com/preethikaprasadi/Predictive-Analytics/blob/main/Predictive%20Analytics%20-%20Article.md',
    },
  ];

  return (
    <motion.section
      id="blogs"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="animate__animated animate__fadeIn">Blogs</h2>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="card blog-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;