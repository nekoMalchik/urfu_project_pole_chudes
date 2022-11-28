import './App.css';
import React from "react";
import {GameContainer} from "./mainAtributes/gameContainer";
import {CreateLobby} from "./pages/createLobby";
import {Lobbies} from "./pages/lobbies";
import {Route, Routes} from "react-router-dom";
import {Header} from "./mainAtributes/header";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<GameContainer />} />
                <Route path="/lobbies" element={<Lobbies/>} />
                <Route path="/create/lobby" element={<CreateLobby/>} />
            </Routes>
        </div>
    );
}

export default App;
