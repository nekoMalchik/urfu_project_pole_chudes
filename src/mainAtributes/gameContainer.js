import React from "react";
import {Wheel} from "../wheelAtributes/wheel";
import OutputBox from "../outputBoxAtributes/outputBox";
import logo from "../yakub.png";
import InputBox from "../inputBoxAtributes/inputBox";

export function GameContainer() {
    return (
            <div className="grid-container">
                <div className="grid-col-1">
                    <Wheel />
                </div>
                <div className="grid-col-2">
                    <OutputBox />
                    <img style={{ width: 400 }} src={logo} alt="logo"/>
                </div>
                <div className="grid-col-3">
                    <InputBox />
                </div>
            </div>
    );
}