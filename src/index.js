import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wheel from "./wheelAtributes/wheel";
import InputBox from "./inputBoxAtributes/inputBox";
import OutputBox from "./outputBoxAtributes/outputBox";
import "./mainPage/mainPage.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
reportWebVitals();
