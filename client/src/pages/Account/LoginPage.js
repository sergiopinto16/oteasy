import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import './style.css'




import config from './../../config/config.json';

const api_host = config.api.host
//' + api_host + ':' + api_port + '


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch(api_host + '/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        console.log("Redirect to home page!")
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="email"
        placeholder="email"
        value={email}
        onChange={ev => setEmail(ev.target.value)} />
      <input type="password"
        placeholder="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)} />
      <button>Login</button>
    </form>
  );
}