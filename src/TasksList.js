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
                    <div className="box" key={id} style={{background: taskColor}} onClick={()=>handleOnClickForMom(taskColor, title)}>
                        <h3>{title}</h3>
                        <button className="xButton" onClick={() => handleDelete(id)}>X</button>
                    </div>
                    </Col>
            ))}
            </Row>
        </div>
    );
}

