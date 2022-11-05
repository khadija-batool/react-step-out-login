import React from 'react'
import {Route, Routes as Router} from 'react-router-dom';
import {Navigations} from '../config'
import {Register, Login} from '../pages'


export const Routes = () => {
  return (<Router>
    <Route path={Navigations.LOGIN} element={<Login />} />
    <Route path={Navigations.REGISTER} element={<Register />} />

  </Router>
  )
} 