import React from 'react'
import Section from '../components/Templates/Section'
import {django, gradient, jimai2, js, mysql, py, react, rredux, tailwind, tophome} from '../assets'
import Card from '../components/Organisms/Card'
import { Link } from 'react-router-dom'

const Projects = () => {
  const styles = 'mt-[80px] sm:mt-0'
  return (
    <Section styles={styles}>
        <div className="relative overflow-hidden flex flex-col items-center justify-center text-center lg:pt-[300px] pb-[100px]">
            <div className="header hidden lg:block">
                <h6 className='text-[12px]'>HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</h6>
            </div>
            <div className="main mt-20 flex flex-col justify-center items-center">
                <h1 className='md:h4'>Projects</h1>
                <div className="card-skills text-start grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 items-center justify-between">
                    <Card image={tophome} title={'Topup Game'} desc={'Membuat Website Topup Game dengan design yang Modern dan Responsive, dengan mengambil data-data topup dari API'} link={'https://zstore-two.vercel.app'} tech1={react} tech2={django} tech3={js} tech4={py}/>
                    <Card image={jimai2} title={'Clone Google Gemini'} desc={'Membuat web AI seperti chatgpt dengan menggunakan React, dengan mengambil data API dari Google Gemini.'} link={'https://jim.ai.vercel.app'} tech1={react} tech2={js} tech3={django} tech4={tailwind}/>
                </div>
            </div>
            <Link to={'projects/'}><button className='button border-b-2 mt-20 hidden'>See More Projects</button></Link>
            {/* effects */}
            <img src={gradient} className='w-[400px] absolute left-[200px] z-[-1] opacity-30' />
            <img src={gradient} className='w-[600px] absolute right-[200px] bottom-[200px] z-[-1] opacity-20' />
        </div>
    </Section>
  )
}

export default Projects