import React, {useState} from 'react';
import Box from "./Box.js"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default function TimeArray(props){
    const [currentCount, setCurrentCount] = useState(0); 
    const [brush, setBrush] = useState(props.currentBrushColor);
    const [taskName, setTaskName] = useState(props.currentTaskName); 
    if(currentCount != props.refresh){
        setCurrentCount(props.refresh); 
        //setBrush("white");
        //setTaskName(""); 
        console.log("currentCount and refresh mismatch"); 

    }
    

    const lookUp = (timeNum) =>{
        let toReturn = ""; 
        if(timeNum === 0){
            toReturn = "12 am"; 
        } else if (timeNum > 0 && timeNum < 12 ){
            toReturn = "" + timeNum + " am"; 
        } else if (timeNum === 12){
            toReturn = "12 pm"; 
        } else if (timeNum === 13){
            toReturn = "1 pm"; 
        } else if (timeNum === 14){
            toReturn = "2 pm"; 
        } else if (timeNum === 15){
            toReturn = "3 pm"; 
        } else if (timeNum === 16){
            toReturn = "4 pm"; 
        } else if (timeNum === 17){
            toReturn = "5 pm"; 
        } else if (timeNum === 18){
            toReturn = "6 pm"; 
        } else if (timeNum === 19){
            toReturn = "7 pm"; 
        } else if (timeNum === 20){
            toReturn = "8 pm"; 
        } else if (timeNum === 21){
            toReturn = "9 pm"; 
        } else if (timeNum === 22){
            toReturn = "10 pm"; 
        } else if (timeNum === 23){
            toReturn = "11 pm"; 
        }
        return toReturn; 
    }

    let toDisplay = []; 
    let numBlocks = props.endy - props.starty; 
    if(numBlocks > 0){
        let y = 0; 
        for(let i = props.starty; i < props.endy; i++){
            toDisplay.push(
                // I don't know how to reset all of the boxes 
                <div>
                    <Row>
                        <Col><div className="d-flex flex-column" style={{width: 300}}><Box data={props.currentBrushColor} title={props.currentTaskName} id={y} handleBoxChange={props.handleBoxChange}/></div></Col>
                        <Col><div style={{textAlign: "left"}}>{lookUp(i)}</div></Col>
                    </Row>
                    
                </div>
                
            ); 
            y++; 
        }
    }

    return(
        <div>
            {toDisplay}
        </div>
    )
    
}