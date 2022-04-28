import React from "react";


import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 

export default function TasksList({allTasks, handleDelete, handleOnClickForMom}){



    // for handle delete you must make this harder to delete 
    return(
        <div>
            <Row xs="auto">
            {allTasks.map(({title, taskColor, id}) => (
                    <Col>
                    <div key={id} style={{background: taskColor, position: "relative", textAlign: "center", minWidth: 300, minHeight: 150}} onClick={()=>handleOnClickForMom(taskColor, title)}>
                        <h2>{title}</h2>
                        <button className="xButton" onClick={() => handleDelete(id)}>X</button>
                    </div>
                    </Col>
                
            ))}
            </Row>
        </div>
    ); 
}

/*

<div>
            <Row>
            {allTasks.map(({title, taskColor, id}) => (
                <div key={id} style={{minWidth: 300}}>
                    <div style={{background: taskColor, position: "relative", textAlign: "center"}} onClick={()=>handleOnClickForMom(taskColor, title)}>
                        <h2>{title}</h2>
                        <button className="xButton" onClick={() => handleDelete(id)}>X</button>
                    </div>
                </div>
            ))}
            </Row>
        </div>

*/