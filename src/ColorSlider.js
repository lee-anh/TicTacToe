
import React,{useState} from 'react'; 
import {SliderPicker} from 'react-color'; 



export function ColorSlider(){
    const[state, setState] = useState({
        color: {
            r: '120',
            g: '219',
            b: '20',
            a: '1',
        }
    });

    const handleChange = (color) => {
        setState({ color: color.rgb }); 

    }

    return(
        <SliderPicker color={state.color} onChange={ handleChange } />
    );
}



/*
class ColorSlider extends React.Component {

    state = {
        color: {
            r: '120',
            g: '219',
            b: '20',
            a: '1',
        }
    }; 
    handleChange = (color) => {
        this.setState({ color: color.rgb });
  
      };
    
    
    render(){
        return (
            <div>
                <SliderPicker color={this.state.color} onChange={ this.handleChange } />
            </div>
        );
    }
}

export default ColorSlider; 

*/