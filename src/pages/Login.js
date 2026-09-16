import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Fill all fields!");
      return;
    }

    if (username === "admin" && password === "1234") {
      localStorage.setItem("user", username);
      setUser(username);
      alert("Login Successful 🎉");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="login">
      <h2>🎬 Movie App Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;