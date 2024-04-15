import { useState } from "react";
import { Todo } from "./TypeScript";

const ToDos = ({ todo, handleDeleteToDo, handleEditToDo }: { todo: Todo, handleDeleteToDo: (id: string) => void, handleEditToDo: (id: string, updatedTodo: Todo) => void }) => {
    const [editedTodo, setEditedTodo] = useState({ ...todo });
    const [isEditing, setIsEditing] = useState(false);
    

    console.log(editedTodo)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTodo({
            ...editedTodo,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        handleEditToDo(todo.id, editedTodo);
        setIsEditing(false);
    };

    return (
        <li className="custom-todo-item">
            <div className="custom-todo-details">
                <div className="custom-todo-title">
                    {isEditing ? (
                        <>
                            <p>Title:</p>
                            <input type="text" name="title" value={editedTodo.title} onChange={handleChange} />
                        </>
                    ) : (
                        <>
                            <p>Title:</p>
                            <p>{todo.title}</p>
                        </>
                    )}
                </div>
                <div className="custom-todo-due-date">
                    {isEditing ? (
                        <>
                            <p>Due date:</p>
                            <input type="date" name="date" value={editedTodo.date} onChange={handleChange} />
                        </>
                    ) : (
                        <>
                            <p>Due date:</p>
                            <p>{todo.date}</p>
                        </>
                    )}
                </div>
                <div className="custom-todo-actions">
                    {isEditing ? (
                        <>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setIsEditing(true)}>Edit</button>
                            <button onClick={() => handleDeleteToDo(todo.id)}>Delete</button>
                        </>
                    )}
                    <input className="checkBox" type="checkBox" name="checkBox" />
                </div>
            </div>
        </li>
    );
};

export default ToDos;
