import React from "react";
import DisplayWindow from "./DisplayWindow";
import KeysWindow from "./KeysWindow";
import "./ScientificCalcApp.css";
import { useState } from "react";
import AnimatedPage from "../AnimatedPage";

function ScientificCalcApp() {
  const [expression, setExpression] = useState("");
  const [displayExp, setDisplayExp] = useState("");
  const [result, setResult] = useState("0");

  const factorial = (num) => {
    let fact = 1;
    if (num !== 0 && num !== 1) {
      for (let i = 1; i <= num; i++) fact = fact * i;
    }

    return fact;
  };

  const extractLastNum = (exp) => {
    const numbers = exp.match(/\d+/g);
    return numbers ? numbers[numbers.length - 1] : null;
  };

  const sciFunc = {
    sin: "Math.sin",
    con: "Math.cos",
    tan: "Math.tan",
    ln: "Math.log",
    log: "Math.log10",
    π: "Math.PI",
    e: "Math.E",
    "^": "**",
    "√": "Math.sqrt",
  };

  const calcResult = () => {
    if (expression.length !== 0) {
      try {
        let compute = eval(expression);
        compute = parseFloat(compute.toFixed(8));
        setResult(compute);
      } catch (error) {
        setResult("An error occured");
      }
    } else {
      setResult("An error occured");
    }
  };

  const handleButton = (value) => {
    console.log(value);

    if (value === "AC") {
      setExpression("");
      setDisplayExp("");
      setResult("0");
    } else if (value === "=") calcResult();
    else if (value === "!") {
      const lastNum = extractLastNum(expression);
      if (lastNum !== null) {
        const num = parseFloat(lastNum);
        setDisplayExp(displayExp + value);
        setExpression(expression.replace(lastNum, factorial(num)));
      }
    } else if (sciFunc.hasOwnProperty(value)) {
      setExpression(expression + sciFunc[value]);
      setDisplayExp(displayExp + value);
    } else if (value === "DEL") {
      setDisplayExp(displayExp.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else {
      setDisplayExp(displayExp + value);
      setExpression(expression + value);
    }
  };
  return (
    <AnimatedPage>
      <>
        <div className="body">
          <div className="scientific-calc-app">
            <div className="calculator">
              <div className="display-window">
                <DisplayWindow displayExp={displayExp} result={result} />
              </div>
              <div className="keys-window">
                <KeysWindow handleButton={handleButton} />
              </div>
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
}

export default ScientificCalcApp;
