import React, {useState} from 'react'; 
import { Button } from 'bootstrap';
import Box from "./Box.js"


const pink = "#ffdbef"; 
const orange = "#ffca61";
const yellow = "#ffff9c"; 
const green = "#c4ff91"; 
const blue = "#dbf8ff";
const purple = "#f1dbff"; 
const white = "white"
// make a button for each one
// when pressed it should send a
// stick timer and hello kitty on the page. settings to choose between jinbesan and hello kitty 

// how to make multiple buttons 
// all changing one background 

const colorValues = [pink, orange, yellow, green, blue, purple, white]; 
const colorNames = ["pink", "orange", "yellow", "green", "blue", "purple", "reset"]; 

export function ColorPalette(){
    const[color, setColor] = useState(pink); 
    const[secondColor, setSecondColor] = useState({data:"white"}); 
    const divStyle = {backgroundColor: color}; 
    const timeBlocks = Array(12).fill(<Box data={secondColor.data}/>); 
    
    const handleClick = (newColor) => {
        setColor(newColor);
        setSecondColor({data:newColor}); 

    }

    // now make the time blocks 

    return(
        <div style={divStyle}>
            {colorValues.map((colorValue, i)=>(
                <button class="btn btn-light" style={{background: colorValue}} onClick={() => handleClick(colorValue)} key={colorNames[i]}>{colorNames[i]}</button>
            ))}
       
            <div class="d-flex flex-column" style={{width: "250px"}}>
   
            {Array(12).fill(<Box data={secondColor.data}/>)}
           
            </div>
          
        
        </div>
    ); 



    /*
     return(
        <div style={divStyle}>
            {colorValues.map((colorValue, i)=>(
                <button class="btn btn-light" style={{background: colorValue}} onClick={() => setColor(colorValue)} key={colorNames[i]}>{colorNames[i]}</button>
            ))}
            <button style={divStyle}>TARGET</button>
        
        </div>
    ); 
    */
}



// next task is to change only when the button has been clicked 