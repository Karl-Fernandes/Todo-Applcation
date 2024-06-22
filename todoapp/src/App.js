import { useState, useEffect } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks))
  }, [tasks])


  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Handler for deleting a task
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <NewTodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={handleDelete} />
    </div>
  );
}
