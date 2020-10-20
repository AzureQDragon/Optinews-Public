import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../LogoToucan.svg';
import '../App.css';
function NavBar() {
  return (
    <div>
      <Navbar bg='light'>
        <Navbar.Brand href='#home' className='logoText'>
          <img
            alt=''
            src={Logo}
            className='d-inline-block align-top'
          />{' '}
          OptiNews
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavBar;
