import React from "react";
import Cat from "./resources/cat.gif";
import "./css/about.css";

export function Lobbies() {
    return <div>
        <div className="data-small"> Я пытаюсь в функциональное программирование</div>
        <img src={Cat} />
    </div>
}
