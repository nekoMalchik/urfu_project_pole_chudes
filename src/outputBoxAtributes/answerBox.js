import React, {useEffect, useRef, useState} from "react";

export default function AnswerBox(usedChars, answer) {
    const cells = useRef(null);

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
    return (
        <div ref={cells}>
            <div></div>
        </div>
    );
}
