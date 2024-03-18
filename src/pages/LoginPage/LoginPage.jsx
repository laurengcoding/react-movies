import { useState } from "react";

export default function LoginPage({ setUser }) {

  const [username, setUsername] = useState('');
    
    function _handleUser(event) {
      event.preventDefault();
      setUser(username);
    }
  
    return (
      <form onSubmit={_handleUser}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
  