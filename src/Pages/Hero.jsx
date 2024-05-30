import React from 'react'
import Section from '../components/Templates/Section'
import { background, grid, heroBackground } from '../assets'

const Hero = () => {
  const styles = 'mt-[77px] h-[750px]'

  const handleClick = () => {
    const phoneNumber = '82329322353'; // Ganti dengan nomor telepon Anda
    const message = 'Hello, I would like to inquire about your services.'; // Ganti dengan pesan yang diinginkan
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <Section styles={styles}>
      <img src={grid} alt="" className='absolute left-1/2 transform -translate-x-1/2'/>
      <img src={heroBackground} alt="" className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]'/>
      <div className="title text-center z-[1] absolute left-0 right-0 top-[80px] md:top-[120px]">
        <h3 className="h3 font-bold">Hello My Name Is Jimly <br /> a Fullstack Developer with Django & React</h3>
        <p className='my-5'>Everything here is my entire project <br /> so have fun.</p>
        <button className='button text-[15px] px-5 py-3 bg-white text-black rounded' onClick={handleClick}>go contact</button>
      </div>
      <div className="baner relative flex items-center justify-center w-[90%] lg:w-[55%] h-[300px] lg:h-[500px] bg-white z-[2] absolute left-1/2 transform -translate-x-1/2 top-[500px] sm:top-[450px] rounded-xl bg-gradient-to-br from-color-1 via-color-2 to-color-3">
        <div className='w-[99.4%] h-[99%] bg-white rounded-xl overflow-hidden'>
          <img src={background} alt="" className='w-full' />
        </div>
        <div className="python hidden md:block absolute w-[100px] h-[100px] rounded-lg right-[-50px] bottom-[120px]"></div>
        <div className="python hidden md:block absolute w-[100px] h-[100px] rounded-lg left-[-50px] bottom-[90px]"></div>
      </div>
    </Section>
  )
}

export default Hero