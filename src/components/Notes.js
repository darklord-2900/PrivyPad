import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext';
import AddNotes from './AddNotes';
import NoteItem from './NoteItem';

    const Notes = () => {
        const context= useContext(NoteContext);
        const ref= useRef(null)
        const refClose= useRef(null)
        const{notes,getallnotes, editNote}=context;
        const [note,setNote]=useState({etitle:"",edescription:"",etag:"default"})
        useEffect(()=>{
            getallnotes();
            // eslint-disable-next-line
        },[])
        const updateNote=(currentNote)=>{
            ref.current.click();
            setNote( { id:currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag } )
        }
        const handleclick=(e)=>{
            console.log("updating note")
            editNote(note.id,note.etitle,note.edescription,note.etag)
            e.preventDefault();
            refClose.current.click();
            setNote({etitle:"",edescription:"",etag:"default"})
        }
        const onchange=(e)=>{
            setNote({...note, [e.target.name]:e.target.value})
        }
    return (
        <>
        <AddNotes/>
                <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel"  aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onchange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="edescription"value={note.edescription} name='edescription' onChange={onchange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" value={note.etag}id="etag" name='etag' onChange={onchange}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleclick}>Add this note</button>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button disabled={note.edescription.length<5 ||note.etitle.length<5}  onClick={handleclick} type="button" className="btn btn-primary">Update Note</button>
                    </div>
                    </div>
                </div>
                </div>
            <div className='row my-3'>
                <h1>Your Notes</h1>
                {notes.map((notes)=>{
                    return <NoteItem key={notes._id} note={notes} updateNote={updateNote}/>;
                })}  
            </div>
        </>
    )}
export default Notes
