import React from "react";
// import Player from "./components/Player";
import PlayerList from "./components/PlayerList";
import './App.css';

function App() {
  return (
    <div className="players">
      <h2 className="play">Player List</h2>
      <PlayerList/>
    </div>
  )
}

export default App;
