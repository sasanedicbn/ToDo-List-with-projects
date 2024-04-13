import { useState } from 'react';
import ToDos from './ToDos';

const ToDoInput = ({ project, projectId, addToDo, showToDos, toggleToDosHandler, deleteToDo}) => {
    const [todoText, setTodoText] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleAddTodo = () => {
        const todoValue = {
            id: Math.random().toString(36).substring(7),
            title: todoText,
            date: dueDate,
            checked: false,
        };
        addToDo(todoValue, projectId);
        setTodoText('')
        setDueDate('')
    };

    return (
        <>
            {showToDos && (
                <li key={project.id} className="custom-input-project-item">
                    <div className="custom-input-project-container">
                        <div className='custom-input-project-first-child'>
                            <input
                                type="text"
                                value={todoText}
                                onChange={(e) => setTodoText(e.target.value)}
                                className="custom-input-field"
                                placeholder="Enter todo"
                            />
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="custom-input-field"
                                placeholder="Due date: dd/mm/yyyy"
                            />
                        </div>
                        <div className='custom-input-project-second-child'>
                            <button className="custom-add-button" onClick={handleAddTodo}>
                                Add
                            </button>
                            <button className="custom-cancel-button" onClick={toggleToDosHandler}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </li>
            )}
            <ul>
                {project.todos.map((todo) => (
                    <ToDos key={todo.id} todo={todo} handleDeleteToDo={deleteToDo}/>
                ))}
            </ul>
        </>
    );
};

export default ToDoInput;
