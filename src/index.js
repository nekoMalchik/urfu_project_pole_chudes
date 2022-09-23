import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wheel from "./wheelAtributes/wheel";
import InputBox from "./inputBoxAtributes/inputBox";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Wheel />
        <InputBox />
    </div>

);
reportWebVitals();
