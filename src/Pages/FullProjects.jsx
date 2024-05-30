import React from 'react'
import Section from '../components/Templates/Section'
import Card from '../components/Organisms/Card'

const FullProjects = ({children}) => {
  return (
    <Section styles={'mt-[78px]'}>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 flex justify-center items-center lg:px-[200px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  )
}

export default FullProjects