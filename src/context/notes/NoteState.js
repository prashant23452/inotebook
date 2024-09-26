import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial =[]
  const [notes, setNotes] = useState(notesInitial);
  //Get all Notes 
  const getNotes = async () =>{
    const response= await fetch(`${host}/api/notes/fetchallnotes`,{
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlMTNlY2Q1ZTI5OTBmMTcyZTEwNTBiIn0sImlhdCI6MTcyNjQ5MjYzN30.pjkB1nQQ5gw0pd-8RNQGmImOVt42ZftrM5vRrqJoB8M",
        },
        
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
  //Add note
  const addNote = async (title, description, tag) => {

    const response = await fetch(`${host}/api/notes/addnotes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlMTNlY2Q1ZTI5OTBmMTcyZTEwNTBiIn0sImlhdCI6MTcyNjQ5MjYzN30.pjkB1nQQ5gw0pd-8RNQGmImOVt42ZftrM5vRrqJoB8M",
        },
        body: JSON.stringify({title,description,tag}),
      }
    );
    const json = response.json();

    console.log("hello");
    const note = {
      _id: "66e98ee9a40668a1d76bd4a5",
      user: "66e13ecd5e2990f172e1050b",
      title: title,
      description: description,
      tag: tag,
      date: "2024-09-17T14:15:05.860Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a Note
  const deleteNote = async (id) => {

    // const response = await fetch(
    //   `${host}/api/notes/updatenotes/66e97f8b13b0316375304b03`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token":
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlMTNlY2Q1ZTI5OTBmMTcyZTEwNTBiIn0sImlhdCI6MTcyNjQ5MjYzN30.pjkB1nQQ5gw0pd-8RNQGmImOVt42ZftrM5vRrqJoB8M",
    //     },
    //     body: JSON.stringify({title,description,tag}),
    //   }
    // );
    // const json = response.json();

    const newNotes = notes.filter((notesInitial) => {
      return notesInitial._id !== id;
    });
    console.log("Delete");
    setNotes(newNotes);
  };
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call

    const response = await fetch(
      `${host}/api/notes/updatenotes/66e97f8b13b0316375304b03`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlMTNlY2Q1ZTI5OTBmMTcyZTEwNTBiIn0sImlhdCI6MTcyNjQ5MjYzN30.pjkB1nQQ5gw0pd-8RNQGmImOVt42ZftrM5vRrqJoB8M",
        },
        body: JSON.stringify({title,description,tag}),
      }
    );
    const json = response.json();

    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
