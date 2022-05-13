import React, {useState} from 'react'; 

import Dropdown from 'react-bootstrap/Dropdown'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"


export default function Aunt(props){
    const [order, setOrder] = useState("Oldest to Newest"); 
    const [display, setDisplay] = useState("Default"); 


    let rows = []; 
    let perCol = 6; 
    let perColCompact = 14; 

    if(order === "Oldest to Newest"){

        for(let i = 0; i < props.listOfList.length; i++){
            let subRows = []; 
            for(let j = 0; j < props.listOfList[i].length; j++){
           
                if(display === "Default"){

                    subRows.push(<div style={{backgroundColor: props.listOfList[i][j].boxColor, height: 30, margin: 5, padding: 2,width: ((window.innerWidth)/(perCol))}}><p>{props.listOfList[i][j].boxName}</p></div>); 
                } else {
                    
                    subRows.push(<div style={{backgroundColor: props.listOfList[i][j].boxColor, height: 30, margin: 5, width: ((window.innerWidth)/(perColCompact))}}><p></p></div>); 
                }
                
            }
           
            rows.push(<Col><div className="col" style={{float: "left", margin: 15, textAlign: "left"}}>

                <h4>{props.listOfList[i][0].date}</h4>
                {subRows} 
                </div></Col>); 

            
        }

    } else {
        // reverse order 
        for(let i = props.listOfList.length -1 ; i >=0; i--){
            let subRows = []; 
            for(let j = 0; j < props.listOfList[i].length; j++){
                if(display === "Default"){
                    subRows.push(<div style={{backgroundColor: props.listOfList[i][j].boxColor, height: 30, margin: 5, width: ((window.innerWidth)/(perCol))}}><p>{props.listOfList[i][j].boxName}</p></div>); 
                } else {
                    
                    subRows.push(<div style={{backgroundColor: props.listOfList[i][j].boxColor, height: 30, margin: 5, width: ((window.innerWidth)/(perColCompact))}}><p></p></div>); 
                }
            }
            //rows.push(<div className ="col-3">
            rows.push(<Col><div className="col" style={{float: "left", margin: 15, textAlign: "left"}}>
            <h4>{props.listOfList[i][0].date}</h4>
            {subRows} 
            </div></Col>); 
        }

    }

  

    return(
        <div>
            <h1>History</h1>
            <hr />
        
        <Container>
        <Row xs="auto">

           <Col><div style={{margin: 10}}><h6>Sort by</h6></div></Col>
           <Col>
           <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {order}
                </Dropdown.Toggle>
                <div class="w-100"></div>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setOrder("Oldest to Newest")}>Oldest to Newest</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setOrder("Newest to Oldest")}>Newest to Oldest</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            </Col>

            <Col><div style={{margin: 10}}><h6>Display</h6></div></Col>

            <Col>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {display}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setDisplay("Default")}>Default</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setDisplay("Compact")}>Compact</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            </Col>
        </Row>
        </Container>
        <hr />
       
            <div className="container">
                <div className="row">
                <Row xs="auto">
                {rows}
                </Row>
                </div>
            </div>
        </div>
    ); 
    
}