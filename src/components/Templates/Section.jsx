import React from 'react'
import './css/style.css'

const Section = ({children, styles}) => {
  return (
    <div className={`${styles} sm:border-r sm:border-b sm:border-l border-gray-700 relative`}>
        <div className="plus hidden sm:block absolute text-2xl font-medium right-[-7px] bottom-[-16px] text-gray-600">+</div>
        <div className="plus hidden sm:block absolute text-2xl font-medium left-[-7px] bottom-[-16px] text-gray-600">+</div>
        {children}
    </div>
  )
}

export default Section