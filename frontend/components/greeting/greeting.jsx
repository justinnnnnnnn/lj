import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <ul>
      <li className="login-button"><Link to="/login">Log In</Link></li>
       <Link to="/signup"><li className="signup-button">Sign Up</li></Link>
      </ul>
      
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  
  console.log(currentUser)
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
