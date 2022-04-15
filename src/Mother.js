import React, {useState} from 'react';
import Box from "./Box.js"
import TaskCreator from './TaskCreator.js';

export default function Mother(){
    const [currentBrushColor, setCurrentBrushColor] = useState("pink");
    const [currentTaskName, setCurrentTaskName] = useState("Time Block");

    
    // I might have to be setting color and text but let's just
    // do them one by one 

    // first I need to send the color up 
    const handleOnClickForMom = (color, taskName) => {
        setCurrentBrushColor(color); 
        setCurrentTaskName(taskName); 
       // console.log("Current brush color: " + currentBrushColor); 
       // console.log("Current task name: " + taskName); 

    }
    

    return(
        <div>
             <div class="d-flex flex-row">

            <TaskCreator handleOnClickForMom={handleOnClickForMom}/>
        
            <div class="d-flex flex-column" style={{width: "250px"}}>
                {Array(12).fill(<Box data={currentBrushColor} title={currentTaskName}/>)}
            </div>
            </div>

          
        
        </div>
    )
    

}