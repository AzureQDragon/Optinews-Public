import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Logo from '../toucan.png';
import '../App.css';
function NavBar(props) {
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
          <Nav.Link
            style={{ fontFamily: 'Oxygen'}}
            id='home-link'
            className='ml-auto'
            href="/">Home</Nav.Link>
          <Nav.Link
            style={{ fontFamily: 'Oxygen'}}
            id='about-link'
            className='ml-auto'
            href="/About">About</Nav.Link>
          <NavDropdown
            title={props.feature || 'featured'}
            id='collasible-nav-dropdown'
            style={{ fontFamily: 'Oxygen', marginRight: '-12rem' }}
            className='ml-auto'
          >
            <NavDropdown.Item onClick={() => props.setFeature("entertainment") }>Entertainment</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("people") }>People</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("business")}>Business</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("government")}>Government</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("sports")}>Sports</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("technology")}>Technology</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature(null)}>Reset</NavDropdown.Item>




          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
