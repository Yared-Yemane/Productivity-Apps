import React from "react";

function KeysWindow({ handleButton }) {
  const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];

  const basicKeys = [
    "7",
    "8",
    "9",
    "*",
    "/",
    "4",
    "5",
    "6",
    "-",
    "(",
    "1",
    "2",
    "3",
    "+",
    ")",
    ".",
    "0",
    "DEL",
    "AC",
    "=",
  ];
  return (
    <>
      <div className="keys-window">
        <div className="scientific-keys">
          {sciKeys.map((item, index) => (
            <button
              key={index}
              onClick={() => handleButton(item)}
              className="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="line"></div>
        <div className="basic-keys">
          {basicKeys.map((item, index) => (
            <button
              key={index}
              className={`${item !== "=" ? "button" : ""} ${
                item === "=" && "equal"
              }
                    `}
              onClick={() => handleButton(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default KeysWindow;
