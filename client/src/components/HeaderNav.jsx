import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import LinkedIn from '../../public/photos/linkedin.png';
import HeadShake from 'react-reveal/HeadShake';
// import LinkedIn from '../../public/photos/linkedin.webp';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { hovered, handleHover, handleLeave } = this.props;
    return (
      <div>
        <Navbar className="navbar fixed-top">
          <Navbar.Brand
            onClick={() => this.props.handleScroll(this.props.homeRef)}
          >
          Ryan Cowie
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                onClick={() => this.props.handleScroll(this.props.homeRef)}
              >
              Home
              </Nav.Link>
              <Nav.Link href="" onClick={() => this.props.handleScroll(this.props.aboutRef)}>About Me</Nav.Link>
              <Nav.Link href="" onClick={() => this.props.handleScroll(this.props.projectsRef)}>Projects</Nav.Link>
              <Nav.Link href="" onClick={() => this.props.handleScroll(this.props.contactRef)}>Contact</Nav.Link>
              <Nav.Link href="https://docs.google.com/document/d/11hgxIBPsteUHVKVy9yBPP1fnsqP5X5J2ezwiWdasrIY/edit?usp=sharing" target="_blank">Resume</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <HeadShake
              duration={2000}
              when={hovered === 2}
            >
              <Nav.Link
              href="https://www.linkedin.com/in/ryan-cowie/" target="_blank"
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleLeave()}
              >
                <img src="https://cdn.onlinewebfonts.com/svg/img_411893.png" className="icons"/>
              </Nav.Link>
            </HeadShake>
            <HeadShake
              duration={2000}
              when={hovered === 3}
            >
              <Nav.Link
              href="https://github.com/Cowie22" target="_blank"
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={() => handleLeave()}
              >
                <img src="https://image.flaticon.com/icons/svg/25/25231.svg" className="icons"/>
              </Nav.Link>
            </HeadShake>
            <HeadShake
              duration={2000}
              when={hovered === 4}
            >
              <Nav.Link
              href="mailto:rjcowie1@gmail.com" target="_blank"
              onMouseEnter={() => handleHover(4)}
              onMouseLeave={() => handleLeave()}
              >
                <img src="https://cdn4.iconfinder.com/data/icons/rounded-white-basic-ui/139/Mail02-RoundedWhite-512.png" className="icons"/>
              </Nav.Link>
            </HeadShake>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default HeaderNav;