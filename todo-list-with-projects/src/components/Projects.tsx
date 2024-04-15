import { useState } from "react";
import ToDoInput from "./ToDoInput";
import { ProjectsProps } from "./TypeScript";

const Projects = ({ projects, activeProjectId, addToDo, deleteToDo,setProjects}:ProjectsProps) => {
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
                    .map(project => (
                           <ToDoInput setShowToDos={setShowToDos} activeProjectId={activeProjectId} setProjects={setProjects} deleteToDo={deleteToDo} project={project} projectId={project.id} addToDo={addToDo} toggleToDosHandler={toggleToDosHandler} showToDos={showToDos}/> 
                    ))}
            </ul>
        </div>
    );
};

export default Projects;
