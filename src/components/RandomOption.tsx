import React, { useState } from "react";
import IOption from "../interfaces/IOption";
import { spawn } from "child_process";
import '../styles/App.scss'

interface Props {
    options: IOption[];
}

export default function RandomOption({ options }: Props) {
    const [randomOption, setRandomOption] = useState<IOption | null>();
    const handleRandomOption = () => {
        const index = Math.floor(Math.random() * options.length);
        const randomOption = options[index];
        setRandomOption(randomOption);
    };
    const handleClearOptions = () => {
        options.splice(0, options.length);
        console.log(options);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'column',
                gap: "10px"
            }}
        >
            {randomOption && (
                <>
                    <div className="option-picked">
                        <h4>Option picked is:</h4>
                        <span>{randomOption.name}</span>
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
            <button onClick={handleClearOptions} className="button">
                Delete options
            </button>
        </div>
    );
}
