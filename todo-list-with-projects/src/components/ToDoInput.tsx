import { useState } from 'react';
import ToDos from './ToDos';
import { ToDoInputProps,  } from './TypeScript';

const ToDoInput = ({ project, projectId, addToDo, showToDos, toggleToDosHandler, deleteToDo, activeProjectId, setShowToDos}:ToDoInputProps) => {
    const [todoText, setTodoText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    console.log(project.todos)
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
        setShowToDos(false)
    };
    // const activeProject = projects.map((project) => project.id === activeProjectId ? <todo/> : null)
    // const handleEditTodo = () => {
     
    // }
    return (
        <>
            {showToDos && project.id === activeProjectId && (
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
                            {isEditing ? (
                                <button className="custom-add-button">
                                    Save
                                </button>
                            ) : (
                                <button className="custom-add-button" onClick={handleAddTodo}>
                                    Add
                                </button>
                            )}
                            <button className="custom-cancel-button" onClick={toggleToDosHandler}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </li>
            )} 
            <ul>
                {project.todos.map((todo) => (
                    project.id === activeProjectId ? <ToDos key={todo.id} todo={todo} handleDeleteToDo={deleteToDo}/> : null
                ))}
            </ul>
        </>
    );
};

export default ToDoInput;
