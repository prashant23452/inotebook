import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const {notes, getNotes} = context;
  useEffect(() =>{
    getNotes();
  },[])
  return (
      <>
      <AddNote/>
      <div className="row my-3">
      <h2>Yours Note</h2>
      {notes.map((notes) =>{
        return <Noteitem key={notes._id} note={notes}/>;
      })

      }
      </div>
      </>
  )
}

export default Notes
