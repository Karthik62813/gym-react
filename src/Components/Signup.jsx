import React from 'react'
import { Link } from 'react-router-dom'
 
function Signup() {
  return (
    <div className='login-body'>
      <div className='login'>
        <h1>Signup</h1>
        <p>Username:</p>
        <input type="text" required/>
        <p>Email:</p>
        <input type="email" required/>
        <p>Mobile No:</p>
        <input type="number" required/>
        <p>Password:</p>
        <input type="password" required/><br />
        <Link to='/login'><button className='login-btn'>Submit</button></Link>
      </div>
    </div>
  )
}

export default Signup
