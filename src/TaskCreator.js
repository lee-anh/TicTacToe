import React, {useState} from "react"; 
import NewTask from "./NewTask";
import TasksList from "./TasksList";
import ModalAlert from "./ModalAlert";

import "./index.css"


export default function TaskCreator({initialList, handleOnClickForMom, handleAddTasks, handleRemoveTask}){
  const [newTask, setNewTask] = useState({taskColor: "#c2ed64"}); 
  const [allTasks, setAllTasks] = useState(initialList); // got to pass this up!
  const [toDelete, setDelete] = useState(-1); 
  const [show, setShow] = useState(false); 

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
    setNewTask({taskColor: "#c2ed64"}); 
    handleAddTasks(newTask); 
  
  }

  /*
  const handleDelete = (taskIdToRemove) => {
    
    handleRemoveTask(taskIdToRemove)
    
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
      )); 
    
  }; 
  */

  const handleDelete = (taskIdToRemove) => {
    setDelete(taskIdToRemove); 
    console.log("taskIdToRemove: " + taskIdToRemove); 
    setShow(true); 
    console.log("show: " + show); 
  }

  const handleConfirmDelete = () => {
    console.log("toDelete: " + toDelete); 
    setShow(false);
    handleRemoveTask(toDelete); 
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== toDelete
      )); 


  }
  
  // currently the last action is getting lost 
  
  return (
    <div>
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
        <ModalAlert show = {show} handleConfirmDelete = {handleConfirmDelete} />  
        
      </div>
      
    );
  
}