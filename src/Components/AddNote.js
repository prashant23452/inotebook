import React, { useState ,  useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const {addNote} = context;
  const [note,setNote] = useState({title : "",description : "", tag:"default"})
  const handleClick = (e)=>{
      e.preventDefault();
      addNote(note.title,note.description, note.tag);
  }
  const onChange = (e) => {
      setNote({...note,[e.target.name] : e.target.value})
        
      
  }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlfor="Title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlfor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlfor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" onClick={handleClick}className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
