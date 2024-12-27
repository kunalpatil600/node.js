// This code is a full-stack CRUD (Create, Read, Update, Delete) To-Do list application
//  using Node.js on the backend and React on the frontend. It uses Express and fs 
//  for file handling in Node.js and Axios for making HTTP requests in React.
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; 


  const Todo = () => {
  const [data, setdata] = useState([]);
  const [task, setTask] = useState(''); 
  const [edit, setEdit] = useState(null); 

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/todo');
      setdata(response.data.tasks);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (task.trim()) {
      if (edit) {
        
        try {
          await axios.put(`http://localhost:8080/todo/${editId}`, { task });
          setEdit(null); 
        } catch (err) {
          console.log(err);
        }
      } else {
        
        try {
          const newTask = { id: uuidv4(), task };
          await axios.post('http://localhost:8080/todo', newTask);
        } catch (err) {
          console.log(err);
        }
      }
      setTask('');
      getData(); 
    }
  };

  
  const handleEdit = (taskId, currentTask) => {
    setTask(currentTask); 
    setEdit(taskId); 
  };

  
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8080/todo/${taskId}`);
      getData(); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todo-container container">
      <h1 className="my-3">To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)} 
            name="task"
            className="form-control todo-input"
            placeholder="Add a new task"
          />
          <button type="submit" className="">
            {edit ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </form>

      <ul className="list-group todo-list">
        {data.map((el) => (
          <li key={el.id} className="list-group-item d-flex justify-content-between align-items-center todo-item">
            <div>
             
              <span className="task-text">{el.task}</span>
          </div>
            <div className="todo-buttons">
              <button
                className=" me-2 " onClick={() => handleEdit(el.id, el.task)}  >
                Edit
              </button>
              <button
                className=" "
                onClick={() => handleDelete(el.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
 