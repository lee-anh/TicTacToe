import React, {useState} from 'react'; 

import Box from "./Box.js"

// have to be able to add buttons and then have those buttons
// be able to control
// have to store the color
// integrate the 2 components 

const white = "white"

// now to incorporate the color picker 
// make a button for each one
// when pressed it should send a
// stick timer and hello kitty on the page. settings to choose between jinbesan and hello kitty 

// how to make multiple buttons 
// all changing one background 

const colorValues = [pink, orange, yellow, green, blue, purple, white]; 
const colorNames = ["pink", "orange", "yellow", "green", "blue", "purple", "reset"]; 

export function Grid(props){
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