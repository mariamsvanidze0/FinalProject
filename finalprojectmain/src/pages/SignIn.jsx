import React from 'react'
import { useLocation } from 'react-router-dom'
import SignInForm from '../components/SignInForm';

const SignIn = () => {

  const location = useLocation()
  console.log(location);
  return (
    <div>
      <h1>SignIn</h1>
          {location.state?.success && <h1>successfylly registered</h1>}
          <SignInForm/>

    </div>
  )
}

export default SignIn