import React, {useState} from 'react'; 

export default function Box(props){
    // try a staging and set 
    const [currColor, setCurrColor] = useState("white"); 
    const [taskName, setCurrTaskName] = useState("Time Block"); 
    
    // try to figure out how to handle tasky
    const handleClick = (colory, tasky) =>{
        setCurrColor(colory); 
        setCurrTaskName(tasky); 
        props.handleBoxChange(props.id, colory, tasky); // is this enough? 
    }

    return(
        <button class="btn btn-light" style={{backgroundColor:currColor}} onClick={() => handleClick(props.data, props.title)}>{taskName}</button>
    )
}