import React from 'react';
import CowiePhoto from '../../public/photos/Portfolio-Photo.png';
import  { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewable: false,
    }
    this.handleViewable = this.handleViewable.bind(this);
  }
  componentDidMount() {
    this.handleViewable()
  }
  // Handles initial animation and is controlled on component did mount so it is the first thing the user sees
  // The title, button and weather all controlled by this animation call
  handleViewable() {
    this.setState({
      viewable: true,
    })
  }
  render() {
    const arrowUpIcon =
      <MdArrowDropUp
        name="arrow_drop_up"
        size={40}
        color="white"
        transition={'0.3s ease-in'}
      />
    const arrowDownIcon =
      <MdArrowDropDown
        name="arrow_drop_down"
        size={40}
        color="#F09C60"
      />
    const { hovered, handleScroll, aboutRef, handleHover, handleLeave } = this.props;
    const { viewable } = this.state;
    return (
      <div className="Home-Page-Container">
        <Slide
          down
          when={viewable}
          duration={1800}
        >
          <div className="Cowie-Photo-Container">
            <img src={CowiePhoto} alt="" className="Cowie-Photo" />
          </div>
        </Slide>
        <div className="Home-Info-Container">
        <Slide
          left
          when={viewable}
          duration={1800}
        >
          <h1>Hello, I'm Ryan Cowie.</h1>
        </Slide>
        <Slide
          right
          when={viewable}
          duration={1800}
        >
          <h1>I'm a Full-Stack Software Engineer,</h1>
          <h1>Based in San Francisco, CA.</h1>
        </Slide>
        </div>
        <Fade
          up
          when={viewable}
          duration={4000}
          distance={'500px'}
        >
          <div className="Home-Button-Container">
            <button
              className="Home-Button"
              onClick={() => handleScroll(aboutRef)}
              onMouseEnter={() => setTimeout(() => handleHover(1), 300)}
              onMouseLeave={() => setTimeout(handleLeave, 300)}
            >
            View My Work{'  '}{hovered === 1 ? arrowDownIcon : arrowUpIcon}
            </button>
          </div>
        </Fade>
      </div>
    )
  }
}

export default HomePage