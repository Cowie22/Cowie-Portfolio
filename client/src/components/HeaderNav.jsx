import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import LinkedIn from '../../public/photos/linkedin.png';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Navbar className="navbar fixed-top">
          <Navbar.Brand

          >
          Ryan Cowie
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
              >
              Home
              </Nav.Link>
              <Nav.Link href="">About Me</Nav.Link>
              <Nav.Link href="">Projects</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
              <Nav.Link href="https://docs.google.com/document/d/11hgxIBPsteUHVKVy9yBPP1fnsqP5X5J2ezwiWdasrIY/edit?usp=sharing">Resume</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="https://www.linkedin.com/in/ryan-cowie/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2kgBiWI39vSTYfxtJOnyqHEvR9l6wbwCyj39yyUrnneoTUyfhRQ" className="icons"/>
              </Nav.Link>
              <Nav.Link href="https://github.com/Cowie22">
                <img src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png" className="icons"/>
              </Nav.Link>
              <Nav.Link href="mailto:rjcowie1@gmail.com">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwzz9zVRXTz7nf8e7r1rd2WU3Ls9ut13fyTz31oq3DSGp4JNe" className="icons"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default HeaderNav;