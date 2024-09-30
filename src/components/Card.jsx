/* eslint-disable */
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from './Button';
import { motion } from 'framer-motion';


const Card = ({ width, pos }) => {
  return (
    <motion.div whileHover={{ paddingLeft: "24px", paddingRight:"24px", background: pos === "left" ? "#3E3E46" : "#7443ff"}} className={`${width} min-h-[26rem] bg-zinc-800 rounded-2xl p-5`}>
      <div className="flex justify-between">
        <h5>{pos === "left" ? "Up Next: News" : "Get In Touch"}</h5>
        <IoIosArrowRoundForward />
      </div>
      <div className="flex flex-col justify-between h-full pb-5">
        <h1 className="mt-5 text-3xl font-semibold tracking-wide">
          {pos === "left" ? (
            <span>
              Insights and behind
              <br /> the scenes
            </span>
          ) : (
            <span>
              Let's get to it,
              <br /> together.
            </span>
          )}
        </h1>
        <div className="">
          {pos === "left" ? (
            <p className='text-sm text-zinc-300'>Explore what drives out team.</p>
          ) : (
            <>
              <h1 className='text-8xl font-semibold mb-5 tracking-wide'>Start a Project</h1>
              <Button title={"Contact Us"} />
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Card