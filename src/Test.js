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

const helloKittyStarTrek = { title: "Hello Kitty in Star Trek uniform", src: "https://i.pinimg.com/originals/f3/97/62/f39762be64aab2034fbc215cca4349ce.jpg"}

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
        
            <p>How long do you spend eating? How long do you spend doing homework? Track how you spend your every waking hour using Time Tracker and figure out how you are spending your time.</p>
            <p>Track your time on the <b>Dashboard</b> tab. You can create tasks and enter how you spend your hours.</p>
            <p>View your history in the <b>History</b> tab.</p>
        
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

            //     <img src ={helloKittyStarTrek.src} width="400" class="rounded"/>