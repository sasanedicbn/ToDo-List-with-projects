import { useState } from "react";
import SideBar from "./SideBar";
import ToDo from "./ToDo";

// const [project, setproject] =useState ([{id:, todos[]}])
// za novi projekat
const Main = () => {
    const [project, setProject] = useState([{}])
    // function addNewProject{projectObject}{
    //     setProject(projectObject)
    // }
    return(
    <div className="container-main">
        <SideBar/>
        <ToDo/>
    </div>
    )
}
export default Main;
