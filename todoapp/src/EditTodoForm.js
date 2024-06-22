import { useState } from 'react';

export default function EditTodoForm({ editTask, task }) {
  // State to manage the text of the task being edited
  const [taskText, setTaskText] = useState(task.text);

  // Handler for form submission to save the edited task
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() === '') return; // Prevent saving empty tasks
    // Call the parent function to save the updated task
    editTask({ ...task, text: taskText });
  };

  return (
    <form className="edit-item-form" onSubmit={handleSubmit}>
      <label>Edit Item</label>
      <input 
        type="text" 
        id="item" 
        placeholder="Update Task" 
        value={taskText}                                     
        onChange={(e) => setTaskText(e.target.value)} 
      />
      <button className="btn" type="submit">Update Task</button>
    </form>
  );
}
