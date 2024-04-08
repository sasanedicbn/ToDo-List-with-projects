const InputProject = ({removeInputhandler}) => {
    return(
        <li>
          <div>
            <input type='text'/>
            <button>Add</button>
            <button onClick={removeInputhandler}>Cancel</button>
            </div>
        </li>
    )
}
export default InputProject;