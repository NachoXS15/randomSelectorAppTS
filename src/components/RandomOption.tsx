import React, { useState } from "react";
import IOption from "../interfaces/IOption";
import "../styles/App.scss";
import OptionsList from "./OptionsList";

interface Props {
    options: IOption[];
}

export default function RandomOption({ options }: Props) {
    const [randomOption, setRandomOption] = useState<IOption | null>();
    const handleRandomOption = () => {
        if (options.length === 0) {
            alert("No options added");
        } else {
            const index = Math.floor(Math.random() * options.length);
            const randomOption = options[index];
            setRandomOption(randomOption);
            console.log(randomOption);
        }
    };

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <>
            <div className="options-container">
                <OptionsList options={options} />
            </div>
            <div className="option-picked-container">
                {randomOption && (
                    <>
                        <div className="option-picked" style={{marginTop: '0.5em'}}>
                            <h4>Option picked is:</h4>
                            <span>"{randomOption.name}"</span>
                        </div>
                    </>
                )}
                <button
                    onClick={handleRandomOption}
                    className={`button ${
                        options.length === 0 ? "button-empty" : "button"
                    }`}
                >
                    Pick!
                </button>
                <button onClick={reloadPage} className={options.length > 0 ? "button" : "button-none"}>
                    {randomOption ? "Reload page" : "Delete Options"}
                </button>
            </div>
        </>
    );
}
