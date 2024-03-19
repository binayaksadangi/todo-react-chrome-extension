import React, { useState, useEffect } from "react";
import "./App.css";
import del from "./delete.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const getTodos = () => {
  if (localStorage.getItem("todos") === null) {
    return [];
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    return todoLocal;
  }
};

function App() {
  const [input, setInput] = useState();
  const [todos, setTodos] = useState(getTodos());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const deleteTodo = (ind) => {
    setTodos(todos.filter((todo, i) => i != ind));
    toast.info("You deleted a task!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
            console.log(todos);
            console.log(input);
            // setInput("");
            if (input === "") {
              toast.error("Cannot enter empty task", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            } else {
              toast.success("You added a task!", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          }}
        >
          +
        </button>
      </div>
      <ul className="list-container">
        {todos.map((todo, index) => (
          <li className="list-item" key={index}>
            {todo}{" "}
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
              <img src={del} alt="" srcset="" className="del-icon" />
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default App;
