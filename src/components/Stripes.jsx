/* eslint-disable */
import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    const stripeData = [
        {
            img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            count: 2
        },
        {
            img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            count: 15
        },
        {
            img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            count: 52
        },
        {
            img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            count: 2
        },
        {
            img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            count: 15
        },
        {
            img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            count: 52
        }
    ]
  return (
    <div className='py-10 overflow-x-hidden'>
        <div className='flex'>
            {
                stripeData.map((item, index) => (
                    <Stripe key={index} item={item} />
                ))
            }
        </div>
    </div>
  )
}

export default Stripes