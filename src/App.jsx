import "tailwindcss";
import './App.css'
import {TodoApp} from "./Todo/Todo.jsx";

function App() {
  return (
    <>
        <div className="todo-container">
            <h1 className="header">Todo List</h1>
            <TodoApp/>
        </div>
    </>
  )
}

export default App
