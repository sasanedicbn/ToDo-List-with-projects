const ToDos = () => {
    return(
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
    )
}
export default ToDos;