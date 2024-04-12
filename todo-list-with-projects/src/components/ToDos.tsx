const ToDos = ({ todo }) => {
  return (
      <li className="input-project-item">
          <div className="todo-details">
              <div className="todo-title">
                  <p>Title:</p>
                  <p>{todo.title}</p>
              </div>
              <div className="todo-due-date">
                  <p>Due date:</p>
                  <p>{todo.dueDate}</p>
              </div>
              <div className="todo-actions">
                  <button>Edit</button>
                  <button>Delete</button>
              </div>
          </div>
      </li>
  );
};

export default ToDos;
