import React, {useState} from 'react';
import Box from "./Box.js"
import TaskCreator from './TaskCreator.js';

export default function Mother({handleAddListToGrandList}){
    const boxColor = "white"; 
    const boxName = "default title"; 

    const [currentBrushColor, setCurrentBrushColor] = useState("pink"); 
    const [currentTaskName, setCurrentTaskName] = useState("Time Block");
    const [colorArray, setColorArray] = useState(Array(12).fill({boxColor: "white", boxName: "default name"})); 
    const timeBlocks = 12; 


    
    // maybe have another function to reset the Box Array?
    const handleBoxChange = (id, color, taskName) => {
        // next handle the taskName 
        setColorArray(
            // not setting things correctly here 
            colorArray.map((element, id2) => 
                id2 === id ? {...element, boxColor: color, boxName: taskName } : { ...element }
            )
        ); 
        
        // for debugging purposes 
        for(let i = 0; i < colorArray.length; i++){
            console.log(colorArray[i]); 
        }
        console.log("id: " + id); 
        
    }


    let boxArray = []; 
    for(let i = 0; i < timeBlocks; i++){
        boxArray.push(<Box data={currentBrushColor} title={currentTaskName} id={i} handleBoxChange={handleBoxChange}/>); 
    }
    



    //const boxArray = Array(12).fill(<Box data={currentBrushColor} id={1} title={currentTaskName} handleBoxChange={handleBoxChange}/>);
    //const colorArray = Array(12).fill([boxColor, boxName]); 

    // need to have a different array that has a mapping of each element to another
    // what level should this go on?




    
    const handleOnClickForMom = (color, taskName) => {
        setCurrentBrushColor(color); 
        setCurrentTaskName(taskName); 

    }
    
    const handleSaveClick = (colorArray) => {

        handleAddListToGrandList(colorArray); 
        // reset the arrays 
        setColorArray(Array(12).fill({boxColor: "white", boxName: "default name"})); 
        boxArray = []; 
        // buggy, not rerendering the box array for some reason 
        for(let i = 0; i < timeBlocks; i++){
            boxArray.push(<Box data={colorArray[i].boxColor} title={colorArray[i].boxName} id={i} handleBoxChange={handleBoxChange}/>); 
        }
    }

    return(
        <div>
             <div class="d-flex flex-row">

            <TaskCreator handleOnClickForMom={handleOnClickForMom}/>
        
            <div class="d-flex flex-column" style={{width: "250px"}}>
                {boxArray}
                <div><p></p></div>
                <button class="btn btn-light" style={{backgroundColor: 'mistyrose'}} onClick={()=>handleSaveClick(colorArray)}>Save Day</button>
            </div>
            
            </div>
        </div>
    )
    

}


// old save:  <button class="btn btn-dark" style={{backgroundColor: 'cornflowerblue'}} onClick={()=>handleAddListToGrandList(colorArray)}>Save Day</button>