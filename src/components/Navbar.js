import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src="/images/react-logo.png" alt="" className="react__logo"></img>
      <h3 className='react__logo--text'>ReactFacts</h3>
      <div className='toggler'>
        <p className='toggler__light'>Light</p>
        <div className='toggler__slider' onClick={props.toggleDarkMode}>
          <div className='toggler__slider--circle'></div>
        </div>
        <p className='toggler__dark'>Dark</p>
      </div>
    </nav>
  );
}
