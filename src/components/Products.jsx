/* eslint-disable */
import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import aiqitel from '../assets/arqitel.webm'
import ttr from '../assets/ttr.webm'
import webflow from '../assets/webflow.mp4'
import singularity from '../assets/singularity.webm'

const Products = () => {
  const [ pos, setPos ] = useState(0)
  const [zi, setzi] = useState(-9)
  const products = [
    {
      title: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      bgcolor: '#5355ee'
    },
    {
      title: 'Singularity',
      desc: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      bgcolor: '#4c20cf'
    },
    {
      title: 'Layout Land',
      desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      bgcolor: '#1626f3'
    },
    {
      title: 'TTR',
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      bgcolor: '#3e4365'
    }
  ]
  const mover = (val) => {
    setPos(val*18)
  }

  return (
    <div
      onMouseEnter={() => setzi(9)}
      onMouseLeave={() => setzi(-9)}
      className="mt-24 relative"
    >
      {products.map((item, index) => (
        <Product key={index} item={item} mover={mover} index={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%", zIndex: zi }}
          animate={{ y: pos + "rem", zIndex: zi, scaleX: 1.1, scaleY: 1.3 }}
          transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
          className="absolute w-[32rem] h-[18rem] left-[42%] rounded-xl overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video className='w-full h-full object-cover object-center auto' autoPlay muted loop>
              <source src={aiqitel} type="video/webm" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video className='w-full h-full object-cover object-center auto' autoPlay muted loop>
              <source src={singularity} type="video/webm" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video className='w-full h-full object-cover object-center auto' autoPlay muted loop>
              <source src={webflow} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video className='w-full h-full object-cover object-center auto' autoPlay muted loop>
              <source src={ttr} type="video/webm" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products

// 0 18 36 54