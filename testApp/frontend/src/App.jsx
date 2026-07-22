import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './home/Home';
import './App.css';


function Login() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  async function handleLogin() {
    // interact with backend
    const payload = {username: username, password: password};

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  }

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

              <button type="submit">
                Login
              </button>
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
    </Routes>
  );
}
export default App;