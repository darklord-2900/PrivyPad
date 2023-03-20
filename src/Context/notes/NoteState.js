// import React, { useState } from "react";
import { useState } from "react";
import NoteContext from "./NoteContext.js";
const NoteState=(props)=>{
    const notesInitial=
            [
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154c23c39bdb49b94d9d3c",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:29:07.273Z",
                "__v": 0
                },
                {
                "_id": "64154d86c39bdb49b94d9d41",
                "user": "641319584e414056ba827ea2",
                "title": "mytitle",
                "description": "mydescription",
                "tag": "personal",
                "date": "2023-03-18T05:35:02.011Z",
                "__v": 0
                }
            ]
            const [notes,setNotes]=useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState