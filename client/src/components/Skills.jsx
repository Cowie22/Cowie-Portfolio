import React from 'react';
import { Button, Modal, Row, Col, Container } from 'react-bootstrap';
import  { MdDesktopMac, MdCloudDone, MdWifi } from 'react-icons/md';

class Skills extends React.Component {
  render() {
    const DesktopIcon =
      <MdDesktopMac
        name="desktop_mac"
        size={40}
        color="#F09C60"
      />
    const CloudIcon =
      <MdCloudDone
        name="cloud_done"
        size={40}
        color="#F09C60"
      />
    const WifiIcon =
      <MdWifi
        name="wifi"
        size={40}
        color="#F09C60"
      />
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tech Skill Set
          </Modal.Title>
        </Modal.Header>
        <Modal.Header className="Modal-Skill-Header-Container">
          <h5 className="Model-Skills-Header">{DesktopIcon} {'  '} Front-End</h5>
          <h5 className="Model-Skills-Header">{CloudIcon} {'  '} Back-End</h5>
          <h5 className="Model-Skills-Header">{WifiIcon} {'  '} Other</h5>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <code>Javascript HTML5 CSS3 React.js/Redux React Native jQuery Axios Styled Components Styled Sheets Sass Webpack</code>
              </Col>
              <Col xs={6} md={4}>
                <code>RESTful APIs Node.js Express Amazon Web Services EC2 Docker MySQL Sequelize MongoDB Mongoose PostgreSQL NGINX Redis</code>
              </Col>
              <Col xs={6} md={4}>
                <code>Chai Mocha Jest Enzyme NPM Git NewRelic Loader.io Artillery Bootstrap Tmux</code>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} className="Modal-Button">CLOSE</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Skills