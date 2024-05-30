import React from 'react'
import { background, discord, django, figma, framer, js, mysql, node, notion, photoshop, protopie, py, raindrop, react, rredux, slack, smallSphere, tailwind } from '../../assets'
import './css/circle.css'

const Circle = () => {
  return (
    <div className="circle relative w-[180px] h-[180px] md:w-[400px] md:h-[400px] border border-gray-700 rounded-full flex items-center justify-center">
        <div className='relative w-[70%] h-[70%] border border-gray-700 rounded-full flex items-center justify-center'>
            <div className='inti w-[40%] h-[40%] md:w-[45%] md:h-[45%] rounded-full flex items-center justify-center bg-gradient-to-br from-color-1 via-color-3 to-color-2'>
                <div className='w-[96%] h-[96%] bg-n-11 rounded-full overflow-hidden'>
                    <img src={react} alt="" className='w-full' />
                </div>
            </div>
            <div className="item flex items-center p-2 md:p-3 absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full top-[7px] right-[2px] md:top-[15px] md:right-[19px]">
              <img src={figma} alt="" className='' />
            </div>
            <div className="item flex items-center p-1 md:p-3 absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full bottom-[7px] right-[2px] md:bottom-[15px] md:right-[19px] ">
              <img src={rredux} alt=""/>
            </div>
            <div className="item flex items-center p-1 md:p-3 absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full bottom-[7px] left-[2px] md:left-[15px] md:bottom-[19px]">
              <img src={js} alt="" />
            </div>
            <div className="item flex items-center p-1 md:p-3 absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full top-[7px] left-[2px] md:top-[15px] md:left-[19px]">
              <img src={py} alt="" />
            </div>
        </div>
        <div className="item flex items-center p-1 md:p-3 absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full top-[-18px] md:top-[-25px]">
          <img src={mysql} alt="" />
        </div>
        <div className="item flex items-center p-1 md:p-3 absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full right-[-18px] md:right-[-25px]">
          <img src={django} alt="" />
        </div>
        <div className="item flex items-center p-1 md:p-3 absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full bottom-[-18px] md:bottom-[-25px]">
          <img src={node} alt="" />
        </div>
        <div className="item flex items-center p-1 md:p-3 absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full left-[-18px] md:left-[-25px]">
          <img src={tailwind} alt="" />
        </div>
    </div>
  )
}

export default Circle