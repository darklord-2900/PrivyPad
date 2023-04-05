// import React, { useEffect } from 'react'
// import { useContext } from 'react'
// import NoteContext from '../Context/notes/NoteContext.js'

const About = () => {
    return (
        <div>
            <h4>
                A simple Notes Management Application with features to store data provided by different users to keep their notes stored. 
            </h4>
            <h4>
                iNotebook is made by following MERN Stack principles of Web Development.
            </h4>
            <h4>
                The basic operations of this application are :
            </h4>
            <h5>
                <ol>
                    <li>
                        Private and secure space for each user
                    </li>
                    <li>
                    Users are able to Sign Up using their Name, Email, and can set a password which is securely stored in the database <br></br>in encrypted format to ensure safety to the user's data.
                    </li>
                </ol>
            </h5>
        </div>
    )
}

export default About
