
import React,{useEffect, useState} from "react";
import {useNavigate} from 'react-router'
function Login(){
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const navigate = useNavigate();


    const submitdata = async()=>
    {
        if(!email || !password){
            alert("Please fill form")
            return false;
        }
        let result = await fetch("http://localhost:5000/login",{
            method:"post",
            body: JSON.stringify({email,password}),
            headers: {"Content-Type":"application/json"},
          });
          result=await result.json();
          if (result){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
          }
          else
          {
            alert("not found")
          }
        
    }
    return (
        <div className="signup">
          <h1>Login Page</h1>             
                        
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />       
            
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
    
            <button type="button" onClick={submitdata}>
              Click here to Login
            </button>      
        </div>
      )
}
    
export default Login;
    