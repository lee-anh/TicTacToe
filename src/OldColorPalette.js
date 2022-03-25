/*
import React from 'react'; 
import { Button } from 'bootstrap';

const pink = "#ffdbef"; 
const orange = "#ffca61";
const yellow = "#ffff9c"; 
const green = "#c4ff91"; 
const blue = "#dbf8ff";
const purple = "#f1dbff"; 
// make a button for each one
// when pressed it should send a
// stick timer and hello kitty on the page. settings to choose between jinbesan and hello kitty 

// how to make multiple buttons 
// all changing one background 
let chosenColor = pink; 

export class Square extends React.Component {
    // maybe have the color be a state? and then pass the state as props? 
    changeColor(){
        chosenColor = this.props.colorValue; 
        console.log("called"); 
    }
    
    render(){
    
        return(
            <button style={{background: this.props.colorValue}} onClick={this.changeColor}>{this.props.colorName}</button>
        );
    }
}

Button.defaultProps = {colorName:"pink", colorValue: pink}; 

function Square(props){
    let col = pink; 
        if(props.colorName === "orange"){
            col = orange; 
        } else if (props.colorName === "yellow"){
            col = yellow; 
        } else if (props.colorName === "green"){
            col = green; 
        } else if (props.colorName === "blue"){
            col = blue; 
        } else if (props.colorName === "purple"){
            col = purple; 
        }
    return(
        <button style={{background: col}} onClick={props.onClick}>
            <p>{props.colorName}</p>
        </button>
    ); 
    // onClick change the background color 
}

// make different buttons that change the background 
export class ColorPalette extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {color: green};
    } 

    render(){
    
        return (
            <div style={{background: chosenColor}}>
                <h1>
                    <Square colorName="pink" colorValue={pink}/>
                    <Square colorName="orange" colorValue={orange}/>
                    <Square colorName="yellow" colorValue={yellow}/>
                    <Square colorName="green" colorValue={green}/>
                    <Square colorName="blue" colorValue={blue}/>
                    <Square colorName="purple" colorValue={purple}/>
                    
                </h1>
            </div>
        ); 
    }
    
}

export default ColorPalette; 

*/


/*
import React from 'react'; 
import { Button } from 'bootstrap';

const pink = "#ffdbef"; 
const orange = "#ffca61";
const yellow = "#ffff9c"; 
const green = "#c4ff91"; 
const blue = "#dbf8ff";
const purple = "#f1dbff"; 
// make a button for each one
// when pressed it should send a
// stick timer and hello kitty on the page. settings to choose between jinbesan and hello kitty 

// how to make multiple buttons 
// all changing one background 
let chosenColor = pink; 

// does this have to be a class or can it just be a function?
export class Square extends React.Component {
    // maybe have the color be a state? and then pass the state as props? 
    // race conditions? 
    squareOnClick(){
        chosenColor = this.props.colorValue; 
        //this.props.onClick(); 
    }
    
    

    render(){
    
        return(
            <button style={{background: this.props.colorValue}} onClick={this.squareOnClickå()}>{this.props.colorName}</button>
        );
    }
}

Button.defaultProps = {colorName:"pink", colorValue: pink}; 



export class ColorPalette extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {color: green};
       
        this.changeColorOnClick = this.changeColorOnClick.bind(this)

    } 
    changeColorOnClick(){
        // I am missing one piece of the puzzle sending props back to the parent, which apparently isn't possible
        // what can we do with what we know?
        // solution: stick everything in one class? 
        
        this.setState({color: chosenColor}); 
    }

    
    render(){
    
        return (
        
            <div >
                <h1>
                    <Square colorName="pink" colorValue={pink} />
                    <Square colorName="orange" colorValue={orange} />
                    <Square colorName="yellow" colorValue={yellow} />
                    <Square colorName="green" colorValue={green}  />
                    <Square colorName="blue" colorValue={blue}  />
                    <Square colorName="purple" colorValue={purple}  />
                    <button style={{background: this.state.color}} onClick={this.changeColorOnClick} >TARGET</button>
                    
                </h1>
            </div>
        
        ); 
    }
    
}

export default ColorPalette; 

*/


/*

import React from 'react'; 
import { Button } from 'bootstrap';

const pink = "#ffdbef"; 
const orange = "#ffca61";
const yellow = "#ffff9c"; 
const green = "#c4ff91"; 
const blue = "#dbf8ff";
const purple = "#f1dbff"; 
// make a button for each one
// when pressed it should send a
// stick timer and hello kitty on the page. settings to choose between jinbesan and hello kitty 

// how to make multiple buttons 
// all changing one background 
let chosenColor = pink; 

// does this have to be a class or can it just be a function?
export class Square extends React.Component {
    // maybe have the color be a state? and then pass the state as props? 
    // race conditions? 
    squareOnClick(){
        chosenColor = this.props.colorValue; 
        //this.props.onClick(); 
    }
    
    

    render(){
    
        return(
            <button style={{background: this.props.colorValue}} onClick={this.squareOnClickå()}>{this.props.colorName}</button>
        );
    }
}

Button.defaultProps = {colorName:"pink", colorValue: pink}; 



export class ColorPalette extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {color: green};
       
        this.changeColorOnClick = this.changeColorOnClick.bind(this)

    } 
    changeColorOnClick(itemColor){
        // I am missing one piece of the puzzle sending props back to the parent, which apparently isn't possible
        // what can we do with what we know?
        // solution: stick everything in one class? 
        
        this.setState({color: itemColor}); 
    }

    
    render(){
    
        return (
        
            <div >
                <h1>
                    <Square colorName="pink" colorValue={pink} onClick={this.changeColorOnClick(pink)} />
                    <Square colorName="orange" colorValue={orange} />
                    <Square colorName="yellow" colorValue={yellow} />
                    <Square colorName="green" colorValue={green}  />
                    <Square colorName="blue" colorValue={blue}  />
                    <Square colorName="purple" colorValue={purple}  />
                    <button style={{background: this.state.color}} >TARGET</button>
                    
                </h1>
            </div>
        
        ); 
    }
    
}

export default ColorPalette; 
*/