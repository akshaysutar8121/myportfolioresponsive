import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import { motion, useMotionValue } from "framer-motion";

const Home = ({ url, title, live, github, stack, info }) => {
  return (
    <div className="border-t-2 border-indigo-300  w-full sm:w-1/4 m-1 shadow-xl font-sans mb-10 p-9 sm:p-0">
      <motion.div
        whileHover={{ rotate: 3 }}
        whileTap={{ rotate: 3 }}
        className="img  max-w-1/2 m-1 shadow-lg"
      >
        <img src={url} />
      </motion.div>
      <div className="desc text-xs m-1  p-5 font-medium">
        <span className="text-sm text-indigo-500 font-bold">{title} </span>
        {info}
      </div>
      <div className="links m-4 border-b-2 border-indigo-700">
        <ul className="flex justify-between mb-2 ">
          <li>
            <a href={live} className="cursor-pointer hover:text-indigo-500">
              <LinkIcon />
            </a>
          </li>
          <li>
            <a href={github} className="cursor-pointer hover:text-indigo-500">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href={stack} className="cursor-pointer hover:text-indigo-500">
              <CodeIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
