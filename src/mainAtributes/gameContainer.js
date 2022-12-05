import React, {createContext, useEffect, useState} from "react";
import {Wheel} from "../wheelAtributes/wheel";
import OutputBox from "../outputBoxAtributes/outputBox";
import logo from "../yakub.png";
import InputBox from "../inputBoxAtributes/inputBox";
import "../mainPage/mainPage.css";
import AnswerBox from "../outputBoxAtributes/answerBox";
import { useParams } from "react-router-dom";

export const ValueContext = createContext([]);

export function GameContainer() {

    const [riddle, setRiddle] = useState('');
    const [answer, setAnswer] = useState([]);
    const [usedChars, setUsedChars] = useState('');
    const [value, setValue] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/riddle/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setRiddle(result.getRiddle);
                    setAnswer(result.getAnswer);
                },
            );
        fetch("http://127.0.0.1:8000/chars/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setUsedChars(result.usedChars);
                },
            );
    }, []
    );

    return (
            <div className="grid-container">
                <div className="grid-col-1">
                    <Wheel id={id}/>
                </div>
                <ValueContext.Provider value={{ value, setValue }}>
                    <div className="grid-col-2">
                        <OutputBox />
                        <AnswerBox answer={answer} usedChars={usedChars} id={id}/>
                        <img style={{ width: 400 }} src={logo} alt="logo"/>
                    </div>
                    <div className="grid-col-3">
                        <InputBox riddle={riddle} answer={answer} id={id}/>
                    </div>
                </ValueContext.Provider>
            </div>
    );
}
