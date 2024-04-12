import { useState } from "react";
import SideBar from "./SideBar";
import Projects from "./Projects";

const Main = () => {
    const [projects, setProjects] = useState([]);
    const [activeProjectId, setActiveProjectId] = useState(null); 

    function addProject(name) {
        const newProject = {
            id: Math.random().toString(36).substring(7),
            name: name,
            todos: [],
        };
        setProjects(prevProjects => [...prevProjects, newProject]);
    }
    function addToDo(todo, projectId) {
        setProjects(prevProjects => {
            return prevProjects.map(project => {
                if (project.id === projectId) {
                    // Ako je ovo ciljani projekat, ažurirajte listu todos
                    return {
                        ...project,
                        todos: [...project.todos, todo]
                    };
                }
                // Inače, vratite projekat nepromenjen
                return project;
            });
        });
    }
    
    

    function deleteProject(id) {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
    }

    function showToDo(id) {
        setActiveProjectId(id); 
    }
    console.log(projects)

    return(
        <div className="container-main">
            <SideBar projects={projects} addProject={addProject} deleteProject={deleteProject} showToDo={showToDo}/>
            <Projects projects={projects} activeProjectId={activeProjectId} addToDo={addToDo} /> 
        </div>
    );
}

export default Main;
