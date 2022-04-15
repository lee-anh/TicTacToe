

import './App.css';
import {Test} from './Test.js'
import Mother from './Mother.js'
import {Palette} from './Palette.js'
import {ColorPalette} from './ColorPalette.js'
import {Clock} from './Clock.js'
import TaskCreator from "./TaskCreator.js"



function App() {
  return (
    <div >
        <h1>♥Time Tracker App♥</h1>
        <div class="d-flex flex-row">
          <div class="p-2"><Test myName="Claire" favorite="1"/></div>
          <div class ="p-2"><Clock/></div>
        </div>
        <Mother />
        

        <div class="d-flex flex-row">
         <ColorPalette/>
          <TaskCreator/>
        </div>
        

    </div>
  );
}

//


export default App;
