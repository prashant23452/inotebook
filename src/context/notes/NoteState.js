import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const s1={
        "name" :"Prashant",
        "Age" : "50"
    }
    const [state, setState] = useState(s1);
    // const update = ()=> {
    //     setTimeout(() =>{
    //         setState({
    //        "name" : "Sakshi",
    //        "Age" : "19"
    //     })
    //     },1000);
    // }
    return (
        <NoteContext.Provider value={{state}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
