import React from "react";
import Cat from "./yakubwin.png";
import "./winCondition.css";

export function WinCondition({active, setActive}) {
    return (
        <div className={active ? 'modal active' : 'modal'} >
            <img style={{ width: 800 }} src={Cat}  alt=''/>
        </div>
    )
}
