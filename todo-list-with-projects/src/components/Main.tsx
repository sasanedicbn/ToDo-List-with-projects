import { useState } from "react";
import SideBar from "./SideBar";
import ToDo from "./ToDo";

// const [project, setproject] =useState ([{id:, todos[]}])
// za novi projekat
const Main = () => {
    const [projects, setProject] = useState([])
   
    function addProject (name) {
        const newProject = {
            id: Math.random().toString(36).substring(7),
            name: name,
            todos: [],

        }
        setProject(prevProjects => [...prevProjects, newProject ])
    }
    return(
    <div className="container-main">
        <SideBar projects={projects} addProject={addProject}/>
        <ToDo projects={projects}/>
    </div>
    )
}
export default Main;
