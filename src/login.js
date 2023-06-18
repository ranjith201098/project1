import React from 'react';
import { useState} from "react";
import { useNavigate } from "react-router-dom";
 import './login.css' 

const Login = () => {


    const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  /* const [authenticated, setauthenticated] = useState(); */
  const users = [{ username: "Ranjith", password: "12345" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        /* setauthenticated(true)
        localStorage.setItem("authenticated", true); */
 navigate("/dashboard");
   
    }else(
    alert("Incorrect Password")
)
  };
    return(
         <div style={{textAlign:"center"}}>
      <div style={{fontSize:"80px",marginLeft:"50px"}}>Welcome </div>
      <form onSubmit={handleSubmit}><b></b>
    <div style={{marginTop:"30px"}}>
      <input
         className='inPut1'
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
</div>
  <div style={{marginTop:"30px"}}>
      <input
        type="password"
        name="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
</div>
      <input type="submit" value="Submit" style={{marginTop:"30px",marginLeft:"50px",width:"80px"}} className='btn'/>
      </form>
    </div>
  )
};





export default Login;