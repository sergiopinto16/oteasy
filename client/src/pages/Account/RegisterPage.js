import { useState } from "react";
import './style.css'

import config from './../../config/config.json';
import PasswordAndConfirmPasswordValidation from "./password-and-confirm-passsord-validation/PasswordAndConfirmPasswordValidation"

const api_host = config.api.host
//' + api_host + ':' + api_port + '


export default function RegisterPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  let passwordOK = false;
  let password = "";

  const setPassword = (res, value) => {
    console.log(res + " | Password = " + value)
    passwordOK = res;
    password = value;
  }



  async function register(ev) {
    ev.preventDefault();

    console.log(name.length);
    console.log(email.length);
    console.log(passwordOK)
    console.log(password)

    if (name.length === 0 || email.length === 0 || !passwordOK || password.length === 0) {
      console.log("Fields not OK")
      alert("Fields not OK")
      return
    }

    const response = await fetch(api_host + '/api/user/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });


    if (response.status === 200) {
      alert('Registration successful');
    } else {
      alert('BD - registration failed');
    }
  }


  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
        placeholder="name"
        value={name}
        onChange={ev => setName(ev.target.value)} />
      <input type="email"
        placeholder="email"
        value={email}
        onChange={ev => setEmail(ev.target.value)} />
      <PasswordAndConfirmPasswordValidation callbackPasswordFunction={setPassword} />

      <button>Register</button>
    </form>
  );
}