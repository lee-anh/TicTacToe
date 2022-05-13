import React from 'react';

export class Clock extends React.Component {
    constructor(props){
        super(props); 
        this.state = {date: new Date()}; 
    }
    render(){
        return(
        <div class="rounded" >{this.state.date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</div>
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