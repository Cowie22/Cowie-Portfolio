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
                <img src="https://cdn.onlinewebfonts.com/svg/img_411893.png" className="icons"/>
              </Nav.Link>
              <Nav.Link href="https://github.com/Cowie22">
                <img src="https://image.flaticon.com/icons/svg/25/25231.svg" className="icons"/>
              </Nav.Link>
              <Nav.Link href="mailto:rjcowie1@gmail.com">
                <img src="https://cdn4.iconfinder.com/data/icons/rounded-white-basic-ui/139/Mail02-RoundedWhite-512.png" className="icons"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default HeaderNav;