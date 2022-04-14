import React, {useState} from "react"; 
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import "./index.css"

export default function TaskCreator(){
  const [newTask, setNewTask] = useState({}); 
  const [allTasks, setAllTasks] = useState([]); 
  
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setNewTask((prev) => ({
      ...prev, 
      id: Date.now(),
      [name]: value}));
  }; 

  const handleColorChangey = (name, color) => {
    setNewTask((prev) => ({
      ...prev, 
      id: Date.now(),
      [name]: color }));
    
     console.log("Name: " + name + " Color: " + color); 
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]); 
    setNewTask({}); 
  }

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
      )); 
  }; 
  
  return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleColorChangey = {handleColorChangey}
          handleSubmit={handleSubmit}
          
        />
        <TasksList
          allTasks={allTasks}
          handleDelete={handleDelete}
        />
      </main>
    );
  
}