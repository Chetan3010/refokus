/* eslint-disable */
import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquee from './components/Marquee'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotive = new LocomotiveScroll();
  
  return (
    <div className='w-full bg-zinc-950 h-fit text-white font-[satoshi]'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquee />
      <Cards />
      <Footer />
      
    </div>
  )
}

export default App