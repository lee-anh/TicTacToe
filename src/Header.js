import { Nav } from "react-bootstrap"
import {Link} from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Clock } from "./Clock"
export default function Header(){
    return(
        <div style={{backgroundColor: "mistyrose"}}>
        <nav className="navbar navbar-default">
                <div  className="container-fluid">
                <div className="navbar-header">
                    <h1>♥ Time Tracker ♥</h1>
                </div>
                <Row>
            
                    <Col><Nav.Link href="/">Home</Nav.Link></Col>
                    <Col><Nav.Link href="dashboard">Dashboard</Nav.Link></Col>
                    <Col><Nav.Link href="history">History</Nav.Link></Col>
                    <Col><Nav.Link href="analytics">Analytics</Nav.Link></Col>
                    
                    
                
                </Row>
                </div>
            </nav>
        </div>
       
    )
}


/*
// sort of works 
<div>
            
            <nav className="navbar navbar-default">
                <div  className="container-fluid">
                <div className="navbar-header">
                    <h1>♥ Time Tracker ♥</h1>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="dashboard">Dashboard</Link></li>
                </ul>
                </div>
            </nav>
        </div>
*/

/*
// React boostrap
// doesn't work quite yet

 <div>
            
            <Nav className="justify-content-end">
               
                <h1>♥ Time Tracker ♥</h1>
                <Nav.Item> 
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item> 
                    <Nav.Link href="dashboard">Dashboard</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
*/