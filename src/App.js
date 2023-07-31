import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import About from './components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import LandingContent from './components/LandingContent';

function App() {
  // const url=process.env.REACT_APP_BASE_URL
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
  <NoteState>
    <Router>    
        <Navbar/>
        <Alert alert={alert}/>
      <div className="container">
        <Routes>
        <Route path="/LandingContent" element={<LandingContent />} />
        <Route path="/Home" element={<Home showAlert={showAlert} />} />
        <Route path="/About" element={<About />} />
        <Route path="/signup" element={<Signup showAlert={showAlert} />} />
        <Route path="/login" element={<Login showAlert={showAlert}   />} />
      </Routes>
      </div>
    </Router>
  </NoteState>
  );
}
export default App;
