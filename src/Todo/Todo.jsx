import {useState} from "react";
import {TodoForm} from "./TodoForm.jsx";
import {TodoList} from "./TodoList.jsx";
import {TodoDateTime} from "./TodoDateTime.jsx";
import {getLocalStorageItems, setLocalStorageItems} from "./TodoLocalStorage.jsx";
import './Todo.css';

export const TodoApp = () => {

    const [tasks, setTasks] = useState(() => getLocalStorageItems());
    const [editTask, setEditTask] = useState(null);

    const handleSubmit = (inputValue) => {
        if (!inputValue?.id) return;
        if (editTask && inputValue.id === editTask.id) {
            const updatedTasks = tasks.map(t => {
                if (t.id === inputValue.id) {
                    t.content = inputValue.content;
                }
                return t;
            })
            setTasks(updatedTasks)
            setLocalStorageItems(updatedTasks);
            setEditTask(null);
        } else {
            if (tasks.find(t => t.id === inputValue.id)) {
                return;
            }
            setTasks(prevTasks => {
                setLocalStorageItems([...prevTasks, {
                    id: tasks.length + 1,
                    content: inputValue.content,
                    checked: false
                }]);
                return [...prevTasks, {id: tasks.length + 1, content: inputValue.content, checked: false}]
            });
        }
    }

    const handleCheck = (currTask) => {
        const updatedTasks = tasks.map(t => {
            if (t.id === currTask.id) {
                t.checked = !t.checked;
            }
            return t;
        })
        setTasks(updatedTasks)
        setLocalStorageItems(updatedTasks);
    }

    const handleDelete = (currTask) => {
        const updatedTasks = tasks.filter(task => task.id !== currTask.id);
        setTasks(updatedTasks);
        setLocalStorageItems(updatedTasks);
    }

    const handleClear = () => {
        setTasks([]);
        setLocalStorageItems([]);
    }

    const handleEdit = (editedTask) => {
        setEditTask(editedTask);
    }

    return (
        <>
            <section>
                <TodoDateTime/>
            </section>
            <section className="form">
                <TodoForm addTodo={handleSubmit} editTask={editTask}/>
            </section>
            <section className="myUnOrdList">
                <ul>{
                    tasks.map((task) => (
                        <TodoList task={task} key={task.id} handleCheck={handleCheck} handleDelete={handleDelete}
                                  handleEdit={handleEdit}/>
                    ))
                }</ul>
            </section>
            <section>
                <button type="button" className="clear-btn" onClick={handleClear}>Clear All</button>
            </section>
        </>
    )
}
