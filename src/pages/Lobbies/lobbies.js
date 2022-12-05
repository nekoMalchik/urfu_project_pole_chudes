import React, {useEffect, useRef, useState} from "react";
import Lobby from "./lobby";
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

export function Lobbies() {
    var myRoomsData = null;
    const [rooms, setRooms] = useState(null);
    const roomBoxes = useRef(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/rooms")
            .then((response) => response.json())
            .then((data) => {
                setRooms(data.roomsData.map((val) => <Lobby id={Object.keys(val)} name={Object.values(val)} />));
            })
    }, [])

    return <div>
        <ListGroup variant="flush" className='white-text' ref={roomBoxes}>{rooms}</ListGroup>
    </div>
}
