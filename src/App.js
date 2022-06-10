import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Education from './components/Education';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
export default function App() {
  return (
    
    <Router>
      <div className="main ">
        <ul className="text-md sm:text-sm flex justify-between m-3 text-indigo-600 fixed inset-x-0">
          <motion.li
            className="p-3 rounded-xl border border-indigo-200 bg-indigo-300  hover:bg-indigo-200"
            whileTap={{ rotate: 10 }}
            whileHover={{ rotate: 10 }}
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            className="p-3 rounded-xl border border-indigo-200 bg-indigo-300  hover:bg-indigo-200"
            whileTap={{ rotate: 10 }}
            whileHover={{ rotate: 10 }}
          >
            <Link to="/project">Projects</Link>
          </motion.li>
          <motion.li
            className="p-3 rounded-xl border border-indigo-200  bg-indigo-300 hover:bg-indigo-200"
            whileTap={{ rotate: 10 }}
            whileHover={{ rotate: 10 }}
          >
            <Link to="/education">Education</Link>
          </motion.li>
          <motion.li
            className="p-3 rounded-xl border border-indigo-200  bg-indigo-300 hover:bg-indigo-200"
            whileTap={{ rotate: 10 }}
            whileHover={{ rotate: 10 }}
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/education" component={Education} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
