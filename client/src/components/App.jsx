import React from 'react';
import HeaderNav from './HeaderNav.jsx';
import HomePage from './HomePage.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    }
    this.HandleModal = this.HandleModal.bind(this);
  }
  HandleModal() {
    this.setState({
      modalShow: !this.state.modalShow,
    })
  }
  render() {
    return (
      <div>
        <HeaderNav />
        <HomePage />
        <div>
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
      </div>
    )
  }
}

export default App;