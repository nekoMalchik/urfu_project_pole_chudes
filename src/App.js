import React from "react";
import {GameContainer} from "./mainAtributes/gameContainer";
import {CreateLobby} from "./pages/createLobby";
import {Lobbies} from "./pages/Lobbies/lobbies";
import {Route, Routes} from "react-router-dom";
import {Header} from "./mainAtributes/header";
import PageNotFound from "./pages/pageNotFound";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/lobby/:id" element={<GameContainer />} />
                <Route path="/lobbies" element={<Lobbies/>} />
                <Route path="/create/lobby" element={<CreateLobby/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
