import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const SearchBar = () => {
  const [result, setRes] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const handleFormInput = (n) => {
    let count = 2;
    let res = 0;
    if (n <= count) {
      setRes(n);
      setInputValue(n);
      return;
    }
    else if(isNaN(n)){return}
    let first = 1;
    let second = 2;

    while (count < n) {
      res = first + second;
      first = second;
      second = res;
      count++;
    }
    setRes(res);
    setInputValue(n);
  };

  return (
    <section className="flex">
      <TypeForm handleChange={handleFormInput}></TypeForm>
      <h2 className="output">
        {inputValue && (
          <>
            <span>#{inputValue} in the Fibonacci series is </span>
            <span>{result.toLocaleString()}</span>
          </>
        )}
      </h2>
    </section>
  );
};

const TypeForm = ({ handleChange }) => {
  const handleInputChange = (e) => {
    const n = parseInt(e.target.value, 10);
    handleChange(n);
  };
  return (
    <form onChange={handleInputChange} className="formbox flex">
      <input placeholder="" id="fibNumber" type="text"></input>
    </form>
  );
};
reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SearchBar></SearchBar>);
