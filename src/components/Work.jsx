/* eslint-disable */
import { useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useState } from 'react'

const Work = () => {
  const [scrollerImages, setScrollerImages] = useState([
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: '50%',
      left: '50%',
      isActive: false
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: '56%',
      left: '47%',
      isActive: false
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: '46%',
      left: '53%',
      isActive: false
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: '60%',
      left: '50%',
      isActive: false
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: '52%',
      left: '54%',
      isActive: false
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: '48%',
      left: '49%',
      isActive: false
    }
  ])

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    const ImagesShow = (arr) => {
      setScrollerImages( prev => (
        prev.map((item, index) => (
          arr.indexOf(index) === -1 ?
          {...item, isActive: false} :
          {...item, isActive: true}
        ))
      ))
    }

    switch (Math.floor(data*100)) {
      case 0:
        ImagesShow([])
        break;
      case 2:
        ImagesShow([0])
        break;
      case 4:
        ImagesShow([0,1])
        break;
      case 6:
        ImagesShow([0,1,2])
        break;
      case 8:
        ImagesShow([0,1,2,3])
        break;
      case 10:
        ImagesShow([0,1,2,3,4])
        break;
      case 12:
        ImagesShow([0,1,2,3,4,5])
        break;
      default:
        break;
    }
  })

  return (
    <>
      <div className="w-full px-24 relative cursor-default">
        <h1 className="text-[34vw] font-bold leading-[1.10] tracking-[0.05em] flex justify-center">
          work
        </h1>
        <div className='w-full h-full'>
        {
          scrollerImages.map((item, index) => (
            item.isActive && <img key={index} className='w-72 rounded-2xl absolute -translate-x-[50%] -translate-y-[50%]' src={item.img} style={{ top: item.top, left: item.left}} alt='img'/>
          ))
        }
        </div>
      </div>
      <h1 className='flex justify-center text-xl text-zinc-400'>Web Design, Webflow Development, Creative Development</h1>
    </>
  );
}

export default Work