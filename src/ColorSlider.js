
import React,{useState} from 'react'; 
import {SliderPicker} from 'react-color'; 


export function ColorSlider(props){
    const[state, setState] = useState({
        color: {
            r: '120',
            g: '219',
            b: '20',
            a: '1'
        }
    });

   

    const handleColorChangeComplete = (color, e) => {
        setState({ color: color.rgb }); 
        props.onChange("taskColor", color.hex); 

    }

    return(
        <SliderPicker color={state.color} onChange={handleColorChangeComplete}  />
    );
}



/*

export class ColorSlider extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    

    state = {
        color: {
            r: '120',
            g: '219',
            b: '20',
            a: '1',
        }
    }; 
    
    handleChange = (color, event) => {
        this.setState({ color: color.rgb });
       // const taskColor = event.target.value;
      //  this.props.onChange(taskColor); 
        
      };
      
    
      handleChange(color, event){
        this.setState({ color: color.rgb });
        const taskColor = event.target.value;
        this.props.onChange(taskColor); 
        
      };
      
    
    render(){
        return (
            <div>
                <SliderPicker color={this.state.color} />
            </div>
        );
    }
}
*/

//export default ColorSlider; 
