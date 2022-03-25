import React from 'react';

export class Clock extends React.Component {
    constructor(props){
        super(props); 
        this.state = {date: new Date()}; 
    }
    render(){
        return(
        <div class="rounded" ><h1>{this.state.date.toLocaleTimeString()}</h1></div>
        ); 
    }
    componentDidMount(){
        this.startInterval(); 
    }
    componentWillUnmount(){
        clearInterval(this.intervalID); 
    }

    startInterval(){
        let delay = 1000; 
        this.intervalID = setInterval(() => {
            this.setState({date: new Date()});}, delay); 
    }

}