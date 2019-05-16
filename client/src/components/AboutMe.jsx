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
      <div>
        <div>
          <img src={Roxy} />
        </div>
        <div className="AboutMe-Info-Container">
          <p className="AboutMe-Info">
            I am a full-stack software engineer with extensive experience in Javascript, Node, React, SQL/NoSQL databases and other modern full-stack frameworks. I truly get excited to wake up everyday and spend hours coding. I know it sounds cheesy, but it is true!  I love the constant challenges that this field provides and I’m always eager to learn new techniques, in order to stay competitive.  I simply enjoy coding and often use my free time to work on personal projects.  Improving the UI/UX, adding new features and just making them all around cooler!

            One characteristic I constantly here from my mentors and peers is that I have incredible work ethic.  I take great pride in my work and will constantly fight to make the projects the best they can be.  I’m excited to work on a team with similar passion and drive.  Furthermore, I want to work on a team with great culture.  It would be amazing to want to go to work everyday because the team enjoys and supports one other.
          </p>
        </div>

      </div>
    )
  }
}

export default AboutMe