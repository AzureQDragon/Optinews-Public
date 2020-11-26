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
          <NavDropdown
            title='Featured'
            id='collasible-nav-dropdown'
            style={{ fontFamily: 'Oxygen', marginRight: '-12rem' }}
            className='ml-auto'
          >
            <NavDropdown.Item onClick={() => props.setFeature("Sports") }>Sports</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("Politics")}>Politics</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("Pop Culture")}>Pop Culture</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("Misc.")}>Misc.</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("Bayern")}>Bayern</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("College")}>College</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("as")}>Things with "as"</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature("Texas")}>Texas</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.setFeature(null)}>Reset</NavDropdown.Item>


          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
