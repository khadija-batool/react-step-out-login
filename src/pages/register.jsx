import React from 'react'
import { images } from '../config'
import Input from '../components/Input'
import ContainedBtn from '../components/ContainedBtn'
import OutlinedBtn from '../components/OutlinedBtn'

export const Register = () => {
  return (
    <div className='auth-wrapper'>
      <div className="auth-container">
        <div className="logo">
          <img src={images.logo} alt="" className='img-fluid'/>
        </div>
        <form action="" className="auth-form">
          <h3 className='h3'>Create An Account.</h3>
          <p className='p '>Please enter below details to get registered!</p>
          <div className="split-inputs">
            <Input type='text' placeholder='First Name' name='firstName'/>
            <Input type='text' placeholder='Last Name' name='lastName' />
          </div>
      <Input name="Date of birth" type="date" placeholder="Date of birth" />
      <Input name="Email" type="email" placeholder="Email" />
      <Input name="Username" type="text" placeholder="Username" />

          <div className=' terms'>
            <input type="checkbox" className='checkbox'/>
            <p className='p inline'>Accept terms and Conditions</p>
          </div>
          <OutlinedBtn />
          <hr />
          <p className='p'>Already have an account</p>
          <ContainedBtn/>
        </form>
      </div>
    </div>
  )
}
