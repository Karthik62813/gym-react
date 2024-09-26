import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';

function Login() {
  return (
    <div className='login-body'>
      <div className='login'>
        <h1>Login</h1>
        <p><AccountCircleIcon />Username:</p>
        <input type="text" required/>
        <p><PasswordIcon/>Password:</p>
        <input type="password" required/><br />
        <Link to='/home'><button className='login-btn'>Login</button></Link><br />
        <a>Forgot Password?</a>
        <Link to='/signup'> <a>Signup</a></Link>
      </div>
    </div>
  )
}

export default Login
