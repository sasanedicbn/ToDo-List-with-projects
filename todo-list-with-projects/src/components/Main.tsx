import { useState } from "react";
import SideBar from "./SideBar";
import ToDo from "./ToDo";

// const [project, setproject] =useState ([{id:, todos[]}])
// za novi projekat
const Main = () => {
    const [project, setProject] = useState([])
   
    function addProject (todo) {
        const newProject = {
            id: Math.random().toString(36).substring(7),
            todos: [],
        }
        setProject(prevProjects => [...prevProjects, newProject ])
    }
    return(
    <div className="container-main">
        <SideBar addProject={addProject}/>
        <ToDo/>
    </div>
    )
}
export default Main;
