import React, { useState } from 'react';
import '../App.css';


function Signup() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");

  async function handleSignup() {
    // confirm password
    if(password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // api call
    const payload = {username: username, password: password};
    try {
      const response = await fetch('/api/signup', {
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
      navigate('/')

    } catch (error) {
      console.error("Error creating account: ", error);
    }
  }


  return (
    <>
      <section id="center">
        <div className="signup-container">
          <div className="signup-box">
            <h2> Sign Up </h2>

            <form onSubmit={handleSignup}>
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

              <div className="form-group">
                <input
                  type="password"
                  value={confirmPassword}
                  placeholder="Re-enter your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit"> Signup </button>
            </form>
          </div>
        </div>
      </section>
    </>
    
  );
}

export default Signup;