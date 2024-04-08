import { useState } from "react";
import InputProject from "./InputProject";

const SideBar = ({addNewProject}) => {
    const [showInput, setShowInput] = useState(false)
    function showInputhandler(){
        setShowInput(!showInput)
    }
    return(
        <div className="sidebar">
            <button className="sidebar-btn" onClick={showInputhandler}>+ New Project</button>
            <p className="sidebar-text">Projects </p>
            <ul>
                {showInput && <InputProject removeInputhandler={showInputhandler}/>}
            </ul>
        </div>
    )
}
export default SideBar;