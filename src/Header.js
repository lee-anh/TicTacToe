import { Nav } from "react-bootstrap"
import {Link} from "react-router-dom"

export default function Header(){
    return(
        <div style={{backgroundColor: "mistyrose"}}>
        <nav className="navbar navbar-default">
                <div  className="container-fluid">
                <div className="navbar-header">
                    <h1>♥ Time Tracker ♥</h1>
                </div>
                <div className="row">
            
                    <div className="col"><Link to="/">Home</Link></div>
                    <div className="col"><Link to="dashboard">Dashboard</Link></div>
                
                </div>
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