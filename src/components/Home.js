import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion, useMotionValue } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row mt-10 ">
        <div className="inner_text  p-10 text-md sm:text-sm mt-20">
          <p className="mt-3 pr-2 pt-2 pb-2 p-3 ">
            <span className="text-4xl font-bold text-indigo-500">
              Hii my name is Akshay sutar
            </span>
            . I am a full stack web Devoloper this is my personal portfolio
            website
          </p>
        </div>
        <div className="image mt-20">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/college-project-b119a.appspot.com/o/undraw_Code_review_re_woeb.png?alt=media&token=cbec32ee-a205-4e21-8ab0-33cb9ca5530f"
            alt=""
          />
        </div>
      </div>
      <div className="social  w-1/2 mt-10 justify-center text-center ml-20 mb-10">
        <ul className="justify-between mb-2 text-indigo-400 flex text-center justify-center sm:mt-20">
          <motion.li
            whileTap={{
              scale: [1.5, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            
            whileHover={{
              scale: [1.5, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
          >
            <a
              href="https://www.instagram.com/akshay_sutar___/"
              className="hover:text-indigo-600"
            >
              <InstagramIcon />
            </a>
          </motion.li>
          <motion.li
            whileTap={{
              scale: [1.5, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            
            whileHover={{
              scale: [1.5, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
          >
            <a
              href="https://github.com/akshaysutar8860"
              className="hover:text-indigo-600"
            >
              <GitHubIcon />
            </a>
          </motion.li>
          <motion.li
            whileTap={{
              scale: [1.5, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            
            whileHover={{
              scale: [1.5, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
          >
            <a
              href="https://www.linkedin.com/in/akshay-sutar-392199210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLlL20hnTQoumb49Mlt9xqQ%3D%3D"
              className="hover:text-indigo-600"
            >
              <LinkedInIcon />
            </a>
          </motion.li>
          <motion.li
            whileTap={{
              scale: [1.5, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            
            whileHover={{
              scale: [1.5, 3, 3, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
          >
            <a
              href="https://www.facebook.com/akshaysutaras.sutar"
              className="hover:text-indigo-600"
            >
              <FacebookIcon />
            </a>
          </motion.li>
        </ul>
      </div>
    </>
  );
};
export default Home;
