import {useState, useEffect} from "react";

export const TodoForm = ({addTodo, editTask}) => {
    const [inputValue, setInputValue] = useState(null);

    useEffect(() => {
        setInputValue(editTask)
    }, [editTask]);

    const handleInputValue = (e) => {
        const value = e.target.value;
        setInputValue({id: editTask ? editTask.id : value, content: value, checked: false});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue(null);
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input className="todo-input" type="text" value={inputValue?.content || ''}
                           onChange={(e) => handleInputValue(e)}/>
                </div>
                <button type="submit" className="todo-btn">{editTask?.id ? 'Edit Task' : "Add Task"}</button>
            </form>
        </>
    )
}
