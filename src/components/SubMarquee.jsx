/* eslint-disable */
import { motion } from 'framer-motion';
import React from 'react'

const SubMarquee = ({data, direction}) => {
  return (
    <div className="w-full flex overflow-hidden relative">
      <div style={{background: "radial-gradient(circle, rgba(2,2,2,0) 13%, rgba(0,0,0,1) 100%)"}} className='w-full h-full absolute top-0 left-0 z-20 pointer-events-none'></div>
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
        className="flex py-5 gap-36 flex-shrink-0 items-center pr-36"
      >
        {data.map((item, index) => (
          <img key={index} className="w-24" src={item} alt="img" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
        className="flex py-5 gap-36 flex-shrink-0 items-center pr-36"
      >
        {data.map((item, index) => (
          <img key={index} className="w-24" src={item} alt="img" />
        ))}
      </motion.div>
    </div>
  );
}

export default SubMarquee