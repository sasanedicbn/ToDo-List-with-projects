
// const Project = ({
//     project,
//     handleAddTodo,
//     toggleToDosHandler,
//     showToDos,
//     todoText,
//     setTodoText,
//     dueDate,
//     setDueDate,
//     isEditing,
// }) => {
//     return (
//         <>
//             {showToDos && (
//                 <li key={project.id} className="custom-input-project-item">
//                     <div className="custom-input-project-container">
//                         <div className='custom-input-project-first-child'>
//                             <input
//                                 type="text"
//                                 value={todoText}
//                                 onChange={(e) => setTodoText(e.target.value)}
//                                 className="custom-input-field"
//                                 placeholder="Enter todo"
//                             />
//                             <input
//                                 type="date"
//                                 value={dueDate}
//                                 onChange={(e) => setDueDate(e.target.value)}
//                                 className="custom-input-field"
//                                 placeholder="Due date: dd/mm/yyyy"
//                             />
//                         </div>
//                         <div className='custom-input-project-second-child'>
//                             {isEditing ? (
//                                 <button className="custom-add-button">
//                                     Save
//                                 </button>
//                             ) : (
//                                 <button className="custom-add-button" onClick={handleAddTodo}>
//                                     Add
//                                 </button>
//                             )}
//                             <button className="custom-cancel-button" onClick={toggleToDosHandler}>
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </li>
//             )}
//         </>
//     );
// };

// export default Project;
