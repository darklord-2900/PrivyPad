// import React, { useState } from "react";
import { useState } from "react";
import NoteContext from "./NoteContext.js";
const NoteState=(props)=>{
    const host="https://privy-pad.vercel.app"
    const getallnotes=async()=>{
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("token")
            },
        });
        const json =await response.json();
        // console.log(json)
        setNotes(json)
        }
            const notesInitial=[]
            const [notes,setNotes]=useState(notesInitial)

            // Add a note 
            const addNote=async(title,description,tag)=>{
                // TODO API call
                const response = await fetch(`${host}/api/notes/addnote`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token":localStorage.getItem("token")
                    },
                    body: JSON.stringify({title,description,tag}),
                    });
                // Adding Notes 
                console.log("adding a new note");
                let note = await response.json();
                setNotes(notes.concat(note))
            }
            
            // Edit a note 
                const editNote=async (id,title,description,tag)=>{
                // API Call
                const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                    method: "PUT", 
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token":localStorage.getItem("token")
                    },
                    body: JSON.stringify({title,description,tag}),
                    });
                    // const json= await response.json();
                    // console.log(json);
                    let newNotes=await JSON.parse(JSON.stringify(notes))
                    // Logic to edit text in client 
                for (let index = 0; index < newNotes.length; index++) {
                    const element = newNotes[index];
                    if(element._id===id){
                        newNotes[index].title=title;
                        newNotes[index].description=description;
                        newNotes[index].tag=tag;
                        break;
                    }
                }
                setNotes(newNotes)
            }
            // Delete a note 
            const deleteNote=async(id)=>{
                // TODO : API Call
                const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                    method: "DELETE", 
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token":localStorage.getItem("token")
                    }
                    });
                console.log("deleting the note present with id "+id);
                const newNotes=notes.filter((note)=>{return note._id!==id})
                setNotes(newNotes);
                    // const json=await response.json();
                    // console.log(json);
            }
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getallnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState