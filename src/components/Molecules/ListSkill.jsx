import React from 'react'
import { check, check2 } from '../../assets'

const ListSkill = ({language}) => {
  return (
    <div className="flex items-center mb-3">
        <img src={check} alt="" className='me-3'/>
        <h6>{language}</h6>
    </div>
  )
}

export default ListSkill