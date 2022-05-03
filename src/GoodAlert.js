import React, {useState} from 'react'

import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

export default function GoodAlert(props){
    const [show, setShow] = useState(false);

    const savey = () => {
        setShow(false);
        /// how do we handle the save from here? 
        props.handleSaveClick(); 
    }

    return(
        <>
        <Alert show={show} variant="success">
            <Alert.Heading>Are you sure you want to save the day?</Alert.Heading>
            <p>You can see your saved days in the "History" tab</p>
            <hr />
            <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-danger">
                Cancel 
            </Button>
            <Button onClick={savey} variant="outline-success">
                Save
            </Button>
        </div>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Save the Day!</Button>}
        </>
    )
}
