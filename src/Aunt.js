import React, {useState} from 'react'; 
import { Dropdown } from 'bootstrap';


export default function Aunt(props){

    console.log("AUNT COMPONENT"); 
    // for each of the lists in list of lists, render a component 
    for(let i = 0; i < props.listOfList.length; i++){
        console.log(props.listOfList[i]); 
    }
    // great, we are receiving the right thing, now just 
    // intead of upsing a map, regular for loop is fine. 


    // now to work on formattings 
    // options: display in reverse order, display in chronological order
    // "Most Recent" and "Chronological"
    let rows = []; 
    for(let i = 0; i < props.listOfList.length; i++){
        let subRows = []; 
        for(let j = 0; j < props.listOfList[i].length; j++){
            subRows.push(<div style={{backgroundColor: props.listOfList[i][j].boxColor}}><p>{props.listOfList[i][j].boxName}</p></div>); 
        }
        if(i %4 === 0){
            rows.push(<div class="w-100"></div>); 
        }
        rows.push(<div className ="col-3">
     
            <h3>Day {i+1}</h3>
            {subRows}
            </div>); 
        
    }

    return(
    
        <div>
            <h2>Hi I'm Auntie</h2>
            
            
            <div className="container">
                <div  className="row">
                {rows}
                </div>
            </div>
        </div>
    ); 
    
}

/*
<div>
{
    listOfList.map((list, index)=>{
        return(
            <div key={index}><p>Day {index}</p>
            {
                listOfList.list.map((element, i) =>{
                    return(
                        <p>{element}</p>
                    )
                })
            }
            </div>
        )
    } )

}
</div>

*/