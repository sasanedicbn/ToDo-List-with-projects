import { useState } from "react";
import ToDoInput from "./ToDoInput";

const Projects = ({ projects, activeProjectId }) => {
    const [showToDos, setShowToDos] = useState(false);

    function toggleToDosHandler() {
        setShowToDos(!showToDos);
    }

    return (
        <div className="todo">
            <button className="todo-btn" onClick={toggleToDosHandler}>+ New todo</button>
            <p className="todo-text">Projects</p>
            <ul>
                {projects
                    .filter(project => project.id === activeProjectId)
                    .map(project => (
                        showToDos && (
                           <ToDoInput project={project} removeToDoInput={toggleToDosHandler}/>
                        )
                    ))}
            </ul>
        </div>
    );
};

export default Projects;
