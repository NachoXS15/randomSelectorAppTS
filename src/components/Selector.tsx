import React, { useState } from "react";
import "../styles/App.scss";
import IOPtion from "../interfaces/IOption";

interface Props {
  addOptions: (option: IOPtion) => void;
}

export default function Selector({ addOptions }: Props) {
  const [option, setOption] = useState({
    name: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addOptions(option);
    setOption({
      name: "",
    });
  };

  const handleInputValue = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setOption({ ...option, [name]: value });
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
        <button className="">Agregar</button>
      </form>
    </>
  );
}
