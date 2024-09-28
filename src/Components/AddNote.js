import React, { useState ,  useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const {addNote} = context;
  const [note,setNote] = useState({title : "",description : "", tag:"default"})
  const handleClick = (e)=>{
      e.preventDefault();
      addNote(note.title,note.description, note.tag);
      setNote({title : "",description : "", tag:""})
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
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={note.title}
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5} required
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              value={note.description}
              onChange={onChange}
              minLength={5} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
            Tag
            </label>
            <input
              type="text"
              value={note.tag}
              className="form-control"
              name="tag"
              id="tag"
              onChange={onChange}
              minLength={5} required
            />
          </div>
          <button disabled={note.title.length< 5 || note.description.length < 5 || note.tag.length< 5}type="submit" onClick={handleClick}className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
