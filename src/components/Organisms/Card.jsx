import React from 'react'
import { background, benefitImage2, service1 } from '../../assets'
import { Link } from 'react-router-dom'

const Card = ({image, title, desc, link, tech1, tech2, tech3, tech4}) => {
  const handleClick = (url) => {
    window.location.href = url
  }
  return (
    <div className="card relative w-[300px] lg:w-[350px] h-[450px] p-3 rounded-lg overflow-hidden bg-n-8 border border-n-5 hover:bg-transparent transition-all">
        <h5 className='h5'>{title}</h5>
        <div className="img-box w-full h-[200px] rounded-md my-3 overflow-hidden">
          <img src={image} className='w-full h-full object-cover' />
        </div>
        <p className='mt-3 mb-8 text-[14px]'>{desc}</p>
        <div className="footer flex items-center justify-between absolute left-5 right-5 bottom-5">
          <div className="requirement flex">
            <div className="w-8 h-8 overflow-hidden border-[2px] border-color-3 rounded-full"><img src={tech1} className='w-full h-full object-cover' /></div>
            <div className="w-8 h-8 overflow-hidden border-[2px] border-color-3 rounded-full ml-[-7px]"><img src={tech2} className='w-full h-full object-cover' /></div>
            <div className="w-8 h-8 overflow-hidden border-[2px] border-color-3 rounded-full ml-[-7px]"><img src={tech3} className='w-full h-full object-cover' /></div>
            <div className="w-8 h-8 overflow-hidden border-[2px] border-color-3 rounded-full ml-[-7px] bg-white"><img src={tech4} className='w-full h-full object-cover' /></div>
          </div>
          <Link to={'projects/details/'}><button className='button hidden'>DETAIL</button></Link>
          <button className='button' onClick={() => handleClick(link)}>LINK URL</button>
        </div>
        <img src={benefitImage2} alt="" className='w-full h-full object-cover absolute top-0 left-0 z-[-1] opacity-20' />
    </div>
  )
}

export default Card