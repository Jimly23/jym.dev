import React from 'react'
import Section from '../components/Templates/Section'
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const instagram = 'https://www.instagram.com/jmyassdqi/'
  const github = 'https://github.com/Jimly23'
  return (
    <Section styles='py-15'>
        <div className="flex flex-col sm:flex-row items-center justify-around">
            <div className="sm:text-end text-center font-thin text-[13px]">2024. JymDev</div>
            <div className="sosmed flex items-center mt-10 sm:mt-0">
                <div className="img w-8 h-8 mx-2 rounded-full border flex items-center justify-center cursor-pointer" onClick={() => window.open(instagram, '_blank')}><FaInstagram /></div>
                <div className="img w-8 h-8 mx-2 rounded-full border flex items-center justify-center cursor-pointer" onClick={() => window.open(github, '_blank')}><FaGithub /></div>
            </div>
        </div>
    </Section>
  )
}

export default Footer