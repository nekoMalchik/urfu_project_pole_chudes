import React, {useEffect, useState} from "react";
import {Wheel} from "../wheelAtributes/wheel";
import OutputBox from "../outputBoxAtributes/outputBox";
import logo from "../yakub.png";
import InputBox from "../inputBoxAtributes/inputBox";
import "../mainPage/mainPage.css"
import AnswerBox from "../outputBoxAtributes/answerBox";

export function GameContainer() {

    const [riddle, setRiddle] = useState('');
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/riddle")
            .then(res => res.json())
            .then(
                (result) => {
                    setRiddle(result.getRiddle);
                    setAnswer(result.getAnswer);
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
                    <OutputBox />
                    <AnswerBox answer={answer} usedChars={["Г", "У"]} />
                    <img style={{ width: 400 }} src={logo} alt="logo"/>
                </div>
                <div className="grid-col-3">
                    <InputBox riddle={riddle} answer={answer}/>
                </div>
            </div>
    );
}
