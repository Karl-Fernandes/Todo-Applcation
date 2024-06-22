export default function TodoList({ tasks, deleteTask, toggleTaskCompleted, editTask }) {
    return (
      <>
        <h1 className="header">Todo List</h1>
        {tasks.length === 0 ? (
          <p className="no-todos">No Todos</p>
        ) : (
          <ul className="list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompleted(task.id)}
                  />
                  {task.text}
                </label>
                <div className="button-group">
                  <button
                    className="btn btn-edit"
                    onClick={() => editTask(task)} // Trigger the edit mode with the selected task
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTask(task.id)} // Delete the task by ID
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
  