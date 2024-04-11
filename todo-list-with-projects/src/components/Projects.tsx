import { useState } from "react";
import ToDos from "./ToDos";

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
                            <li  key={project.id} className="input-project-item">
                            <div className="input-project-container">
                              <input
                                type="text"
                                className="input-field"
                                placeholder="Enter todo"
                                // onChange={e => setProjectName(e.target.value)}
                              />
                              <button className="add-button" >
                                Add
                              </button>
                              <button  className="cancel-button">
                                Cancel
                              </button>
                            </div>         
                                <ul>
                                    {project.todos.map(todo => (
                                        <ToDos key={todo.id} todo={todo}/>
                                    ))}
                                </ul>
                             </li>

                        )
                    ))}
            </ul>
        </div>
    );
};

export default Projects;
