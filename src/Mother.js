import React, {useState} from 'react';
import Box from "./Box.js"
import TaskCreator from './TaskCreator.js';

import GoodAlert from './GoodAlert.js'

//let boxArray = []; // not the right scope 
export default function Mother({handleAddListToGrandList}){
    const boxColor = "white"; 
    const boxName = "default title"; 

  
    const [currentBrushColor, setCurrentBrushColor] = useState("pink"); 
    const [currentTaskName, setCurrentTaskName] = useState("");
    const [colorArray, setColorArray] = useState(Array(12).fill({boxColor: "white", boxName: ""})); 
    const timeBlocks = 12; 

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
        setColorArray(Array(12).fill({boxColor: "white", boxName: ""})); // this is ok 
    



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
             <div class="d-flex flex-row">

            <TaskCreator handleOnClickForMom={handleOnClickForMom}/>
        
            <div class="d-flex flex-column" style={{width: "250px"}}>
                {boxArray}
                
                <GoodAlert handleSaveClick={handleSaveClick}/>
            </div>
            
            </div>
        </div>
    )

}


// old save:  <button class="btn btn-dark" style={{backgroundColor: 'cornflowerblue'}} onClick={()=>handleAddListToGrandList(colorArray)}>Save Day</button>
// another old save: <button class="btn btn-light" style={{backgroundColor: 'mistyrose'}} onClick={()=>handleSaveClick()}>Save Day</button>