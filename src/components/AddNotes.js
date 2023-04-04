import React, { useContext, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext';
export default function AddNotes(props) {
    const context= useContext(NoteContext);
    const{addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:" "})
    const handleclick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:" ",description:" ",tag:" "});
        props.showAlert("Notes Added","success")
    }
    const onchange=(e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
    return (
        <div className="container my-3">
        <h1>Add Your Notes</h1>
        <form>
        <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp"  onChange={onchange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" value={note.description} name='description' onChange={onchange} />
        </div>
        <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onchange}/>
        </div>
        <button disabled={note.description.length<5 ||note.title.length<5} type="submit" className="btn btn-primary" onClick={handleclick} >Add this note</button>
    </form>
    </div>
    )
}
