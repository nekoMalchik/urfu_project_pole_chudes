import React, {useState} from "react";
import "./lobbyStands.css"
import LobbyStand from "./lobbyStand";

export default function LobbyStands(props) {

    return (
        <div className="lobbyStands">
            <LobbyStand standData='0' id={props.id} />
            <LobbyStand standData='1' id={props.id} />
            <LobbyStand standData='2' id={props.id} />
        </div>
    )
}