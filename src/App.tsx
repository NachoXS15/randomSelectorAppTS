import "./styles/App.scss";
import Selector from "./components/Selector";
import { useState, useRef } from "react";
import IOption from "./interfaces/IOption";
import OptionsList from "./components/OptionsList";
import Header from "./components/Header";
import { clear } from "console";
import RandomOption from "./components/RandomOption";

function App() {
    const [options, setOptions] = useState<IOption[]>([]);

    const getCurrentTimestamp = () => new Date().getTime();
    const addOption = (option: IOption) =>
        setOptions([...options, { ...option, id: getCurrentTimestamp() }]);

    return (
        <>
            <Header />
            <div className="container">
                <div className="box">
                    <h2>Random Options Selector!</h2>
                    <Selector addOptions={addOption} />
                    <div className="options-container">
                        <OptionsList options={options} />
                    </div>
                    <RandomOption options={options} />
                </div>
            </div>
        </>
    );
}
export default App;
