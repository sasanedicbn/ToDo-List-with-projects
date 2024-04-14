import { useState } from "react";
import SideBar from "./SideBar";
import Projects from "./Projects";
import { Project, Todo } from "./TypeScript";

const Main = () => {
    const [projects, setProjects] = useState<Project>([]);
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null); 


    function addProject(name:string) {
        const newProject = {
            id: Math.random().toString(36).substring(7),
            name: name,
            todos: [],
        };
        setProjects(prevProjects => [...prevProjects, newProject]);
    }
    function addToDo(todo: Todo, projectId:string) {
    setProjects(prevProjects => {
        return prevProjects.map(project => {
            if (project.id === projectId) {

                return {
                    ...project,
                    todos: [...project.todos, todo]
                };
            }
           
            return project;
        });
    });
}
    function deleteProject(id:string) {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
    }

    function showToDo(id:string) {
        setActiveProjectId(id); 
    }
    
    function deleteToDo(id:string) {
        setProjects(prevProjects => {
            return prevProjects.map(project => {
                if(project.id === activeProjectId){
                    return{
                        ...project,
                        todos: project.todos.filter(todo => todo.id !== id) 
                    }
                }
                return project; 
            })
        })
    }

    // function editToDo(id) {
    //     setProjects(prevProjects => {
    //         return prevProjects.map(project => {

    //         }) 
    // })
    // }
    
    console.log(projects)

    return(
        <div className="container-main">
            <SideBar projects={projects} addProject={addProject} deleteProject={deleteProject} showToDo={showToDo}/>
            <Projects projects={projects} activeProjectId={activeProjectId} addToDo={addToDo} deleteToDo={deleteToDo} /> 
        </div>
    );
}

export default Main;
