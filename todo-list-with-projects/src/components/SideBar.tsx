import React, { useState } from "react";

const SideBar = ({ projects, addProject, deleteProject }) => {
  const [showInput, setShowInput] = useState(false);
  const [projectName, setProjectName] = useState("");

  function showInputhandler() {
    setShowInput(!showInput);
  }

  function addNewProject() {
    if (projectName.trim() !== "") {
      addProject({ name: projectName });
      setProjectName(""); // Resetovanje stanja naziva projekta nakon dodavanja
      setShowInput(false); // Sakrivanje input polja nakon dodavanja
    }
  }

  return (
    <div className="sidebar">
      <button className="sidebar-btn" onClick={showInputhandler}>
        + New Project
      </button>
      <p className="sidebar-text">Projects</p>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <span onClick={() => console.log(project)}>{project.name}</span>
            <button onClick={() => deleteProject(project.id)}>Delete</button>
          </li>
        ))}
        {showInput && (
          <li className="input-project-item">
            <div className="input-project-container">
              <input
                type="text"
                className="input-field"
                placeholder="Enter project name"
                value={projectName}
                onChange={e => setProjectName(e.target.value)}
              />
              <button className="add-button" onClick={addNewProject}>
                Add
              </button>
              <button onClick={showInputhandler} className="cancel-button">
                Cancel
              </button>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;