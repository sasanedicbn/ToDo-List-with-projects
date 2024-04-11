const Projects = ({ projects, activeProjectId }) => {
    return (
        <div className="todo">
            <button className="todo-btn">+ New todo</button>
            <p className="todo-text">Projects</p>
            <ul>
                {projects
                    .filter(project => project.id === activeProjectId)
                    .map(project => (
                        <li key={project.id}>
                            <h3>{project.name}</h3>
                            <ul>
                                {project.todos.map(todo => (
                                    <li key={todo.id}>{todo.name}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Projects;
