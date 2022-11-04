import React, {useEffect, useRef} from "react";

export default function LobbyStand({standData}) {
    const standContainer = useRef(null);

    useEffect(() => {
        turnState();
    })

    function turnState() {
        fetch("http://127.0.0.1:8000/turn")
            .then(res => res.json())
            .then(
                (result) => {
                    let stand = standContainer.current;
                    if (standData == result.turn) {
                        stand.classList.add("currentTurn");
                    } else {
                        stand.classList.remove("currentTurn")
                    }
                },
            )
    }

    return (
        <div ref={standContainer} className="lobbyStand">{standData}</div>
    )
}