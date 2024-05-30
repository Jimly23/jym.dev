import React from 'react'
import Section from '../components/Templates/Section'
import CardPrice from '../components/Organisms/CardPrice'
import HightLightsProducts from '../components/Templates/HightLightsProducts'
import Contact from '../components/Templates/Contact'
import { Link } from 'react-router-dom'

const Prices = () => {
  const descBasic = {
    benefit1: 'Custom Design',
    benefit2: 'Responsive Design',
    benefit3: 'Integrasi ke Whatsapp, Instagram, Facebook'
  }
  const descPremium = {
    benefit1: 'Custom Design',
    benefit2: 'Responsive Design',
    benefit3: 'Integrasi ke Whatsapp, Instagram, Facebook'
  }
  const descEnterprice = {
    benefit1: 'ReactJs',
    benefit2: 'Django',
    benefit3: 'Database Mysql'
  }
  return (
    <Section styles={'py-15'}>
        <div className='text-center'>
            <h1 className='h4 mb-5 sm:mb-20'>Projects Price</h1>
            <div className="px-[30px] lg:px-[100px] xl:px-[300px] text-sm gap-5 grid grid-cols-1 lg:grid-cols-3">
                <CardPrice level={'Basic'} desc={'Landing Page'} price={'70.000'} textColor={'text-color-2'} benefit1={descBasic.benefit1} benefit2={descBasic.benefit2} benefit3={descBasic.benefit3}/>
                <CardPrice level={'Premium'} desc={'Frontend Web'} price={'499.000'} textColor={'text-color-1'} style={'lg:scale-105'} benefit1={descPremium.benefit1} benefit2={descPremium.benefit2} benefit3={descPremium.benefit3}/>
                <CardPrice level={'Enterprice'} desc={'Fullstack Web'} price={'1.499.000'} textColor={'text-color-3'} benefit1={descEnterprice.benefit1} benefit2={descEnterprice.benefit2} benefit3={descEnterprice.benefit3}/>
            </div>
            <Link to={'products/'}><button className='button border-b-2 mt-20 hidden'>See More Products</button></Link>
        </div>
        <HightLightsProducts />
        <Contact />
    </Section>
  )
}

export default Prices