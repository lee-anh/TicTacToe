import React from "react"; 
import {ColorSlider} from "./ColorSlider"

export default function NewTask({newTask, handleChange, handleColorChangey, handleSubmit}){
    return(
        <div>
        
        <form onSubmit={handleSubmit}>
            <input
                name = "title"
                placeholder="New task"
                value={newTask.title || ""}
                onChange={handleChange}

            />

            {!newTask.title ? null : (
                <> 
                <button type="submit">Add Task</button>
                <ColorSlider name="taskColor" value={newTask.taskColor || ""} onChange={handleColorChangey}/>
                
                </>
            )}
        
        
        </form>
        

        </div>
        
    )
}


//
/*
// old input for color 
<input 
                name = "taskColor"
                placeholder="color"
                value={newTask.taskColor || ""}
                onChange={handleChange}
                />
*/