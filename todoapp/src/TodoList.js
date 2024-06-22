export default function TodoList({ tasks, deleteTask, toggleTaskCompleted }) {
    return (
      <>
        <h1 className="header">Todo List</h1>
        {tasks.length === 0 ? (
          <p className="no-todos">No Todos</p>
        ) : (
          <ul className="list">
            {tasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompleted(task.id)}
                  />
                  {task.text}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </label>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
  