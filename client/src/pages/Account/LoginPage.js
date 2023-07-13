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
  

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch(api_host + '/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    console.log(response)
    if (response.ok) {
      response.json().then(userInfo => {
        console.log(userInfo);
        // console.log(userInfo.token)
        // localStorage.setItem('userInfo', userInfo.token);

        console.log("Redirect to home page!")
        window.location.replace("/");
        // setRedirect(true);

      });
    } else {
      //TODO - add not email registed, ...
      // console.log(response)
      if (response.status === 401) {
        alert('Please confirm email')
      }
      else {
        alert('wrong credentials');
      }
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