import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Logo from '../toucan.png';
import '../App.css';
function NavBar() {
  return (
    <div>
      <Navbar bg='light'>
        <Navbar.Brand href='#home' className='logoText'>
          <img
            alt=''
            src={Logo}
            className='d-inline-block align-top mr-2'
            style={{height:"50px", borderRadius:'10px'}}
          ></img>
          OptiNews
        </Navbar.Brand>
        <Nav
          className='ml-auto'
          style={{ fontFamily: 'Oxygen', marginRight: '20rem' }}
        >
          <NavDropdown
            title='Featured'
            id='collasible-nav-dropdown'
            style={{ fontFamily: 'Oxygen', marginRight: '-12rem' }}
            className='ml-auto'
          >
            <NavDropdown.Item href='#action/3.1'>Sports</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Politics</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Pop Culture</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>Misc.</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
