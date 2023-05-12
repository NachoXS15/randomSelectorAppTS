import React, { useState } from 'react'
import '../styles/App.scss'
import IOPtion from '../interfaces/IOption'

interface Props{
  addOptions: (option: IOPtion) => void
}

export default function Selector({addOptions}: Props) {

  const [option, setOption] = useState({
    name: ""
  })

  

  return (
    <div className='container'>
      <h2>¡Selector de Opciones!</h2>
      <form action="">
        <input type="text" autoFocus placeholder='Introduzca opcion' value={option.name}/>
        <button className=''>Agregar</button>
      </form>
    </div>
  )
}
