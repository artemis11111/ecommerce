// Signup.js

import React, { useEffect,useState } from 'react';
import {useNavigate} from "react-router-dom";
import './App.css'

function Signup() {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const navigate = useNavigate();
  
  
  const submitdata = async() => {
    if (!name ||!email || !password){
      alert("Please fill form")
      return false;
    }
    let result = await fetch("http://localhost:5000/register",{
      method:"post",
      body: JSON.stringify({name,password,email}),
      headers: {"Content-Type":"application/json"},
    });
    result=await result.json();
    if (result){
      // localStorage.setItem("user", JSON.stringify(result));
      navigate("/login");
    }
    else
    {
      alert("wrong input")
    }
  };

  return (
    <div className="signup">
      <h1>Registration Page</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />
        
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />       
        

        <button type="button" onClick={submitdata}>
          Click here to Sign Up
        </button>      
    </div>
  );
}

export default Signup;
