import React from "react"
import TodoFrom from "./components/TodoForm";
import TodoList from "./components/TodoList";
import s from "./App.module.css"


function App() {
  return (
    <div className={s.appContainer}>
        <TodoFrom/>
        <TodoList/>
    </div>
  );
}

export default App;
