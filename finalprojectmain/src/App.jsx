import React from 'react';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>app</h1>
      <Navbar/>
     <AppRoutes/>
    </div>
  );
}

export default App;
