import React from 'react'
import { useAppContext } from '../context/AppContextProvider'
import { useNavigate } from 'react-router-dom';
import routes from '../constants/routes';

const AuthGuard = ({children}) => {
    const {state} = useAppContext();
    const navigate = useNavigate();

    if(!state.isUserLoggedIn) {
         return (<div>
            <h1>
                you are not signed in
            </h1>
            <button onClick={() => {navigate(routes.signIn)}}>Sign In</button>
            <button onClick={() => {navigate(routes.signUp)}}>Sign Up</button>
         </div>)
    }
  return (
    <>{children}</>
  )
}

export default AuthGuard