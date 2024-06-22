import { useState } from 'react';

export default function NewTodoForm({ addTask }) {
  const [task, setTask] = useState('');

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === '') return; // Do not add empty tasks
    addTask({ text: task, id: Date.now() });
    setTask(''); // Clear the input field
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
