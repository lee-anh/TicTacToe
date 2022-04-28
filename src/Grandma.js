import React, {useState} from "react"; 
import Mother from './Mother.js'
import Aunt from './Aunt.js'
// Grandma will have a list of lists and will manage passing those lists around

// Grandma will be able to handle pseudo navigation if we can't get the real navigation to work

export default function Grandma() {
    const [grandList, setGrandList] = useState([]); 

    const handleAddListToGrandList = (listToAdd) => {
        // add the list to the list of lists 
        // set it 
        setGrandList(grandList => [...grandList, listToAdd]); 

    }


    //<Aunt listOfList={grandList}/>
    return(
        <div>
        <Mother handleAddListToGrandList={handleAddListToGrandList}/>
        <Aunt listOfList={grandList}/>
        </div>
    )
}