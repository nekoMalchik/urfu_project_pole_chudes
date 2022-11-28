import React, {useContext, useEffect, useRef} from "react";
import './answerBox.css';
import {ValueContext} from "../mainAtributes/gameContainer";

export default function AnswerBox(props) {
    const cells = useRef(null);
    const {value} = useContext(ValueContext);

    function setCorrectInputs() {
        let i = 0;
        for (let cell of cells.current.children) {
            if (value.includes(props.answer[i]) || props.usedChars.includes(props.answer[i])) {
                cell.classList.add('correct');
                cell.innerText = props.answer[i];
                cell.disabled = true;
            }
            i++;
        }
    }

    function createAnswerBoxes() {
        cells.current.innerHTML = '';
        for (let i = 0; i < props.answer.length; i++) {
            console.log(props.answer);
            let char = document.createElement('div');
            char.classList.add('answer-box');
            cells.current.appendChild(char);
        }
    }

    useEffect(()=> {
        createAnswerBoxes();
        setCorrectInputs();
    }, [value]);

    return (
        <div ref={cells} className="answer-container ">
        </div>
    );
}
