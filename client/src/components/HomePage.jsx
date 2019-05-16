import React from 'react';
import CowiePhoto from '../../public/photos/Portfolio-Photo.png';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="Home-Page-Container">
        <div className="Cowie-Photo-Container">
          <img src={CowiePhoto} alt="" className="Cowie-Photo" />
        </div>
        <div className="Home-Info-Container">
          <h1>Hello, I'm Ryan Cowie.</h1>
          <h1>I'm a Full-Stack Software Engineer,</h1>
          <h1>Based in San Francisco, CA.</h1>
        </div>
        <div className="Home-Button-Container">
          <button className="Home-Button">View My Work</button>
        </div>
      </div>
    )
  }
}

export default HomePage