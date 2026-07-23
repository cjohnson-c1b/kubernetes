import React, { useState } from 'react';
import { Routes,Route,useNavigate } from 'react-router-dom';
import Home from './home/Home';
import Signup from './signup/Signup';
import './App.css';


function Login() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    // interact with backend
    e.preventDefault();
    const payload = {username: username, password: password};
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) 
        throw new Error(`HTTP error! Status: ${response.status}`);
      else
        navigate("/home"); 
      
      const data = await response.json();
      console.log('Success:', data);

    } catch (error) {
      console.error("Error logging in: ", error);
    }
  }

  function handleSignup() { navigate("/signup"); }

  return (
    <>
      <section id="center">
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit"> Login </button>
              <div className="signup-text" role="button" onClick={handleSignup}> Not a user? Click to sign up. </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
// -----------------------------------------------
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}
export default App;