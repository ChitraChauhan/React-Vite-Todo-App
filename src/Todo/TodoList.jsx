import {MdCheck, MdDeleteForever, MdEdit} from "react-icons/md";

export const TodoList = ({key, task, handleCheck, handleDelete, handleEdit}) => {
    return (
        <>
            <li className="todo-item" key={key}>
                <span className={task.checked ? 'checkList' : 'notCheckList'}>{task.content}</span>
                <button type="button" className="edit-btn" onClick={() => handleEdit(task)}>
                    <MdEdit/>
                </button>
                <button type="button" className="check-btn" onClick={() => handleCheck(task)}>
                    <MdCheck/>
                </button>
                <button type="button" className="delete-btn" onClick={() => handleDelete(task)}>
                    <MdDeleteForever/>
                </button>
            </li>
        </>
    )
}
