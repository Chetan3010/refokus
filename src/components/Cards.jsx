/* eslint-disable */
import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className="w-full px-20 pt-10">
        <div className='flex flex-shrink-0 gap-1'>
            <Card width={'w-1/3'} pos={"left"}/>
            <Card width={'w-2/3'} pos={"right"}/>
        </div>
    </div>
  )
}

export default Cards