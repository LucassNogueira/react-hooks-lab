import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9")
      .then((res) => setList(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {list.map((item, index) => (
        <List key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
