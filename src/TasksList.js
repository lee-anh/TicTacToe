import React from "react";

export default function TasksList({allTasks, handleDelete}){
    // how to store all of the task colors? 
    return(
        <ul>
            {allTasks.map(({title, description, id}) => (
                <li key={id}>
                    <div>
                        <h2>{title}</h2>
                        <button className="xButton" onClick={() => handleDelete(id)}>X</button>
                    </div>
                    {!description ? null: <p>{description}</p>}
                </li>
            ))}
        </ul>
    ); 
}