import React from 'react'
import Section from '../components/Templates/Section'
import { background, check, check2, gradient, service1 } from '../assets'
import Circle from '../components/Organisms/Circle'
import ListSkill from '../components/Molecules/ListSkill'

const About = () => {
  return (
    <Section>
        <div className="relative sm:py-40 pt-20 h-screen flex items-center" id='about'>
          <div className="container about-section flex justify-center grid grid-cols-1 xl:grid-cols-2">
            <div className="font-medium">
              <h4 className='h5 mb-5 border-l-4 border-color-2 ps-3'>About</h4>
              <h6 className='md:h5 text-n-2 font-thin'>Hello, I'm Jimly Assidqi, an experienced Fullstack Developer with broad and deep expertise in various areas of web and application development. I have the ability to develop efficient and innovative end-to-end solutions. The following is the skill set that I have</h6>
              <div className="mt-7 grid grid-cols-2 text-n-2">
                <div className="frontend">
                  <h6 className='mb-4'>Frontend</h6>
                  <ListSkill language='HTML'/>
                  <ListSkill language='CSS'/>
                  <ListSkill language='Tailwind'/>
                  <ListSkill language='Javascript'/>
                  <ListSkill language='React'/>
                  <ListSkill language='Redux'/>
                </div>
                <div className="backend">
                  <h6 className='mb-4'>Backend</h6>
                  <ListSkill language='Python'/>
                  <ListSkill language='Django'/>
                  <ListSkill language='Node.js'/>
                  <ListSkill language='Mysql'/>
                </div>
              </div>
            </div>
            <div className="circle-animation flex justify-center py-10 xl:py-0">
              <Circle />
            </div>
          </div>
        </div>
    </Section>
  )
}

export default About