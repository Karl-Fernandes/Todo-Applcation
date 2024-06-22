import { useState } from 'react';

export default function NewTodoForm({ addTask }) {
  // State to manage the new task text
  const [task, setTask] = useState('');

  // Handler for form submission to add a new task
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === '') return; // Prevent adding empty tasks
    // Call the parent function to add the new task
    addTask({ text: task, id: Date.now() });
    setTask(''); // Clear the input field after adding
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <label>New Item</label>
      <input 
        type="text" 
        id="item" 
        placeholder="What is the task today?" 
        value={task}                                     
        onChange={(e) => setTask(e.target.value)} 
      />
      <button className="btn" type="submit">Add Task</button>
    </form> 
  );
}
