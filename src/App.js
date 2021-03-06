import './App.css';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import React, {useState} from "react"; 
import {Test} from './Test.js'
//import Grandma from "./Grandma";
//import {Palette} from './Palette.js'
//import {ColorPalette} from './ColorPalette.js'


import {Clock} from './Clock.js'
import Header from './Header.js'

import Aunt from './Aunt.js'
import Cousin from './Cousin.js'
import Analytics from './Analytics.js'


// Can I somehow Split the Grandma and have her Mom and Aunt components be on different pages 

function App() {
  const [grandList, setGrandList] = useState([]); // list of all data
  const [grandTaskList, setGrandTaskList] = useState([]); // list of tasks 

  // times 
  const [initialStartTime, setInitialStartTime] = useState(8);
  const [initialEndTime, setInitialEndTime] = useState(20); 

  const handleAddListToGrandList = (listToAdd) => {
    setGrandList(grandList => [...grandList, listToAdd]); 
  }; 

  const handleAddToGrandTaskList = (elementToAdd) => {
    setGrandTaskList(grandTaskList => [elementToAdd, ...grandTaskList]); 
  }

  const handleDeleteFromGrandTaskList = (taskIdToRemove) => {
    setGrandTaskList((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
      )); 
  }
  
  const handleChangeTime = (start, end) => {
    setInitialStartTime(start);
    setInitialEndTime(end); 
    console.log("start "  + initialStartTime + " end " + initialEndTime); 
  }

  return (
    <div >
        <BrowserRouter>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Test myName="Claire" favorite="1"/>}/>
            <Route path="dashboard" element={<Cousin initialStartTime={initialStartTime} initialEndTime={initialEndTime} handleChangeTime={handleChangeTime} initialList={grandTaskList} handleAddListToGrandList={handleAddListToGrandList} handleAddTask={handleAddToGrandTaskList} handleRemoveTask={handleDeleteFromGrandTaskList}/>}/>
            <Route path="history" element={<Aunt listOfList={grandList}/>}/>
            <Route path="analytics" element={<Analytics allTasks={grandTaskList} grandList={grandList} />}/>
          </Routes>
        </div>
  
        </BrowserRouter>

      
    </div>
  );
}

/*
old version


        <h1>???Time Tracker App???</h1>
      
        <div className="d-flex flex-row">
          <div className="p-2"><Test myName="Claire" favorite="1"/></div>
          <div className ="p-2"><Clock/></div>
        </div>
        <p>
          Create Tasks and track how you are spending your time!
        </p>
        <p>
          Select the task you want to track and then click the time block you want to color in :) 
        </p>
        <Grandma />



*/
export default App;
