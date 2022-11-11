import React, {useEffect, useRef, useState} from "react";
import "./inputBox.css";
import "../databaseImitation/databaseImitation";
import "../lobbyStand/lobbyStands";
import LobbyStands from "../lobbyStand/lobbyStands";
import {WinCondition} from "./winCondition/winCondition";



export default function InputBox(answer, riddle) {
    const cells = useRef(null);
    const [modalActive, setModalActive] = useState(false);
    const [turn, setTurn] = useState(null);
    const [usedChars, setUsedChars] = useState([]);



    function addGuessToServer(inputVal) {
        fetch("http://127.0.0.1:8000/addChar", {
            method: 'POST',
            body: JSON.stringify({'char': inputVal}),
        }).then(response => response.json())
        fetch("http://127.0.0.1:8000/chars")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsedChars(result.usedChars)
                },
            );
    }

    function disableRightGuess() {
        let dom = document.querySelector(`[inputboxnumber="1"]`);
        let inputVal = dom.value;
        if (!usedChars.includes(inputVal)) {
            if (answer.includes(inputVal)) {
                addGuessToServer(inputVal);
                setNextTurn();
            }
            else {
                console.log('Неверный ответ');
                addGuessToServer(inputVal);
                setNextTurn();
            }
        } else {
            dom.value = '';
        }
    }


    useEffect(() => {
        fetch("http://127.0.0.1:8000/turn")
            .then(res => res.json())
            .then(
                (result) => {
                    setTurn(result.turn);
                },
            );
        fetch("http://127.0.0.1:8000/chars")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsedChars(result.usedChars);
                },
            );
        }, [turn, setTurn]

    );

    function setNextTurn() {
        fetch("http://127.0.0.1:8000/incTurn")
            .then(res => res.json())
            .then(
                (result) => {
                    setTurn(result.setTurn);
                },
            )
    }

    return (
        <div>
            <div className="inputbox" ref={cells}>
            </div>
            <div className="questionbox">
                {riddle}
            </div>
            <div>
                <br></br>
                <button type="button" className="button-27" onClick={()=> {disableRightGuess()}}>Submit</button>
            </div>
            <div className="usedchars">
                {usedChars}
            </div>
            <LobbyStands />
            <WinCondition active={modalActive} setActive={setModalActive}/>
        </div>
    );
}
