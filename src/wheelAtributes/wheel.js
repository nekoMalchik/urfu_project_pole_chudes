import React, {useEffect, useRef, useState} from "react";
import "./wheelSpin.css";


export function Wheel() {

    const [num, setNum] = useState(() => {
        fetch("http://127.0.0.1:8000/piece")
            .then(res => res.json())
            .then(
                (result) => {
                    setNum(parseInt(result.piece))
                },
            );
    });
    const wheelSpin = useRef(null);


    const handleClick = () => {
        setNum(num + Math.ceil(Math.random() * (600) + 400));
    }

    useEffect(
        () => {
            doSpin();
            setWheelNumber();
        },
    );

    const doSpin = () => {
        wheelSpin.current.style.transform = "rotate(" + num + "deg)";
    }

    const getPieceByAngle = (angle) => {
        let pieceNum;
        if (angle < 90)
            pieceNum=Math.abs(angle-90)
        else if (angle > 90 && angle <= 180)
            pieceNum=(360 - angle % 90)
        else if (angle > 180 && angle <= 270)
            pieceNum=(270 - angle % 90)
        else
            pieceNum=(180 - angle % 90)
        return Math.floor(pieceNum / 45 + 1);
    }

    const setWheelNumber = () => {
        let angle = num % 360;
        let pieceNum = getPieceByAngle(angle);
        fetch("http://127.0.0.1:8000/setPiece",{
            method : 'POST',
            body : JSON.stringify({'num' : num}),
        }).then(response => response.json())
        setTimeout(function() {
            let pieceBox = document.querySelector("#outputBox");
            pieceBox.textContent = pieceNum.toString();
        }, 3000);
    }

    return (
        <div>
            <button id="spin" onClick={ () => {handleClick()}}>PUSH</button>
            <span className="arrow"></span>
            <i className="arrow-left"></i>
            <div className="container duration" ref={wheelSpin}>
                <div className="one">1</div>
                <div className="two">2</div>
                <div className="three">3</div>
                <div className="four">4</div>
                <div className="five">5</div>
                <div className="six">6</div>
                <div className="seven">7</div>
                <div className="eight">8</div>
            </div>
        </div>
    );
}