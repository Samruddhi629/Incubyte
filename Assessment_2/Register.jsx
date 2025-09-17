import React, { useState } from "react";

export default function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Register</h3>
      <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => onRegister({ username, password })}>Register</button>
    </div>
  );
}
