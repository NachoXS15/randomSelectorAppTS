import React from 'react'
import IOption from '../interfaces/IOption'

interface Props{
  option: IOption;
}


export default function Option({option}: Props) {
  return (
   <div>
      <span>{option.name}</span>
   </div>
  )
}
