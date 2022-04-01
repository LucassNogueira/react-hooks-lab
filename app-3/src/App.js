import React from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import PokemonList from "./PokemonList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
