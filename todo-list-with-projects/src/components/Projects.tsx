import { useState } from "react";
import ToDoInput from "./ToDoInput";

const Projects = ({ projects, activeProjectId, addToDo }) => {
    const [showToDos, setShowToDos] = useState(false);

    function toggleToDosHandler() {
        setShowToDos(!showToDos);
    }
    function showInput() {
        setShowToDos(true)
    }
    return (
        <div className="todo">
            <button className="todo-btn" onClick={showInput}>+ New todo</button>
            <p className="todo-text">Projects</p>
            <ul>
                {projects
                    .filter(project => project.id === activeProjectId)
                    .map(project => (
                           <ToDoInput project={project} projectId={project.id} addToDo={addToDo} toggleToDosHandler={toggleToDosHandler} showToDos={showToDos}/> 
                    ))}
            </ul>
        </div>
    );
};

export default Projects;
