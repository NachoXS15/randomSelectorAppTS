import React from 'react'
import Option from './Option'
import IOption from '../interfaces/IOption';
interface Props{
  options: Props
  addOptions: IOption
}


export default function OptionsList({options}: Props) {
  return (
    <Option />
  )
}
