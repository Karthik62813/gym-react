import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Link to='/home'> <button>Login</button></Link>
      <Link to='/signup'><a>Signup here</a></Link>
    </div>
  )
}

export default Login
