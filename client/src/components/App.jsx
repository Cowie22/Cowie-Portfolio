import React from 'react';
import HeaderNav from './HeaderNav.jsx';
import HomePage from './HomePage.jsx';
import AboutMe from './AboutMe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <HeaderNav />
        <HomePage />
        <AboutMe />
      </div>
    )
  }
}

export default App;