import React, { useState } from "react";
import Option from "./Option";
import IOption from "../interfaces/IOption";
interface Props {
  options: IOption[];
  handleClearOptions: ()=> void
}

export default function OptionsList({ options, handleClearOptions }: Props) {
  return (
    <>
      {options.length > 0 && options.map((option) => {
        return <Option option={option} key={option.id}  />;
      })}
    </>
  );
}
