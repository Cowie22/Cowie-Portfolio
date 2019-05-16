import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Navbar>
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
              <Nav.Link href="https://www.linkedin.com/in/ryan-cowie/">LinkedIn</Nav.Link>
              <Nav.Link href="https://github.com/Cowie22">GitHub</Nav.Link>
              <Nav.Link href="mailto:rjcowie1@gmail.com">Email</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item
                className="header-dropdown"
                >
                LOST Vegas New Years
                </NavDropdown.Item>
                <NavDropdown.Item
                className="header-dropdown"
                >
                LOST Angeles
                </NavDropdown.Item>
                <NavDropdown.Item
                className="header-dropdown"
                >
                Captain Molasky's Disco Jungle
                </NavDropdown.Item>
                <NavDropdown.Item
                className="header-dropdown"
                >
                LOST Campout
                </NavDropdown.Item>
                <NavDropdown.Item
                className="header-dropdown"
                >
                LOST In Transit
                </NavDropdown.Item>
                <NavDropdown.Item
                className="header-dropdown"
                >
                Minimal Effort: NYE
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                className="header-dropdown"
                >
                Join Mailing List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default HeaderNav;