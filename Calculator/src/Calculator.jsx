import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  function addNumber(num) {
    setDisplay(display + num);
  }

  function addOperator(operator) {
    setDisplay(display + operator);
  }

  function clear() {
    setDisplay("");
  }

  function deleteLast() {
    setDisplay(display.slice(0, -1));
  }

  function calculate() {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  }

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h2>Calculator</h2>
        <span>Give a Values</span>
      </div>

      <div className="display-box">
        <input type="text" value={display} readOnly placeholder="0" />
      </div>

      <div className="buttons">
        <button className="clear" onClick={clear}>C</button>
        <button className="operator" onClick={deleteLast}>⌫</button>
        <button className="operator" onClick={() => addOperator("%")}>%</button>
        <button className="operator" onClick={() => addOperator("/")}>÷</button>

        <button onClick={() => addNumber("7")}>7</button>
        <button onClick={() => addNumber("8")}>8</button>
        <button onClick={() => addNumber("9")}>9</button>
        <button className="operator" onClick={() => addOperator("*")}>×</button>

        <button onClick={() => addNumber("4")}>4</button>
        <button onClick={() => addNumber("5")}>5</button>
        <button className="number" onClick={() => addNumber("6")}>6</button>
        <button className="operator" onClick={() => addOperator("-")}>−</button>

        <button onClick={() => addNumber("1")}>1</button>
        <button onClick={() => addNumber("2")}>2</button>
        <button onClick={() => addNumber("3")}>3</button>
        <button className="operator" onClick={() => addOperator("+")}>+</button>

        <button className="zero" onClick={() => addNumber("0")}>0</button>
        <button onClick={() => addNumber(".")}>.</button>
        <button className="equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;