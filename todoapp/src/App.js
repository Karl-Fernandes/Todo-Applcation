import { useState, useEffect } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  // Handler for deleting a task
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Handler for toggling the completed state of a task
  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className="container">
      <NewTodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={handleDelete} toggleTaskCompleted={toggleTaskCompleted} />
    </div>
  );
}
