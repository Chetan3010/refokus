/* eslint-disable */
import React from 'react'

const Footer = () => {
  return (
    <div className='px-20 py-5 w-full flex justify-between items-center'>
        <div className='flex gap-10 items-center'>
        {
            ["privacy policy", "cookie policy", "impressum", "terms", "webflow agency"].map((item,index) => (
                <a className='text-zinc-500 text-sm capitalize' href="#" key={index}>{item}</a>
            ))
        }
        </div>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
    </div>
  )
}

export default Footer