import React from 'react';
const cuteChars = [
    {
        title: "Jinbesan",
        src: "https://2.bp.blogspot.com/-NrLfqAizd20/WD6b55vGgUI/AAAAAAAD-T4/mdxSuQXyrz8ZKg523JEDvtS7U9sdPP8kQCLcB/s1600/AS002030_14.gif"
    }, 
    {
        title: "Hello Kitty", 
        src: "https://data.whicdn.com/images/357159006/original.gif"
    }
]; 



export class Test extends React.Component {
    render(){
        let friend; 
        /*
        if(Math.random() < 0.5){
            friend = cuteChars[1]; 
        }*/
       // if(this.props.favorite.localeCompare("O") === 0){ // string comparison
        if(this.props.favorite === "0"){
            friend = cuteChars[0]; 
        } else {
            friend = cuteChars[1]; 
        }
    
        return(
            <div>
            <h1>Hello {this.props.myName}!</h1>
            <img src ={friend.src} width="400" class="rounded"/>
            </div>
            
        )
    }
}

export default Test; 
/*
<div>
            <h1>{cuteChars.title}</h1>
            <img src = {cuteChars.src} />
            </div>
            */