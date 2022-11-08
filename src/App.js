import './App.css';
import React from "react";
import {GameContainer} from "./mainAtributes/gameContainer";
import {About} from "./pages/about";
import {Donate} from "./pages/donate";
import {Route, Routes} from "react-router-dom";
import {Header} from "./mainAtributes/header";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<GameContainer />} />
                <Route path="/posts" element={<Donate/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </div>
    );
}

export default App;
