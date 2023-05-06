import {useState} from "react";
import './style.css'




import config  from './../../config/config.json';

const api_host = config.api.host
//' + api_host + ':' + api_port + '


export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch(api_host + '/api/user/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Register</button>
    </form>
  );
}