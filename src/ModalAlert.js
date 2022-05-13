import React, {useState} from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export default function ModalAlert(props) {
    const [show, setShow] = useState(props.show);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    const handleDeleteClose = () => {
        setShow(false); 
        props.handleConfirmDelete(); 
    }

    return (
        <>
            

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>You cannot undo this action. It will delete the task card and the task from History and Analytics.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}