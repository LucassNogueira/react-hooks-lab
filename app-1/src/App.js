import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import List from "./components/List";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    let newTodoList = [...todo, newTodo];
    setTodo(newTodoList);
  };
  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List todo={todo} />
    </div>
  );
}

export default App;
