import React, {useEffect, useRef, useState} from "react";
import "./inputBox.css";
import "../databaseImitation/databaseImitation";
import "../lobbyStand/lobbyStands";
import LobbyStands from "../lobbyStand/lobbyStands";
import {WinCondition} from "./winCondition/winCondition";



export default function InputBox() {
    const arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я',
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];

    const cells = useRef(null);
    const [modalActive, setModalActive] = useState(false);
    const [turn, setTurn] = useState(null);
    const [riddle, setRiddle] = useState(null);
    const [answer, setAnswer] = useState([]);
    const [activeBoxValue, setActiveBoxValue] = useState(0);
    const [usedChars, setUsedChars] = useState(() => {
        fetch("http://127.0.0.1:8000/chars")
        .then(res => res.json())
        .then(
            (result) => {
                setUsedChars(result.usedChars)
            },
        );
    })

    function setCorrectInputs() {
        let i = 0;
        for (let cell of cells.current.children) {
            if (usedChars.includes(answer[i])) {
                cell.classList.add('correct');
                cell.value = answer[i];
                cell.disabled = true;
            }
            i++;
        }
    }

    function winCondition() {
        let wincondition = true;
        for (let cell of cells.current.children) {
            if (!cell.classList.contains('correct')) {
                wincondition = false
            }
        }
        if (wincondition) {
            setModalActive(true);
        }
    }

    function inputBoxHandler(event) {
        event.target.value = '';
        if (arr_ru.includes(event.key)) {
            event.target.value = event.key.toString().toUpperCase();
        }
        setActiveBoxValue(event.target.getAttribute("inputboxnumber"));
    }

    function disableRightGuess() {
        let wrongAnswer = false;
        let dom = document.querySelector(`[inputboxnumber="${activeBoxValue}"]`);
        let inputVal = dom.value;
        if (dom.value === answer[activeBoxValue]) {
            dom.disabled = true;
            dom.classList.add('correct');
        } else {
            dom.value = '';
            wrongAnswer = true;
        }
        if (!usedChars.includes(inputVal) || wrongAnswer) {
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
            setNextTurn();
        }
        winCondition();
    }


    useEffect(() => {
        fetch("http://127.0.0.1:8000/turn")
            .then(res => res.json())
            .then(
                (result) => {
                    setTurn(result.turn);
                },
            );
        fetch("http://127.0.0.1:8000/riddle")
            .then(res => res.json())
            .then(
                (result) => {
                    setRiddle(result.riddle);
                    setAnswer(result.answer);
                },
            );
        setCorrectInputs();
        }, [turn, setTurn, usedChars, setUsedChars]

    );

    function setNextTurn() {
        fetch("http://127.0.0.1:8000/incTurn")
            .then(res => res.json())
            .then(
                (result) => {
                    setTurn(result.turn);
                    console.log(result.turn);
                },
            )
    }

    //TODO Сделать красиво
    let wordList = answer.map((char, index) => <input className={`char char-${index}`} inputboxnumber={index} type="text" disabled={false} maxLength="1" onKeyDown={inputBoxHandler}/>);
    return (
        <div>
            <div className="inputbox" ref={cells}>
                {wordList}
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
