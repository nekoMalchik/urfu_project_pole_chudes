import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Wheel} from "./wheelAtributes/wheel";
import InputBox from "./inputBoxAtributes/inputBox";
import OutputBox from "./outputBoxAtributes/outputBox";
import LobbyStands from "./lobbyStand/lobbyStands";
import "./mainPage/mainPage.css";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App />
);
reportWebVitals();
