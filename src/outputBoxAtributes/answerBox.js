import React, {useEffect, useRef} from "react";
import './answerBox.css';

export default function AnswerBox(props) {
    const cells = useRef(null);

    function setCorrectInputs() {
        let i = 0;
        for (let cell of cells.current.children) {
            if (props.usedChars.includes(props.answer[i])) {
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
            let char = document.createElement('div');
            char.classList.add('answer-box');
            cells.current.appendChild(char);
        }
    }

    useEffect(()=> {
        createAnswerBoxes();
        setCorrectInputs();
    });

    return (
        <div ref={cells} className="answer-container">
        </div>
    );
}
