import React, { useState, ChangeEvent, FormEvent } from "react";
import "../styles/App.scss";
import IOPtion from "../interfaces/IOption";
import IOption from "../interfaces/IOption";

interface Props {
  addOptions: (option: IOPtion) => void;
}

type formElement = React.FormEvent<HTMLFormElement>
type dataElement = React.ChangeEvent<HTMLInputElement>

export default function Selector({ addOptions }: Props) {
  const [option, setOption] = useState({
    name: "",
  });
  const [inputValue, setInputValue] = useState<IOption>();

  const handleSubmit = (e: formElement) => {
    e.preventDefault();
    if (option.name === '') {
      alert("inserte una option");
    }else{
      addOptions(option);
      setOption({
        name: ""
      })
    }
  };

  const handleInputValue = ({ target: { name, value } }: dataElement) => {
    setOption({ ...option, [name]: value });
    setInputValue({name: ""});
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Introduzca opcion"
          value={option.name}
          onChange={handleInputValue}
          name="name"
        />
        <button className={`button ${option.name === '' ? 'button-empty' : 'button'}`}>Agregar</button>
      </form>
    </>
  );
}
