import React, {useState} from 'react'; 

export default function Box(props){
    // try a staging and  set 
    const [currColor, setCurrColor] = useState("white"); 

    const handleClick = (colory) =>{
        setCurrColor(colory); 
    }

    return(
        <button class="btn btn-light" style={{backgroundColor:currColor}} onClick={() => handleClick(props.data)}>Time Block</button>
    )
}