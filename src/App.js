
import './App.css';

const API_URL = "http://sefdb02.qut.edu.au:3001"

function App() {
  function login() {
    const url = `${API_URL}/user/login`

    return fetch(url, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({email: "mike@gmail.com", password: "password"})

    })
    .then(res => res.json())
    .then(res => console.log(res));
  }

  function logout() {
    const url = `${API_URL}/user/login`
    let token = localStorage.getItem("token");

    return fetch(url, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({email: "mike@gmail.com", password: "password"})

    })
    .then(res => res.json())
    .then(res => console.log(res));
  }
  return (
    <div className="App">
      <h1>JWT Token Example</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
