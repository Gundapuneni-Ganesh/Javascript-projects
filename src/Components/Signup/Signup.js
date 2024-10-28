import React, { useState } from "react";
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const users = []; // Temporary storage, replace with API/database call in a real app

    const handleSignup = () => {
        
        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        
        setErrorMessage('');
        setSuccessMessage('Signup successful!');

        // Add the user to the array (you could replace this with an API call)
        users.push({ username, email, password });
        
        
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="SignupBlock">
            <h1 style={{ textAlign: "center" }}>Signup Page</h1>

            <div className="SignupForm">
                <div className="inp">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="inp">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="inp">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="inp">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                {errorMessage && <span className="error">{errorMessage}</span>}
                {successMessage && <span className="success">{successMessage}</span>}

                <div className="inp">
                    <button onClick={handleSignup}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
