import React, {useState} from 'react'; 

export default function Boxy(props){

    // ah what a bind. best hope is deleting these objects 
    const [currColor, setCurrColor] = useState("white");
    const [taskName, setTaskName] = useState(""); // I feel like these will be delayed now 
    const [dummie, setDummie] = useState(0);
    if(dummie != props.dummy){
        setDummie(props.dummy);
        setCurrColor("white"); // might cause infintie 
        setTaskName(""); 
    }
    
    const handleClick = (colory, tasky) =>
    {
        setCurrColor(colory);
        setTaskName(tasky); 
        props.handleBoxChange(props.id, colory, tasky); 
    }
 
    return(
        <button class="btn btn-light" style={{backgroundColor: currColor, height: 30, borderColor: "lightgray", margin: 1}} onClick={() => handleClick(props.colorToSet, props.taskNameToSet)}>{taskName}</button>
    )
}