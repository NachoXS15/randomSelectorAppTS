import React from 'react'
import IOption from '../interfaces/IOption'

interface Props{
  option: IOption;
}


export default function Option({option}: Props) {
  return (
    <span className='options'>{option.name}</span>
  )
}
