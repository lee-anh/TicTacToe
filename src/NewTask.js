import React from "react"; 
import {ColorSlider} from "./ColorSlider"

export default function NewTask({newTask, handleChange, handleSubmit}){
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
                <ColorSlider/>
                </>
                
            )}
            
        
        </form>
        

        </div>
        
    )
}