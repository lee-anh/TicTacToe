import React from "react";

export default function TasksList({allTasks, handleDelete, handleOnClickForMom}){

    // on click we need to aquire the tasks's color - what level should that be at????? 
    // need to have a parent component? and then pass it to the parent component 
    // which will pass it down to the Box 


    // for handle delete you must make this harder to delete 
    return(
        <ul>
            {allTasks.map(({title, taskColor, id}) => (
                <li key={id}>
                    <div style={{background: taskColor}} onClick={()=>handleOnClickForMom(taskColor)}>
                        <h2>{title}</h2>
                      <h2>taskColor: {taskColor}</h2>
                        <button className="xButton" onClick={() => handleDelete(id)}>X</button>
                    </div>
                </li>
            ))}
        </ul>
    ); 
}