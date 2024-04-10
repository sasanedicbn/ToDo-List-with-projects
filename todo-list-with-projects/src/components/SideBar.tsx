import { useState } from "react";

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
                {showInput &&  <li className="input-project-item">
                                <div className="input-project-container"> 
                                 <input type='text' className="input-field" />
                                 <button className="add-button">Add</button> 
                                 <button onClick={showInputhandler} className="cancel-button">Cancel</button> 
                               </div>
                              </li>}
            </ul>
        </div>
    )
}
export default SideBar;