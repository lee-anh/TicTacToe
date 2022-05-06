import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Analytics(props) {
    // you could have old tasks I guess? 

    // but to simplify for nowt this is what we are going to do: 
    // the task j
    // collect all of the counts 
    let nums = [];
    let big = [];

    // when there's room I want to have them be bigger and then get smaller as the screen size gets bigger 
    // which is the contrary of what we usually have 

    for (let i = 0; i < props.allTasks.length; i++) {
        let counter = 0;
        let mini = [];
        // for each of the days 
        for (let j = 0; j < props.grandList.length; j++) {
            for (let k = 0; k < props.grandList[j].length; k++) {
                console.log("props.allTasks[i].title " + props.allTasks[i].title + " props.grandList[j][k].boxName " + props.grandList[j][k].boxName + " props.allTasks[i].taskColor " + props.allTasks[i].taskColor + " props.grandList[j][k].boxColor " + props.grandList[j][k].boxColor);
                if (props.allTasks[i].title === props.grandList[j][k].boxName && props.allTasks[i].taskColor === props.grandList[j][k].boxColor) {
                    let color = props.allTasks[i].taskColor;
                    counter++;
                    mini.push(<Col><div style={{ backgroundColor: color, minWidth: 40, minHeight: 40, maxWidth: 40, maxHeight: 40, marginRight: -10, marginLeft: -10, marginTop: 5}}></div></Col>);
                }
                
            }
        }
        // I could either push a counter or I could could push the actual div elements 
        nums.push(counter);
        big.push(mini);

    }

    let toDisplay = [];
    for (let i = 0; i < props.allTasks.length; i++) {
        toDisplay.push(
            <Row xs="auto">
                <Col><div style={{margin: 12, minWidth: 100, maxWidth: 100}}>{props.allTasks[i].title}</div></Col>
                {big[i]}
                <Col><div style={{margin: 12}}>{nums[i]}</div></Col>
            </Row>); // Idk if this going to work 
    }


    // make use of the horizontal space 
    return (
        <div style={{margin: 10}}>
            <h1>Analytics</h1>
            <hr/>
            <h3>All-time</h3>
            {toDisplay}
            <hr/>
        </div>

    );
}