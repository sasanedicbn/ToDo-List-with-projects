import { useState } from 'react';

const ToDoInput = ({ project, removeToDoInput }) => {
    const [todoText, setTodoText] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleAddTodo = () => {
        // Implement your logic to add todo here
        // You can use todoText and dueDate states
    };

    return (
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
                <button className="custom-cancel-button" onClick={removeToDoInput}>
                    Cancel
                </button>
                </div>
            </div>
            <ul>
                {project.todos.map((todo) => (
                    <ToDos key={todo.id} todo={todo} />
                ))}
            </ul>
        </li>
    );
};

export default ToDoInput;

