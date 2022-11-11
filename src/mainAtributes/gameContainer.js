import React, {useEffect, useState} from "react";
import {Wheel} from "../wheelAtributes/wheel";
import WheelBox from "../outputBoxAtributes/outputBox";
import logo from "../yakub.png";
import InputBox from "../inputBoxAtributes/inputBox";
import "../mainPage/mainPage.css"

export function GameContainer() {

    const [riddle, setRiddle] = useState(null);
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/riddle")
            .then(res => res.json())
            .then(
                (result) => {
                    setRiddle(result.riddle);
                    setAnswer(result.answer);
                },
            );
    }, []
    );

    return (
            <div className="grid-container">
                <div className="grid-col-1">
                    <Wheel />
                </div>
                <div className="grid-col-2">
                    {/*<AnswerBox />*/}
                    <WheelBox />
                    <img style={{ width: 400 }} src={logo} alt="logo"/>
                </div>
                {/*<div className="grid-col-3">*/}
                {/*    <InputBox answer={answer} riddle={riddle}/>*/}
                {/*</div>*/}
            </div>
    );
}
