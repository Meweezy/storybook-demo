import React, { useState } from "react";
import "./App.css";
import TodoContainer from "./TodoContainer";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form action="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      <TodoContainer todos={todos} />
    </div>
  );
}

export default App;
