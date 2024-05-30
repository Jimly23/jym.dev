import React, { useState } from 'react'
import './css/style.css'
import { Link } from 'react-router-dom';
import { jym } from '../../assets';

const Navbar = () => {
    const [isToggle, setIsToggle] = useState(false);
  return (
    <div className='navbar fixed left-0 right-0 top-0 z-[5] px-5 py-4 flex items-center justify-between border-b border-gray-700'>
        <div className="h5 logo flex items-center">
            <img src="" alt="" className='me-2' />
            <h2>JBrains</h2>
        </div>
        <div className="navlink hidden md:flex items-center justify-between md:w-[300px] lg:w-[400px] text-[10px] lg:text-[12px]">
            <Link to={'/'}><h5>HOME</h5></Link>
            <Link to={'about/'}><h5>SKILLS</h5></Link>
            <Link to={'projects/'}><h5>PROJECT</h5></Link>
            {/* <Link to={'products/'}><h5>PRODUCTS</h5></Link> */}
        </div>
        <div className="acount hidden sm:flex items-center gap-5 ">
            <div className="button">JYM.DEV</div>
            <div className="login cursor-pointer button">
                <img src={jym} className='w-10 h-10 rounded-full' />
            </div>
        </div>
        <div onClick={() => setIsToggle(prev => !prev)} className="menu-bar w-8 h-8 bg-white rounded sm:hidden cursor-pointer"></div>
        <div className={`mobile-navbar flex items-center justify-center sm:hidden transition-all ${isToggle? 'fixed':'hidden'} top-[68px]  bottom-[-100vh] left-1 right-1 border-r border-l bg-n-11`}>
            <div className="navlink-mobile grid grid-rows-6 gap-5 text-white text-center w-[80%]">
                <div className="pb-2 pt-3 border border-color-1 rounded-xl cursor-pointer"><h5>FEATURES</h5></div>
                <div className="pb-2 pt-3 border border-color-1 rounded-xl cursor-pointer"><h5>PRICING</h5></div>
                <div className="pb-2 pt-3 border border-color-1 rounded-xl cursor-pointer"><h5>HOW TO USE</h5></div>
                <div className="pb-2 pt-3 border border-color-1 rounded-xl cursor-pointer"><h5>ROADMAP</h5></div>
                <div className="pb-2 pt-3 border border-color-1 rounded-xl cursor-pointer"><h5>LOGIN</h5></div>
                <div className="pb-2 pt-3 border border-color-1 rounded-xl cursor-pointer"><h5>SIGN</h5></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar