import React from "react";
// import './ScientificCalcApp.css'

function DisplayWindow({ displayExp, result }) {
  return (
    <div className="display-window">
      <p className="expression">{displayExp}</p>
      <p className="result">{result}</p>
    </div>
  );
}

export default DisplayWindow;
