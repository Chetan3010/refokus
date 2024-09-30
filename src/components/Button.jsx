/* eslint-disable*/
import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({title}) => {
  return (
    <div className="bg-zinc-100 text-zinc-950 w-fit px-5 py-1 rounded-full flex flex-col relative">
      <div className="flex justify-between gap-3 items-center w-full">
        <h5 className="">
          {title}
        </h5>
        <BsArrowReturnRight className="w-2 h-2" />
      </div>
    </div>
  );
}

export default Button