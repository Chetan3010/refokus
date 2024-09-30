/* eslint-disable */
import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion';

const Product = ({item, mover, index}) => {
  const {title, url, desc, bgcolor} = item;

  return (
    <motion.div
      onMouseEnter={() => mover(index)}
      whileHover={{ backgroundColor: bgcolor, scaleY:1.1}}
      transition={{ease: [0.61, 1, 0.88, 1], duration: 0.3}}
      className={`flex justify-between w-full px-20 py-12 h-[18rem] items-center bg-zinc-950`}
    >
      <div className="w-[20%] flex items-center">
        <h1 className="text-5xl font-bold">{title}</h1>
      </div>
      {/* <div className='w-[48%] flex justify-center items-center relative'>
          <img className='w-[30rem] h-[21rem] rounded-2xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src={ url } alt="" />
        </div> */}
      <div className="w-[35%]">
        <h3 className="w-[80%] text-xl mb-5">{desc}</h3>
        <Button title={"Live Website"} />
      </div>
    </motion.div>
  );
}

export default Product