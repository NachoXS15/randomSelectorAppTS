import React from 'react'
import IOption from '../interfaces/IOption'

interface Props{
  option: IOption;
}


export default function Option({option}: Props) {
  return (
   <div className='options-container'>
      <span style={{color: 'red'}}>{option.name}</span>
   </div>
  )
}
