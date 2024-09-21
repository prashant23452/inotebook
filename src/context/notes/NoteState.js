import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial=[
        {
          "_id": "66e83b1553315011c79fb747",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:05:09.150Z",
          "__v": 0
        },
        {
          "_id": "66e83b6b53315011c79fb749",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:06:35.233Z",
          "__v": 0
        },
        {
          "_id": "66e83b6b53315011c79fb74b",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:06:35.396Z",
          "__v": 0
        },
        {
          "_id": "66e83b6b53315011c79fb74d",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:06:35.593Z",
          "__v": 0
        },
        {
          "_id": "66e83b6b53315011c79fb74f",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:06:35.824Z",
          "__v": 0
        },
        {
          "_id": "66e83b6c53315011c79fb751",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:06:36.028Z",
          "__v": 0
        },
        {
          "_id": "66e83b6c53315011c79fb753",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:06:36.290Z",
          "__v": 0
        },
        {
          "_id": "66e83b6c53315011c79fb755",
          "user": "66e13ecd5e2990f172e1050b",
          "title": "My Title",
          "description": "Please Wake up early",
          "tag": "Personal",
          "date": "2024-09-16T14:06:36.483Z",
          "__v": 0
        },
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
      const[notes, setNotes]= useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
