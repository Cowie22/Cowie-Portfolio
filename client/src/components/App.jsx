import React from 'react';
import HeaderNav from './HeaderNav.jsx';
import HomePage from './HomePage.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      pagePosition: 0,
      hovered: 0,
      aboutClicked: false,
    }
    this.HandleModal = this.HandleModal.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handlePagePosition = this.handlePagePosition.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.homePageRef = React.createRef();
    this.aboutMeRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePagePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePagePosition);
  }

  HandleModal() {
    this.setState({
      modalShow: !this.state.modalShow,
    })
  }

  handleScroll(ref) {
    ref === this.aboutMeRef ? this.state.aboutClicked = true : false;
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  handlePagePosition() {
    this.setState({
      pagePosition: window.pageYOffset
    })
    console.log(this.state.pagePosition)
  }

  // Following two functions handle the hovered cases for any icons/buttons so that a boolean
  // Can be set up.  And if the boolean condition is met, an animation will occur
  handleHover(id) {
    this.setState({
      hovered: id,
    })
  }

  handleLeave() {
    this.setState({
      hovered: 0,
    })
  }

  render() {
    const { modalShow, pagePosition, hovered, aboutClicked } = this.state;
    return (
      <div ref={this.homePageRef}>
        <HeaderNav
          handleScroll={this.handleScroll}
          aboutRef={this.aboutMeRef}
          homeRef={this.homePageRef}
          projectsRef={this.projectsRef}
          contactRef={this.contactRef}
          hovered={hovered}
          handleHover={this.handleHover}
          handleLeave={this.handleLeave}
        />
        <HomePage
          handleScroll={this.handleScroll}
          aboutRef={this.aboutMeRef}
          hovered={hovered}
          handleHover={this.handleHover}
          handleLeave={this.handleLeave}
        />
        <div ref={this.aboutMeRef}>
          <AboutMe
            pagePosition={pagePosition}
          />
          <div>
            <ButtonToolbar>
              <Button
                variant="primary"
                onClick={() => this.HandleModal()}
                className="Skills-Button"
              >
                CLICK FOR SKILLS
              </Button>
              <Skills show={modalShow} onHide={this.HandleModal} />
            </ButtonToolbar>
            <img src="https://s3.amazonaws.com/user-media.venngage.com/563812-d79208fdff220fb9fbb753398711d687.png" className="Skills-Icon-One" />
            <img src="https://s3.amazonaws.com/user-media.venngage.com/563812-d79208fdff220fb9fbb753398711d687.png" className="Skills-Icon-Two" />
          </div>
        </div>
        <div ref={this.projectsRef}>
          <Projects
            pagePosition={pagePosition}
          />
        </div>
        <div ref={this.contactRef}>
          <Contact
            pagePosition={pagePosition}
          />
        </div>
      </div>
    )
  }
}

export default App;