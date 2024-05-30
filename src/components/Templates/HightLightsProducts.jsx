import React from 'react'
import { background, gradient, grid, jimai1, jimai2, roadmap2, roadmap3, roadmap4, topdetail, tophome, toptop } from '../../assets'

const HightLightsProducts = () => {
  return (
    <div className='mt-40 relative'>
        <h3 className='h4 text-center'>Hightlight Products</h3>
        <div className="bento grid grid-cols-1 lg:grid-cols-5 gap-5 px-[30px] lg:px-[100px] xl:px-[300px] my-20">
            <div className="relative overflow-hidden lg:col-span-3 w-full lg:h-[600px] sm:h-[400px] h-[200px] border rounded-2xl">
                <img src={tophome} className='w-full h-full object-cover'/>
                <img src={gradient} className='absolute bottom-[-400px] left-[-300px] opacity-30 w-[900px]' />
            </div>
            <div className="relative lg:col-span-2 w-full lg:h-[600px] sm:h-[900px] h-[400px] grid grid-rows-2 gap-5">
                <div className="w-full overflow-hidden h-full border rounded-2xl">
                  <img src={topdetail} className='w-full h-full object-cover' />
                </div>
                <div className="w-full overflow-hidden h-full border rounded-2xl">
                  <img src={toptop} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className="relative overflow-hidden lg:col-span-2 w-full lg:h-[600px] sm:h-[400px] h-[200px] border rounded-2xl">
              <img src={jimai2} alt=""className='w-full h-full object-cover' />
            </div>
            <div className="relative overflow-hidden lg:col-span-3 w-full lg:h-[600px] sm:h-[400px] h-[200px] border rounded-2xl flex items-center">
              <img src={jimai1} className='w-full h-full object-cover'/>
            </div>
        </div>
        <img src={grid} className='absolute z-[-1] top-0' />
        <img src={grid} className='absolute z-[-1] bottom-0 right-0' />
    </div>
  )
}

export default HightLightsProducts