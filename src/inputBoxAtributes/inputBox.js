import React, {useEffect, useRef, useState} from "react";
import "./inputBox.css";
import "../databaseImitation/databaseImitation";
import "../lobbyStand/lobbyStands";
import {getQuestionPair, getTurn, setTurn} from "../databaseImitation/databaseImitation";
import LobbyStands from "../lobbyStand/lobbyStands";



export default function InputBox() {
    const arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я',
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
    //TODO переписать под бэкенд
    let pair = getQuestionPair();

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

    function inputBoxHandler(event) {
        if (arr_ru.includes(event.key)) {
            event.target.value = event.key.toString().toUpperCase();
        } else {
            event.target.value = event.target.replace(event.key, '');
        }
        setActiveBoxValue(event.target.getAttribute("inputboxnumber"));
    }

    function disableRightGuess() {
        let dom = document.querySelector(`[inputboxnumber="${activeBoxValue}"]`);
        if (dom.value === answer[activeBoxValue]) {
            dom.disabled = true;
        }
        fetch("http://127.0.0.1:8000/addChar",{
            method : 'POST',
            body : JSON.stringify({'char' : dom.value}),
        }).then(response => response.json())
        console.log(usedChars);
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
        }, [turn, setTurn]
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

    let wordList = answer.map((char, index) => <input className={`char char-${index}`} inputboxnumber={index} type="text" disabled={false} maxLength="1" onKeyDown={inputBoxHandler}/>);
    return (
        <div>
            <div className="inputbox">
                {wordList}
            </div>
            <div className="questionbox">
                {riddle}
            </div>
            <div>
                <br></br>
                <button type="button" className="button-27" onClick={()=> {disableRightGuess(); setNextTurn()}}>Submit</button>
            </div>
            <div className="usedchars">
                {usedChars}
            </div>
            <LobbyStands />
        </div>
    );
}