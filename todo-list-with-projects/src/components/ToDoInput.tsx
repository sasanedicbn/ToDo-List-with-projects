import { useState } from 'react';
import ToDos from './ToDos';

const ToDoInput = ({ project, projectId, addToDo }) => {
    const [todoText, setTodoText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [showToDoInput, setShowToDoInput] = useState(true);

    const handleAddTodo = () => {
        const todoValue = {
            title: todoText,
            date: dueDate,
            checked: false,
        };
        addToDo(todoValue, projectId);
    };

    function cancelInputHandler() {
        setShowToDoInput(false);
    }

    return (
        <>
            {showToDoInput && (
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
                            <button className="custom-cancel-button" onClick={cancelInputHandler}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </li>
            )}
            <ul>
                {project.todos.map((todo) => (
                    <ToDos key={todo.id} todo={todo} />
                ))}
            </ul>
        </>
    );
};

export default ToDoInput;
