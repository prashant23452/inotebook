import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial=[
        
       
        {
          "_id": "66e83b6c53315011c79fb757",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:06:36.707Z",
          "__v": 0
        },
        {
          "_id": "66e97f8113b0316375304aff",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-17T13:09:21.716Z",
          "__v": 0
        },
        {
          "_id": "66e98ee9a40668a1d76bd4a5",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-17T14:15:05.860Z",
          "__v": 0
        }
      ]
      const [notes, setNotes]= useState(notesInitial)
      //Add note
      const addNote = (title, description, tag) =>{
        console.log("hello")
        const note={"_id": "66e98ee9a40668a1d76bd4a5",
          "user": "66e13ecd5e2990f172e1050b",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-09-17T14:15:05.860Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
      //Delet a Note
      const deleteNote = (id) =>{
        const newNotes= notes.filter((notesInitial) => {return notesInitial._id !== id})
        console.log("Delete");
        setNotes(newNotes);
      }
      //Edit a Note
      const editNote = (id, title, description , tag) =>{

      }

      
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
