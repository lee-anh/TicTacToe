import React, { useState } from 'react';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"

import Calendar from "react-calendar"


import TaskCreator from './TaskCreator';
import GoodAlert from './GoodAlert';
import Boxy from './Boxy.js'

import 'react-calendar/dist/Calendar.css';


// in this componentwe will build the TimePicker over from scratch 
// in an attempt to fix 2 of the bugs
// more of the components will be on the same level to try to address the bugs
// it will replace the Mother function 
// can cousin actually fix all of this? // put it on the same level 


export default function Cousin({initialStartTime, initialEndTime, handleChangeTime, initialList, handleAddListToGrandList, handleAddTask, handleRemoveTask }) {

     // for drop down
    const lookUp = (timeNum) => {
        let toReturn = "";
        if (timeNum === 0) {
            toReturn = "12 am";
        } else if (timeNum > 0 && timeNum < 12) {
            toReturn = "" + timeNum + " am";
        } else if (timeNum === 12) {
            toReturn = "12 pm";
        } else if (timeNum === 13) {
            toReturn = "1 pm";
        } else if (timeNum === 14) {
            toReturn = "2 pm";
        } else if (timeNum === 15) {
            toReturn = "3 pm";
        } else if (timeNum === 16) {
            toReturn = "4 pm";
        } else if (timeNum === 17) {
            toReturn = "5 pm";
        } else if (timeNum === 18) {
            toReturn = "6 pm";
        } else if (timeNum === 19) {
            toReturn = "7 pm";
        } else if (timeNum === 20) {
            toReturn = "8 pm";
        } else if (timeNum === 21) {
            toReturn = "9 pm";
        } else if (timeNum === 22) {
            toReturn = "10 pm";
        } else if (timeNum === 23) {
            toReturn = "11 pm";
        }
        return toReturn;
    }
    // for the drop downs
    const [startTime, setStartTime] = useState(initialStartTime); // 8 am
    const [endTime, setEndTime] = useState(initialEndTime);  // 8 pm
    const [timeBlocks, setTimeBlocks] = useState(endTime-startTime); 

    const [startString, setStartString] = useState(lookUp(initialStartTime));
    const [endString, setEndString] = useState(lookUp(initialEndTime));

    // paintbrush stuffx
    const [currentBrushColor, setCurrentBrushColor] = useState("pink"); 
    const [currentTaskName, setCurrentTaskName] = useState("");
    const [dummy, setDummy] = useState(""); 

    // calendar stuff
    const  [currDate, setCurrDate] = useState(new Date());
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; 
    const [dateString, setDateString] = useState(days[currDate.getDay()] + ", " + currDate.toLocaleDateString()); 
    const [showCalendar, setShowCalendar] = useState(false); 

    // for grandma 
    const [colorArray, setColorArray] = useState(Array(timeBlocks).fill({ boxColor: "white", boxName: "",  date: dateString }));


    const handleBoxChange = (id) => {
        
        setColorArray(
            colorArray.map((element, id2) => 
                id2 === id ? {...element, boxColor: currentBrushColor, boxName: currentTaskName} : { ...element }
            )
        ); 
    }

   
    let toDisplay = []; 

    let y = 0; 
    for(let i = startTime; i < endTime; i++){
        // maybe separate out the html and then you'll get different components? 
        // I think the best way to do this is to do a remove on Save click and then repush all of them ? 
        toDisplay.push(
            <div key={y}>
            <Row>
            <Col><div className="d-flex flex-column" style={{width: 300}}><Boxy dummy={dummy} handleBoxChange={handleBoxChange} colorToSet={currentBrushColor} taskNameToSet={currentTaskName} id={y}></Boxy></div></Col>
            
            <Col><div style={{textAlign: "left"}}>{lookUp(i)}</div></Col>   
            </Row>
            </div>
        )
        y++; 
    }
    

    // time blocks
    //const [allTimeBlocks, setAllTimeBlocks] = useState(toDisplay); 


 
    // for drop down
    const checkStartTime = (check) => {
        if (check < endTime) {
            setStartTime(check);
            setStartString(lookUp(check));
            setTimeBlocks(endTime-startTime); 
            handleChangeTime(check, endTime); 
        }
    }

    // for drop down 
    const checkEndTime = (check) => {
        // need an error message here if end time is before start time 
        if (check > startTime) {
            setEndTime(check);
            setEndString(lookUp(check));
            setTimeBlocks(endTime-startTime); 
            handleChangeTime(startTime, check);
        }
    }
    // for drop down 
    const checkDisableForStart = (check) => {
        return check > endTime;
    }
    // for drop down 
    const checkDisableForEnd = (check) => {
        return check < startTime;
    }

    // for paint brush stuff 
    const handleOnClickForMom = (color, taskName) => {
        setCurrentBrushColor(color); 
        setCurrentTaskName(taskName); 
    }

    const handleSaveClick = () => {
        
        handleAddListToGrandList(colorArray); 
        setColorArray(Array(timeBlocks).fill({boxColor: "white", boxName: "", date: dateString})); // this is ok 
        setDummy(Date.now()); // dummy + Date.now() was the key to syncing everything up!!! 
    }

    
    const changeCalendar =(val) => {
        setCurrDate(val); 
        setDateString(days[val.getDay()] + ", " + val.toLocaleDateString()); 
        setColorArray(
            colorArray.map((element, id2) => 
                id2 === id2 ? {...element, date: dateString} : {...element, date: dateString}

            )
        )
        setShowCalendar(false); 
    }
    const picky = () => {
        setShowCalendar(true); 
    }
    


    return (
        <div>
            <Row>
                <Col>
                    <TaskCreator initialList={initialList} handleOnClickForMom={handleOnClickForMom} handleAddTasks={handleAddTask} handleRemoveTask={handleRemoveTask}/>
                </Col>
                <Col>

                    
            
                 
                    <hr/>
                    <h5><b>Current date:</b> {dateString}</h5>
                
                    <Button onClick={picky}>Pick Date</Button> 
                    {showCalendar ? <Calendar returnValue={'start'} calendarType='US' onClickDay ={(value)=>changeCalendar(value)} prev2Label= {null} next2Label ={null} /> : null}
                    
                    <hr />

                    <Row xs="auto">

                        <Col><div style={{margin: 10}}><h6>Start Time</h6></div></Col>
                        <Col>
                            <Dropdown size="sm">
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {startString}
                                </Dropdown.Toggle>
                                <div className="w-100"></div>
                                <Dropdown.Menu>
                                    <Dropdown.Item disabled={checkDisableForStart(0)} onClick={() => checkStartTime(0)}>12 am</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(1)} onClick={() => checkStartTime(1)}>1 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(2)} onClick={() => checkStartTime(2)}>2 am</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(3)} onClick={() => checkStartTime(3)}>3 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(4)} onClick={() => checkStartTime(4)}>4 am</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(5)} onClick={() => checkStartTime(5)}>5 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(6)} onClick={() => checkStartTime(6)}>6 am</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(7)} onClick={() => checkStartTime(7)}>7 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(8)} onClick={() => checkStartTime(8)}>8 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(9)} onClick={() => checkStartTime(9)}>9 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(10)} onClick={() => checkStartTime(10)}>10 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(11)} onClick={() => checkStartTime(11)}>11 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(12)} onClick={() => checkStartTime(12)}>12 pm</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(13)} onClick={() => checkStartTime(13)}>1 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(14)} onClick={() => checkStartTime(14)}>2 pm</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(15)} onClick={() => checkStartTime(15)}>3 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(16)} onClick={() => checkStartTime(16)}>4 pm</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(17)} onClick={() => checkStartTime(17)}>5 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(18)} onClick={() => checkStartTime(18)}>6 pm</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(19)} onClick={() => checkStartTime(19)}>7 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(20)} onClick={() => checkStartTime(20)}>8 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(21)} onClick={() => checkStartTime(21)}>9 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(22)} onClick={() => checkStartTime(22)}>10 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForStart(23)} onClick={() => checkStartTime(23)}>11 pm </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col><div style={{margin: 10}}><h6>End Time</h6></div></Col>
                        <Col>
                            <Dropdown size="sm">
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {endString}
                                </Dropdown.Toggle>
                                <div className="w-100"></div>
                                <Dropdown.Menu>
                                    <Dropdown.Item disabled={checkDisableForEnd(0)} onClick={() => checkEndTime(0)}>12 am</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(1)} onClick={() => checkEndTime(1)}>1 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(2)} onClick={() => checkEndTime(2)}>2 am</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(3)} onClick={() => checkEndTime(3)}>3 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(4)} onClick={() => checkEndTime(4)}>4 am</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(5)} onClick={() => checkEndTime(5)}>5 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(6)} onClick={() => checkEndTime(6)}>6 am</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(7)} onClick={() => checkEndTime(7)}>7 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(8)} onClick={() => checkEndTime(8)}>8 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(9)} onClick={() => checkEndTime(9)}>9 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(10)} onClick={() => checkEndTime(10)}>10 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(11)} onClick={() => checkEndTime(11)}>11 am </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(12)} onClick={() => checkEndTime(12)}>12 pm</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(13)} onClick={() => checkEndTime(13)}>1 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(14)} onClick={() => checkEndTime(14)}>2 pm</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(15)} onClick={() => checkEndTime(15)}>3 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(16)} onClick={() => checkEndTime(16)}>4 pm</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(17)} onClick={() => checkEndTime(17)}>5 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(18)} onClick={() => checkEndTime(18)}>6 pm</Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(19)} onClick={() => checkEndTime(19)}>7 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(20)} onClick={() => checkEndTime(20)}>8 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(21)} onClick={() => checkEndTime(21)}>9 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(22)} onClick={() => checkEndTime(22)}>10 pm </Dropdown.Item>
                                    <Dropdown.Item disabled={checkDisableForEnd(23)} onClick={() => checkEndTime(23)}>11 pm </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <hr />
                    {toDisplay}
                    <hr />
                    <GoodAlert dummy={dummy} handleSaveClick={handleSaveClick}/>
                   
                </Col>


            </Row>
        </div>
    )

}