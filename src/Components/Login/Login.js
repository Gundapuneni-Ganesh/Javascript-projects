import React, { useState } from "react";
import './Login.css';

function Login(){
    const data=[{email:"ganesh321@gmail.com",password:"1234"},
        {email:"gopi321@gmail.com",password:"1234"}
    ]
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validLogin = () => {
        
        const user = data.find(user => user.email === email && user.password === password);
        
        if (user)
        {
            setErrorMessage('');
            alert("Login Successful!");
        } 
        else {  
            setErrorMessage("Invalid email or password. Please try again.");
        }
    };


    
    return(
        <div classname="LoginBock">

            <h1 style={{textAlign:"center"}}>Login Page</h1>

            <div classname="LoginForm">

                <div className="inp">
                    <label>EMail Id</label>
                    <input type="email" placeholder="Enter Email Id " value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <br/>
                    <span id="error"></span>

                </div>

                <div className="inp">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password "  value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <br/>
                    <span id="error"></span>

                </div>
                {errorMessage && <span className="error">{errorMessage}</span>}

                <div className="inp">
                    <button onClick={validLogin}> Login</button>

                </div>
            </div>
        </div>
    );
}

export default Login;