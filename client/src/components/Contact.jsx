import React from 'react';
import { Nav } from 'react-bootstrap';
import CowieBoard from '../../public/photos/Portfolio-Snowboard.png';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="Contact-Container">
        <div className="Contact-Title-Container">
          <h1 className="Contact-Title">CONTACT</h1>
        </div>
        <div className="Contact-Info-Container">
          <div className="Contact-Text">
          <Nav.Link href="https://github.com/Cowie22" target="_blank">
            <img src="https://image.flaticon.com/icons/svg/25/25231.svg" className="project-icons"/>
            <p className="Contact-Info-Text">github.com/Cowie22</p>
          </Nav.Link>
          </div>
          <div className="Contact-Text">
          <Nav.Link href="https://www.linkedin.com/in/ryan-cowie/" target="_blank">
            <img src="https://cdn.onlinewebfonts.com/svg/img_411893.png" className="project-icons"/>
            <p className="Contact-Info-Text">linkedin.com/in/ryan-cowie</p>
          </Nav.Link>
          </div>
          <div className="Contact-Text">
          <Nav.Link href="mailto:rjcowie1@gmail.com" target="_blank">
            <img src="https://cdn4.iconfinder.com/data/icons/rounded-white-basic-ui/139/Mail02-RoundedWhite-512.png" className="project-icons"/>
            <p className="Contact-Info-Text">rjcowie1@gmail.com</p>
          </Nav.Link>
          </div>
        </div>
          <div className="Cowie-Snowboard-Container">
           <div className="Contact-Text-Two">
            <img src="https://static.thenounproject.com/png/21502-200.png" className="project-icons"/>
            <p className="Contact-Info-Text-Two">San Francisco, CA</p>
          </div>
          <img src={CowieBoard} className="Cowie-Snowboard" />
          <div className="Contact-Text-Two">
            <img src="https://cdn.pixabay.com/photo/2015/12/03/07/40/telephone-1073866__340.png" className="project-icons"/>
            <p className="Contact-Info-Text-Two">(530)-277-2232</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact