import React from 'react'
import Input from '../components/Input'
import ContainedBtn from "../components/ContainedBtn"
import OutlinedBtn from "../components/OutlinedBtn"
import { images } from '../config'

export const Login = () => {
  return (
    <div className='login wrapper'>
    <div className='auth-wrapper '>
     <div className='logo'>
      <img src={images.logo} />
     </div>
     <form className='auth-form spaces'>
      <h3 className='h3'>Log In your account</h3>
      <p className='p'>Please enter your login details.</p>
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password"/>
      <div className='remember-me'>
        <div className='terms'>
          <input type="checkbox" className='checkbox'/>
        <p className='inline'>Remember Me</p></div>
        <div><p>Forgot Password?</p></div>
      </div>
      <div className='space'> 
      <ContainedBtn />
       </div>
       <hr />
       <div>
      <p className='sub-title'>Don't have an account?</p>
         <OutlinedBtn />
       </div>
     </form>
    </div>
    </div>
  )
}