import React, {useState} from 'react'; 

export default function Box(props){
    // try a staging and set 
    // oh I see what the problem is. These need to be changed to props so that they rerender 
    const [currColor, setCurrColor] = useState("white"); 
    const [taskName, setCurrTaskName] = useState("");
 

    // I feel like I need to make more variables 
    //const [ready, setReady] = useState(true); 

    let subAck = props.ack; 
    // try to figure out how to handle tasky
    const handleClick = (colory, tasky, acky) =>{
        setCurrColor(colory); // we need to reset these.. how can we not cause an infinte loop
        setCurrTaskName(tasky); 
        //setReady("true"); 

        if(acky === true){
            setCurrColor("purple"); 
        }


        props.handleBoxChange(props.id, colory, tasky); 
    }

    let bGround = "";
    
    if(subAck === true){
        bGround = "purple" // too many rerenders generated if we call setCurrColor here 
        console.log("Box: ack " + props.ack + " bGround: " + bGround); 
        //props.handleAck(); 
        //setCurrColor("purple"); 
        // subAck = false; 

    } else {
        bGround = currColor; 
        console.log("Box: ack " + props.ack + " bGround: " + bGround); 
    }


    return( 
        <button class="btn btn-light" style={{backgroundColor:bGround, height: 30, borderColor: "lightgray", margin: 1}} onClick={() => handleClick(props.data, props.title, props.ack)}>{taskName}</button>
    )
}