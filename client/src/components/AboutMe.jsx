import React from 'react';
import Roxy from '../../public/photos/Roxy.png';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="AboutMe-Container">
        <div className="AboutMe-Title-Container">
          <h1 className="AboutMe-Title">ABOUT</h1>
        </div>
        <div className="AboutMe-Photo-Container">
          <img src={Roxy} className="AboutMe-Photo" />
        </div>
        <div className="AboutMe-Info-Container">
          <h3 className="Who">Who Is This Guy?</h3>
          <p className="AboutMe-Info">
            I am a passionate and diligent Full-Stack Software Engineer with extensive experience in Javascript, Node, React, SQL/NoSQL databases and many other modern full-stack frameworks. I truly get excited to wake up everyday and spend hours coding. I know it sounds cheesy, but it is true!  I love the constant challenges that this field provides and I’m always eager to learn new techniques, in order to stay competitive.
            </p>
            <p className="AboutMe-Info">
            Before finding my true passion in coding, I graduated from UCLA with a degree in Environmental Studies.  I have a strong belief that the preservation of our environment needs to be of primary concern and sustainable practices should be utilized by everyone.  I would love to one day use my skills as a software engineer to help achieve environmental sustainability.
          </p>
          <p className="AboutMe-Info">
            I grew up in Lake Tahoe, California, so other interest of mine are sports and several outdoor activities.  I also have a passion for music and music festivals.
          </p>
        </div>
      </div>
    )
  }
}

export default AboutMe