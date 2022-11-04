import React, {useState} from "react";
import "./lobbyStands.css"
import LobbyStand from "./lobbyStand";

export default function LobbyStands() {

    return (
        <div className="lobbyStands">
            <LobbyStand standData='0'/>
            <LobbyStand standData='1'/>
            <LobbyStand standData='2'/>
        </div>
    )
}