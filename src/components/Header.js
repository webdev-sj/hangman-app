// import the necessary dependencies and components
import React from 'react';
import logo from "../stickManLogo.png"


// function to refresh page
const refreshPage = () => {
  window.location.reload(false);
}

// Header function which receives props showRules, toggleRules, toggleHistory, and showHistory
const Header = ({ showRules, toggleRules, toggleHistory , showHistory }) => {
  return (
    <div className='navbar-div'>
      <nav>
          <img className='logo' src={logo} alt="Logo" />  
            <div className='nav-btn'>
              <button className='help-btn' onClick={toggleRules}>
                {showRules ? 'Hide Help' : 'Help'}
              </button>
              <button className='nav-btns' onClick={toggleHistory}>
                {showHistory ? 'Hide History' : 'History'}
              </button>
                <button className='nav-btns' onClick={refreshPage}>Restart</button>
            </div>
      </nav>
 </div>
  )
}

// export Header
export default Header;