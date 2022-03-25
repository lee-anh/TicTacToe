import React from 'react'; 

const pink = "#ffdbef"; 
const orange = "#ffca61";
const yellow = "#ffff9c"; 
const green = "#c4ff91"; 
const blue = "#dbf8ff";
const purple = "#f1dbff"; 
// make a button for each one
// when pressed it should send a

// make different buttons that change the background 
export class Palette extends React.Component {
    constructor(props){
        super(props);
        this.state = {color: green};
        this.changeColor = this.changeColor.bind(this); 
        
    }

    changeColor(){
        const newColor = this.state.color === green ? yellow : green; 
        this.setState({color: newColor});
    }
    render(){
        return (
            <div style={{background: this.state.color}}>
                <h1>
                    <button onClick={this.changeColor}>
                        Change color
                    </button>
                </h1>
            </div>
        ); 
    }
    
}

export default Palette; 