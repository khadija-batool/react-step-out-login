import React from 'react'
import Input from '../components/Input'
import ContainedBtn from "../components/ContainedBtn"
import OutlinedBtn from "../components/OutlinedBtn"
import Logo from "../assets/logo/Logo.png"

const login = () => {
  return (
    <div className='login wrapper'>
    <div className='warp'>
     <div className='logo'>
      <img src={Logo} />
     </div>
     <form>
      <h3 className='title'>Log In your account</h3>
      <p className='sub-title'>Please enter your login details.</p>
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password"/>
      <div className='remember-me'>
        <div>
          <input type="checkbox" className='checkbox'/>
        <p className='inline'>Remember Me</p></div>
        <div><p>Forgot Password?</p></div>
      </div>
      <div className='space'> <ContainedBtn />
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

export default login