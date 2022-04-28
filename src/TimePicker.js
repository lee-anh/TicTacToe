import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default function TimePicker(props){
    const [startTime, setStartTime] = useState(8); // 8 am
    const [endTime, setEndTime] = useState(20);  // 8 pm 
    
    // how will number of boxes be reperesented in the history section?
    const lookUp = (timeNum) =>{
        let toReturn = ""; 
        if(timeNum === 0){
            toReturn = "12 am"; 
        } else if (timeNum > 0 && timeNum < 12 ){
            toReturn = "" + timeNum + " am"; 
        } else if (timeNum === 12){
            toReturn = "12 pm"; 
        } else if (timeNum === 13){
            toReturn = "1 pm"; 
        } else if (timeNum === 14){
            toReturn = "2 pm"; 
        } else if (timeNum === 15){
            toReturn = "3 pm"; 
        } else if (timeNum === 16){
            toReturn = "4 pm"; 
        } else if (timeNum === 17){
            toReturn = "5 pm"; 
        } else if (timeNum === 18){
            toReturn = "6 pm"; 
        } else if (timeNum === 19){
            toReturn = "7 pm"; 
        } else if (timeNum === 20){
            toReturn = "8 pm"; 
        } else if (timeNum === 21){
            toReturn = "9 pm"; 
        } else if (timeNum === 22){
            toReturn = "10 pm"; 
        } else if (timeNum === 23){
            toReturn = "11 pm"; 
        }
        return toReturn; 
    }
    const [startString, setStartString] = useState("8 am");
    const [endString, setEndString] = useState("8 pm");

    const checkStartTime = (check) => {
        if (check < endTime){
            setStartTime(check);
            setStartString(lookUp(check)); 
            props.computeTimeBlocks(startTime, endTime);
        } 
    }
    

    const checkEndTime = (check) => {
        // need an error message here if end time is before start time 
        if(check > startTime){
            setEndTime(check); 
            setEndString(lookUp(check)); 
            props.computeTimeBlocks(startTime, endTime);
        } 
    }

    const checkDisableForStart = (check) => {
        return check > endTime; 
    }

    const checkDisableForEnd = (check) => {
        return check < startTime; 
    }
   

    // Ideally disable the region for the start time and end time which are not allowed 

    return(
        <Row xs="auto">

            <Col><h6>Start Time</h6></Col>
            <Col>
            <Dropdown size="sm">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                 {startString}   
            </Dropdown.Toggle>
            <div class="w-100"></div>
            <Dropdown.Menu>
                <Dropdown.Item disabled={checkDisableForStart(0)} onClick={()=>checkStartTime(0)}>12 am</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(1)} onClick={()=>checkStartTime(1)}>1 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(2)} onClick={()=>checkStartTime(2)}>2 am</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(3)} onClick={()=>checkStartTime(3)}>3 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(4)} onClick={()=>checkStartTime(4)}>4 am</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(5)} onClick={()=>checkStartTime(5)}>5 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(6)} onClick={()=>checkStartTime(6)}>6 am</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(7)} onClick={()=>checkStartTime(7)}>7 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(8)} onClick={()=>checkStartTime(8)}>8 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(9)} onClick={()=>checkStartTime(9)}>9 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(10)} onClick={()=>checkStartTime(10)}>10 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(11)} onClick={()=>checkStartTime(11)}>11 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(12)} onClick={()=>checkStartTime(12)}>12 pm</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(13)} onClick={()=>checkStartTime(13)}>1 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(14)} onClick={()=>checkStartTime(14)}>2 pm</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(15)} onClick={()=>checkStartTime(15)}>3 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(16)} onClick={()=>checkStartTime(16)}>4 pm</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(17)} onClick={()=>checkStartTime(17)}>5 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(18)} onClick={()=>checkStartTime(18)}>6 pm</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(19)} onClick={()=>checkStartTime(19)}>7 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(20)} onClick={()=>checkStartTime(20)}>8 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(21)} onClick={()=>checkStartTime(21)}>9 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(22)} onClick={()=>checkStartTime(22)}>10 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForStart(23)} onClick={()=>checkStartTime(23)}>11 pm </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Col>

            <Col><h6>End Time</h6></Col>
            <Col>
            <Dropdown size="sm">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                 {endString}   
            </Dropdown.Toggle>
            <div class="w-100"></div>
            <Dropdown.Menu>
                <Dropdown.Item disabled={checkDisableForEnd(0)} onClick={()=>checkEndTime(0)}>12 am</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(1)} onClick={()=>checkEndTime(1)}>1 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(2)} onClick={()=>checkEndTime(2)}>2 am</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(3)} onClick={()=>checkEndTime(3)}>3 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(4)} onClick={()=>checkEndTime(4)}>4 am</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(5)} onClick={()=>checkEndTime(5)}>5 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(6)} onClick={()=>checkEndTime(6)}>6 am</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(7)} onClick={()=>checkEndTime(7)}>7 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(8)} onClick={()=>checkEndTime(8)}>8 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(9)} onClick={()=>checkEndTime(9)}>9 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(10)} onClick={()=>checkEndTime(10)}>10 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(11)} onClick={()=>checkEndTime(11)}>11 am </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(12)} onClick={()=>checkEndTime(12)}>12 pm</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(13)} onClick={()=>checkEndTime(13)}>1 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(14)} onClick={()=>checkEndTime(14)}>2 pm</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(15)} onClick={()=>checkEndTime(15)}>3 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(16)} onClick={()=>checkEndTime(16)}>4 pm</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(17)} onClick={()=>checkEndTime(17)}>5 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(18)} onClick={()=>checkEndTime(18)}>6 pm</Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(19)} onClick={()=>checkEndTime(19)}>7 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(20)} onClick={()=>checkEndTime(20)}>8 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(21)} onClick={()=>checkEndTime(21)}>9 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(22)} onClick={()=>checkEndTime(22)}>10 pm </Dropdown.Item>
                <Dropdown.Item disabled={checkDisableForEnd(23)} onClick={()=>checkEndTime(23)}>11 pm </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Col>
        </Row>
    )
}