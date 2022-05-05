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
    const [ack, setAck]= useState(false); 

   // let refreshCounter = 0; 

 
     
     const handleBoxChange = (id, color, taskName) => {
        // next handle the taskName 
        /*
        setColorArray(
            // not setting things correctly here 
            colorArray.map((element, id2) => 
                id2 === id ? {...element, boxColor: color, boxName: taskName } : { ...element }
            )
        ); 
        */

        setColorArray(
            // not setting things correctly here 
            colorArray.map((element, id2) => 
                id2 === id ? {...element, boxColor: currentBrushColor, boxName: currentTaskName} : { ...element }
            )
        ); 
    }

    

    const computeTimeBlocks = (starty, endy) => {
        let num = endy-starty; 
        if(num > 0){
            setTimeBlocks(endy-starty);
            setStartTime(starty);
            setEndTime(endy); 
        }
    }; 
   

    const handleOnClickForMom = (color, taskName) => {
        setCurrentBrushColor(color); 
        setCurrentTaskName(taskName); 
    }

   // let timey = <TimeArray starty={startTime} endy={endTime} currentBrushColor={currentBrushColor} currentTaskName={currentTaskName} handleBoxChange={handleBoxChange}/>; 

    const handleSaveClick = () => {
        handleAddListToGrandList(colorArray); 
        // reset the arrays... this is not working... 
        setColorArray(Array(timeBlocks).fill({boxColor: "white", boxName: ""})); // this is ok 
        setAck(true); 
        //refreshCounter++; 
       // setCurrentBrushColor("white");
        // need to redraw the box array somehow 
       // timey =  <TimeArray starty={startTime} endy={endTime} currentBrushColor={currentBrushColor} currentTaskName={currentTaskName} handleBoxChange={handleBoxChange}/>; 
    }

    const handleAck = () => {
        setAck(false); 
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
                <TimeArray ack={ack} handleAck={handleAck} colorArr={colorArray} starty={startTime} endy={endTime} currentBrushColor={currentBrushColor} currentTaskName={currentTaskName} handleBoxChange={handleBoxChange}/>
                <GoodAlert handleSaveClick={handleSaveClick}/>
            </div>
            </Col>
            
            
            </Row>
        </div>
    )

}

