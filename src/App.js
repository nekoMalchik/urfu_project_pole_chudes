import logo from './logo.svg';
import './App.css';
import {Wheel} from "./wheelAtributes/wheel";
import OutputBox from "./outputBoxAtributes/outputBox";
import InputBox from "./inputBoxAtributes/inputBox";
import React from "react";

function App() {
  return (
      <div>
        <div className="grid-container">
          <div className="grid-col-1">
            <Wheel />
          </div>
          <div className="grid-col-2">
            <OutputBox />
          </div>
          <div className="grid-col-3">
            <InputBox />
          </div>
        </div>
      </div>
  );
}

export default App;
