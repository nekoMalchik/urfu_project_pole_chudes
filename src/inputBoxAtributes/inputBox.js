import React, {useContext, useEffect, useRef, useState} from "react";
import "./inputBox.css";
import "../databaseImitation/databaseImitation";
import "../lobbyStand/lobbyStands";
import LobbyStands from "../lobbyStand/lobbyStands";
import {WinCondition} from "./winCondition/winCondition";
import {ValueContext} from "../mainAtributes/gameContainer";



export default function InputBox(props) {
    const cell = useRef(null);
    const [modalActive, setModalActive] = useState(false);
    const [turn, setTurn] = useState(null);
    const [usedChars, setUsedChars] = useState([]);
    const {setValue} = useContext(ValueContext);

    function writeToContext(value) {
        setValue(value);
    }


    function addGuessToServer(inputVal) {
        fetch("http://127.0.0.1:8000/addChar/" + props.id, {
            method: 'POST',
            body: JSON.stringify({'char': inputVal}),
        }).then(response => response.json())
        fetch("http://127.0.0.1:8000/chars/" + props.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setUsedChars(result.usedChars);
                    console.log(result.usedChars);
                    writeToContext(result.usedChars);
                },
            );
    }

    function disableRightGuess() {
        let dom = cell.current;
        let inputVal = dom.value;
        if (!usedChars.includes(inputVal)) {
            if (props.answer.includes(inputVal)) {
                addGuessToServer(inputVal);
                setNextTurn();
            } else {
                console.log('Неверный ответ');
                addGuessToServer(inputVal);
                setNextTurn();
            }
        } else {
            dom.value = '';
        }
    }


    useEffect(() => {
        fetch("http://127.0.0.1:8000/turn/" + props.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setTurn(result.turn);
                },
            );
        fetch("http://127.0.0.1:8000/chars/" + props.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setUsedChars(result.usedChars);
                },
            );
        }, [turn, setTurn]
    );

    function setNextTurn() {
        fetch("http://127.0.0.1:8000/incTurn/" + props.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setTurn(result.setTurn);
                },
            )
    }

    function prettyInput(event) {
        event.target.value = event.key.toString().toUpperCase();
    }

    return (
        <div>
            <div className="questionbox">
                {props.riddle}
            </div>
            <div className='inputbox-centered'>
                <input className="inputbox" ref={cell} maxLength='1' onKeyDown={prettyInput}/>
            </div>
            <div className='inputbox-centered'>
                <button type="button" className="button-27" onClick={()=> {disableRightGuess()}}>Submit</button>
            </div>
            <div className="usedchars">
                {usedChars}
            </div>
            <LobbyStands id={props.id}/>
            <WinCondition active={modalActive} setActive={setModalActive}/>
        </div>
    );
}
