const ToDos = ({ todo }) => {
  console.log(todo)

  return (
      <li className="custom-todo-item">
          <div className="custom-todo-details">
              <div className="custom-todo-title">
                  <p>Title:</p>
                  <p>{todo.title}</p>
              </div>
              <div className="custom-todo-due-date">
                  <p>Due date:</p>
                  <p>{todo.date}</p>
              </div>
              <div className="custom-todo-actions">
                  <button>Edit</button>
                  <button>Delete</button>
                 <input className="checkBox" type="checkBox" name="checkBox"/>
              </div>
             
          </div>
      </li>
  );
};

export default ToDos;

