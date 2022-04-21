

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import {Test} from './Test.js'
import Grandma from "./Grandma";
import {Palette} from './Palette.js'
import {ColorPalette} from './ColorPalette.js'
import {Clock} from './Clock.js'
import Header from './Header.js'


function App() {
  return (
    <div >

        <BrowserRouter>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Test myName="Claire" favorite="1"/>}/>
            <Route path="dashboard" element={<Grandma />}/>
          </Routes>
        </div>
  
        </BrowserRouter>

      
    </div>
  );
}

/*
old version


        <h1>♥Time Tracker App♥</h1>
      
        <div className="d-flex flex-row">
          <div className="p-2"><Test myName="Claire" favorite="1"/></div>
          <div className ="p-2"><Clock/></div>
        </div>
        <p>
          Create Tasks and track how you are spending your time!
        </p>
        <p>
          Select the task you want to track and then click the time block you want to color in :) 
        </p>
        <Grandma />



*/
export default App;
