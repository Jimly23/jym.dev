import React from 'react'
import { check } from '../../assets'

const PriceBenefit = ({desc}) => {
  return (
    <div className="item border-t py-6 flex">
        <img src={check} alt="" className='me-2' />
        <h5>{desc}</h5>
    </div>
  )
}

export default PriceBenefit