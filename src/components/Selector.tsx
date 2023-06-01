import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null);
  inputRef.current?.focus();

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
    console.log(option)
  };

  const handleInputValue = ({ target: { name, value } }: dataElement) => {
    setOption({ ...option, [name]: value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Insert options"
          value={option.name}
          onChange={handleInputValue}
          name="name"
          aria-required
          ref={inputRef}
        />
        <button className={`button ${option.name === '' ? 'button-empty' : 'button'}`}>Add</button>
      </form>
    </>
  );
}
