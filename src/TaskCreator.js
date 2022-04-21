import React, {useState} from "react"; 
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import "./index.css"


export default function TaskCreator({handleOnClickForMom}){
  const [newTask, setNewTask] = useState({}); 
  const [allTasks, setAllTasks] = useState([]); 
  
  // event handler for general changes to state 
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setNewTask((prev) => ({
      ...prev, 
      id: Date.now(),
      [name]: value}));
  }; 

  // event handler for changing the color 
  const handleColorChangey = (name, color) => {
    setNewTask((prev) => ({
      ...prev, 
      id: Date.now(),
      [name]: color }));
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
          handleOnClickForMom={handleOnClickForMom}
        
        />
      </main>
    );
  
}