import React, {useState} from 'react';


import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import TaskCreator from './TaskCreator.js';
import GoodAlert from './GoodAlert.js'
import TimePicker from './TimePicker.js';
import TimeArray from './TimeArray.js';


export default function Mother({initialList, handleAddListToGrandList, handleAddTask, handleRemoveTask}){

    const [timeBlocks, setTimeBlocks] = useState(12); 
    const [currentBrushColor, setCurrentBrushColor] = useState("pink"); 
    const [currentTaskName, setCurrentTaskName] = useState("");
    const [colorArray, setColorArray] = useState(Array(timeBlocks).fill({boxColor: "white", boxName: ""})); 
    const [startTime, setStartTime] = useState(8); 
    const [endTime, setEndTime] = useState(20); 
    const [currColor, setCurrColor] = useState("white"); 
    const [taskName, setCurrTaskName] = useState(""); 

    let refreshCounter = 0; 

    const computeTimeBlocks = (starty, endy) => {
        let num = endy-starty; 
        if(num > 0){
            setTimeBlocks(endy-starty);
            setStartTime(starty);
            setEndTime(endy); 
        }
    }; 
    // maybe have another function to reset the Box Array?
    const handleBoxChange = (id, color, taskName) => {
        // next handle the taskName 
        
        setColorArray(
            // not setting things correctly here 
            colorArray.map((element, id2) => 
                id2 === id ? {...element, boxColor: color, boxName: taskName } : { ...element }
            )
        );  // I think I need to do something like this for the boxArray 
        // don't cause a circle 
    }

    const handleOnClickForMom = (color, taskName) => {
        setCurrentBrushColor(color); 
        setCurrentTaskName(taskName); 
    }

    const handleSaveClick = () => {
        handleAddListToGrandList(colorArray); 
        // reset the arrays 
        setColorArray(Array(timeBlocks).fill({boxColor: "white", boxName: ""})); // this is ok 
        refreshCounter++; 
        // need to redraw the box array somehow 
        /*
        let newBoxArray = []; 
        for(let i = 0; i < timeBlocks; i++){
            newBoxArray.push(<Box data={currentBrushColor} title={currentTaskName} id={i} handleBoxChange={handleBoxChange}/>); 
        }

        boxArray = newBoxArray; 
        */
   

    }
    
    return(
        <div>
            <Row>
            <Col>
            <TaskCreator initialList={initialList} handleOnClickForMom={handleOnClickForMom} handleAddTasks={handleAddTask} handleRemoveTask={handleRemoveTask}/>
            </Col>
            <Col>
            <hr />
            
            <TimePicker computeTimeBlocks={computeTimeBlocks}/>
            <hr />
            <div >
                <TimeArray refresh={refreshCounter} starty={startTime} endy={endTime} currentBrushColor={currentBrushColor} currentTaskName={currentTaskName} handleBoxChange={handleBoxChange}/>
                <GoodAlert handleSaveClick={handleSaveClick}/>
            </div>
            </Col>
            
            
            </Row>
        </div>
    )

}

