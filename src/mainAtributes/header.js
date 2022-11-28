import {Link} from "react-router-dom";
import React from "react";
import "./css/header.css";

export function Header() {

    return (
    <ul>
        <li><Link className="li-el" to="/">Home</Link></li>
        <li><Link className="li-el" to="/lobbies">Lobbies</Link></li>
        <li><Link className="li-el" to="/create/lobby">Create game</Link></li>
    </ul>
    )
}
