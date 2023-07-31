import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
  const [credentials,setCedentials]=useState({name:"",email:"",password:"",cpassword:""});
  let history=useNavigate();
  // const host={host}
  // const host="http://localhost:5000"
    const host=process.env.REACT_APP_BASE_URL
    // const host=process.env.BASE_URL
  const handleSubmit=async  (e)=>{
      e.preventDefault(); 
      const {name,email,password,cpassword}=credentials;
      const response = await fetch(`${host}/api/auth/createuser`, {
          method: "POST", 
          headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({name,email,password}),
              
      });
      const json =await response.json();
      console.log(json);
      if(json.success){
          // save the auth token and redirect 
          localStorage.setItem('token',json.authtoken);
          props.showAlert("Account created Successfully","success")
          history("/home");
      }
      else{
          props.showAlert("Invalid credentials","Error")
      }
  }
  const onchange=(e)=>{
      setCedentials({...credentials, [e.target.name]:e.target.value})
  }
  return (
    <div className='container mt-3'>
      <h2>Signup </h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onchange} aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onchange} aria-describedby="emailHelp"required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={onchange} name="password" id="password"required minLength={5}/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" onChange={onchange} name="password" id="cpassword" required minLength={5}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
