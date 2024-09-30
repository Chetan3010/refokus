/* eslint-disable */
import React from 'react'

const Stripe = ({ item }) => {
  return (
    <div className='flex min-w-80 items-center py-6 px-10 justify-between border-zinc-500 border-[1px]'>
        <img src={item.img} alt="img" />
        <h1 className='text-xl font-semibold tracking-wide'>{item.count}</h1>
    </div>
  )
}

export default Stripe