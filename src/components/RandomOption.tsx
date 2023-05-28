import React from "react";
import IOption from "../interfaces/IOption";

interface Props {
    options: IOption[];
}

export default function RandomOption({ options }: Props) {
    const handleRandomOption = () => {
        const index = Math.floor(Math.random() * options.length);
        console.log(options[index]);
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
                gap: "10px",
            }}
        >
            <button
                onClick={handleRandomOption}
                className={`button ${
                    options.length === 0 ? "button-empty" : "button"
                }`}
            >
                Elegir!
            </button>
            <button onClick={handleClearOptions} className="button">
                Eliminar opciones
            </button>
        </div>
    );
}
