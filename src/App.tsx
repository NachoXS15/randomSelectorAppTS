import "./styles/App.scss";
import Selector from "./components/Selector";
import { useState } from "react";
import IOption from "./interfaces/IOption";
import OptionsList from "./components/OptionsList";
import Header from "./components/Header";

function App(): JSX.Element {
  const [options, setOptions] = useState<IOption[]>([]);
  const getCurrentTimestamp = () => new Date().getTime();
  const addOption = (option: IOption) =>
    setOptions([...options, { ...option, id: getCurrentTimestamp() }]);

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
        </div>
      </div>
      
    </>
  );
}

export default App;
