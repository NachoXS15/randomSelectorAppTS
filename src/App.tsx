import "./styles/App.scss";
import Selector from "./components/Selector";
import { useState } from "react";
import IOption from "./interfaces/IOption";
import OptionsList from "./components/OptionsList";
import Header from "./components/Header";

function App(){
  const [options, setOptions] = useState<IOption[]>([]);
  const getCurrentTimestamp = () => new Date().getTime();
  const addOption = (option: IOption) => setOptions([...options, { ...option, id: getCurrentTimestamp() }]);

  const [optionRandom, setoptionRandom] = useState<IOption>();

  const handleRandomOption = () => {
    const index = Math.floor(Math.random() * options.length);
    const randomOption = options[index];
    setoptionRandom(randomOption);
    alert(setoptionRandom);
  }


  return (
    <>
      <Header />
      <div className="container">
        <div className="box">
          <h2>¡Selector de Opciones!</h2>
          <Selector addOptions={addOption} />
          <div className="options-container">
            <OptionsList options={options} />
          </div>
          <button
            onClick={handleRandomOption} 
            className={`button ${options.length === 0  ? 'button-empty' : 'button'}`}
          >
            Elegir!
          </button>     
        </div>
      </div>
      
    </>
  );
}

export default App;


