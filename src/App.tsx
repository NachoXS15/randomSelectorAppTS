import 'bootstrap/dist/css/bootstrap.min.css'

import "./styles/App.scss";
import Selector from "./components/Selector";
import { useState, useRef, useId } from "react";
import IOption from "./interfaces/IOption";
import OptionsList from "./components/OptionsList";
import Header from "./components/Header";
import RandomOption from "./components/RandomOption";

function App() {
    const [options, setOptions] = useState<IOption[]>([]);
    const getCurrentTimestamp = () => new Date().getTime();
    const addOption = (option: IOption) => {
        setOptions([...options, { ...option, id: getCurrentTimestamp() }]);
    }

    return (
        <>  
            <Header />
            <div className="containerBox">
                <div className="container w-50 d-flex align-items-center justify-content-center flex-column" style={{border: '1px solid white'}}>
                    <h2>Random Options Selector!</h2>
                    <Selector addOptions={addOption} />
                    <RandomOption options={options} />
                </div>
            </div>
        </>
    );
}
export default App;
