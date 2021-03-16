import React, { useRef } from "react";
import './App.css';

function App() {

  const input = useRef("null");

  const changePlaceHolder = () => {
    input.current.placeholder = "changed!!!!!";
  }
  const returnPlaceHolder = () => {
    input.current.placeholder = "change this placeholder";
  }

  return (
    <div className="App">
      <input type="text" placeholder="change this placeholder" ref={input}/> 
      <button onClick={changePlaceHolder}>Change Placeholder</button>
      <button onClick={returnPlaceHolder}>Return the oldest one</button>
    </div>
  );
}

export default App;
