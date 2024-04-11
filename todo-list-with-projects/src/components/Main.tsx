import { useState } from "react";
import SideBar from "./SideBar";
import ToDo from "./ToDo";



const Main = () => {
    const [projects, setProject] = useState([])
    console.log(projects)
   
    function addProject (name) {
        const newProject = {
            id: Math.random().toString(36).substring(7),
            name: name,
            todos: [],
        }
        setProject(prevProjects => [...prevProjects, newProject ])
    }
    function deleteProject(id) {
        setProject(prevProjects => prevProjects.filter(project => project.id !== id));
      }
    return(
    <div className="container-main">
        <SideBar projects={projects} addProject={addProject} deleteProject={deleteProject}/>
        <ToDo projects={projects}/>
    </div>
    )
}
export default Main;
