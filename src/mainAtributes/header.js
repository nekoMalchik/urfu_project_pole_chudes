import {Link} from "react-router-dom";
import React from "react";
import "./css/header.css"

export function Header() {
    return (
    <ul>
        <li><Link className="li-el" to="/">Home</Link></li>
        <li><Link className="li-el" to="/posts">Posts</Link></li>
        <li><Link className="li-el" to="/about">About</Link></li>
    </ul>
    )
}