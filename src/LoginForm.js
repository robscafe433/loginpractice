// import { login } from './utils';
import { useState } from 'react';
import './styles.css';
// Practicing a login function inputs and async

// ================ LOGIN FORM ====================
//
// Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  * The login button should trigger the login() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={'email'}>Email</label>
        <input id={'email'} type={'email'} value={email} />
      </div>
      <div className="row">
        <label htmlFor={'password'}>Password</label>
        <input id={'password'} type={'password'} value={password} />
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage"></div>

      <div className="button">
        <button>Login</button>
      </div>
    </div>
  );
}
