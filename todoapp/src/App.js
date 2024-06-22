import { useState, useEffect } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import EditTodoForm from './EditTodoForm';

export default function App() {
  // State to store tasks
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    // Initialize state from local storage if available
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // State to track the task currently being edited
  const [editingTask, setEditingTask] = useState(null);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task to the list
  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  // Function to delete a task by ID
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to toggle the completed status of a task
  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  // Function to set the task for editing
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // Function to save the edited task
  const saveEdit = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    // Clear the editing state after saving
    setEditingTask(null);
  };

  return (
    <div className="container">
      {editingTask ? (
        <EditTodoForm editTask={saveEdit} task={editingTask} />
      ) : (
        <>
          <NewTodoForm addTask={addTask} />
          <TodoList 
            tasks={tasks} 
            deleteTask={handleDelete} 
            toggleTaskCompleted={toggleTaskCompleted} 
            editTask={handleEdit}
          />
        </>
      )}
    </div>
  );
}
