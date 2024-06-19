import React from 'react';
import routes from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContextProvider';
import { signOut } from '../context/appActionCreators';
import '../components/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useAppContext()
  const result = Object.entries(routes);

  return (
    <nav>
      {state.user?.userName && <h1>Hello {state.user.userName}</h1> }
      {result.map(([key, value]) => (
        <button key={key} onClick={() => navigate(value)}>
          {key}
        </button>
      ))}

      <button onClick={() => {
        dispatch(signOut())
      }}>Sign Out</button>
    </nav>
  )
}

export default Navbar;
