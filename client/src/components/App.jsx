import React from 'react';
import HeaderNav from './HeaderNav.jsx';
import HomePage from './HomePage.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      pagePosition: 0,
    }
    this.HandleModal = this.HandleModal.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handlePagePosition = this.handlePagePosition.bind(this);
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
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  handlePagePosition() {
    this.setState({
      pagePosition: window.pageYOffset
    })
  }

  render() {
    return (
      <div ref={this.homePageRef}>
        <HeaderNav
          handleScroll={this.handleScroll}
          aboutRef={this.aboutMeRef}
          homeRef={this.homePageRef}
          projectsRef={this.projectsRef}
          contactRef={this.contactRef}
        />
        <HomePage
          handleScroll={this.handleScroll}
          aboutRef={this.aboutMeRef}
        />
        <div ref={this.aboutMeRef}>
          <AboutMe />
          <ButtonToolbar>
            <Button
              variant="primary"
              onClick={() => this.HandleModal()}
              className="Skills-Button"
            >
              CLICK FOR SKILLS
            </Button>
            <Skills show={this.state.modalShow} onHide={this.HandleModal} />
          </ButtonToolbar>
          <img src="https://s3.amazonaws.com/user-media.venngage.com/563812-d79208fdff220fb9fbb753398711d687.png" className="Skills-Icon-One" />
          <img src="https://s3.amazonaws.com/user-media.venngage.com/563812-d79208fdff220fb9fbb753398711d687.png" className="Skills-Icon-Two" />
        </div>
        <div ref={this.projectsRef}>
          <Projects
            pagePosition={this.state.pagePosition}
          />
        </div>
        <div ref={this.contactRef}>
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;