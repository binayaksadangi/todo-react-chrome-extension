import React, { useState, useEffect } from "react";
import "./App.css";
import del from "./delete.png";

const getTodos = () => {
  if (localStorage.getItem("todos") === null) {
    return [];
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    return todoLocal;
  }
};

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getTodos());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const deleteTodo = (ind) => {
    setTodos(todos.filter((todo, i) => i != ind));
  };
  return (
    <div className="container">
      <h1 className="heading">Todo List</h1>
      <div className="input-container">
        <input
        className="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
        className="btn"
          onClick={() => {
            setTodos([...todos, input]);
            setInput("");
          }}
        >
         
          +
        </button>
        </div>
        <ul className="list-container">
          {todos.map((todo, index) => (
            <li className="list-item" key={index}>
              {todo} <button className="delete-btn" onClick={() => deleteTodo(index)}>
                <img src={del} alt="" srcset="" className="del-icon"/>
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
