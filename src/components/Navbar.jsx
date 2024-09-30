/* eslint-disable */
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='px-20 py-5 flex justify-between items-center'>
        <div className="nleft flex gap-20">
            <img className='w-20' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="brand"/>
            <nav className='flex gap-14'>
                {
                    ["Home", "Work", "About", "News", "Careers"].map((elem, index) => (
                        <a key={index} className='text-sm flex items-center gap-1 ' href="#">
                            { index==1 && <span style={{boxShadow: '0 0 0.75em #00FF19'}} className='inline-block w-[5px] h-[5px] bg-[#00ff1a] rounded-full'></span>}
                            {elem}
                        </a>
                    ))
                }
            </nav>
        </div>
        <div className='nright'>
            <Button title={"Start a Project"} />
        </div>
    </div>
  )
}

export default Navbar
// style={{boxShadow: '0 0 0.25em #00FF19'}}