import React, {useState} from 'react';


import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Box from "./Box.js"
import TaskCreator from './TaskCreator.js';
import GoodAlert from './GoodAlert.js'
import TimePicker from './TimePicker.js';

//let boxArray = []; // not the right scope 
export default function Mother({initialList, handleAddListToGrandList, handleAddTask, handleRemoveTask}){

    const [timeBlocks, setTimeBlocks] = useState(12); 
    const [currentBrushColor, setCurrentBrushColor] = useState("pink"); 
    const [currentTaskName, setCurrentTaskName] = useState("");
    const [colorArray, setColorArray] = useState(Array(timeBlocks).fill({boxColor: "white", boxName: ""})); 
    

    const computeTimeBlocks = (starty, endy) => {
        let num = endy-starty; 
        if(num > 0){
            setTimeBlocks(endy-starty);
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

    // getting redefined sometime? 
    // circle 
    let boxArray = []; 
    for(let i = 0; i < timeBlocks; i++){
        boxArray.push(<Box data={currentBrushColor} title={currentTaskName} id={i} handleBoxChange={handleBoxChange}/>); 
       // boxArray.push(<Box data={colorArray[i].boxColor} title={colorArray[i].boxName} id={i} handleBoxChange={handleBoxChange}/>); 
    }
    
    
    const handleOnClickForMom = (color, taskName) => {
        setCurrentBrushColor(color); 
        setCurrentTaskName(taskName); 

    }

    const handleSaveClick = () => {
        handleAddListToGrandList(colorArray); 
        // reset the arrays 
        setColorArray(Array(timeBlocks).fill({boxColor: "white", boxName: ""})); // this is ok 
    
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
            <div class="d-flex flex-column" style={{width: 300}}>
                {boxArray}
                <GoodAlert handleSaveClick={handleSaveClick}/>
            </div>
            </Col>
            
            
            </Row>
        </div>
    )

}

