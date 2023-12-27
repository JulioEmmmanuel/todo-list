import React from "react";
import "./App.css"

import { AppUI } from "./AppUI.js";
import { TodoProvider } from "../TodoContext/index.js";

// const defaultTodos = [
//   {text: "Cortar cebolla", completed: true},
//   {text: "Tomar el curso de React", completed: false},
//   {text: "Aprender Next", completed: false},
//   {text: "Celebrar navidad", completed: true},
//   {text: "Usar estados derivados", completed: true}
// ]

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))
//localStorage.removeItem("TODOS_V1");

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}


export default App;