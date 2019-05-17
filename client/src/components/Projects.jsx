import React from 'react';
import { Button, CardDeck, Card, Nav } from 'react-bootstrap';
import { MDBAnimation } from "mdbreact";
import styled from 'styled-components';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="Projects-Container">
        <div className="Projects-Title-Container">
          <h1 className="Projects-Title">PROJECTS</h1>
        </div>
        {this.props.pagePosition >= 1400 ?
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="https://media.giphy.com/media/W5aNHyICXRPGYWqtMt/giphy.gif" />
              <Card.Body>
                <Card.Title>ZoundLoud</Card.Title>
                <Card.Text>
                  1. Full stack music web application
                  <br></br>
                  2. React.js, Express, Node.js, MySQL, Sequelize, HTML,  Javascript ES6, Docker, AWS EC2, Styled Components
                  <br></br>
                  3. Utilized React.js and Styled Components to create an interactive and dynamic sound player microservice deployed with AWS EC2
                  <br></br>
                  4. Developed and deployed four instances of dockerized microservices on to AWS EC2 to containerize a full stack web application
                  <br></br>
                  5. Optimized service page load speed from 43 to 97 by minifying source bundle, fetching data on user request, and asynchronously loading blocking CSS
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Nav.Link href="https://github.com/ZoundLoud/Service-Cowie" target="_blank">
                  <img src="https://image.flaticon.com/icons/svg/25/25231.svg" className="project-icons"/>
                </Nav.Link>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://i.imgur.com/BC5igyL.gif" />
              <Card.Body>
                <Card.Title>Reservations For Four</Card.Title>
                <Card.Text>
                  1. Scalable backend and system design for a restaurant reservation web application
                  <br></br>
                  2. React.js, Express, Node.js, PostgreSQL, AWS EC2, Tmux, NGINX,  Loader.io, New Relic, Artillery.io, Redis
                  <br></br>
                  3. Inherited legacy codebase and redesigned a scalable backend, in order to achieve web-scale traffic
                  <br></br>
                  4. Increased throughput by 1000% to 1880 RPS utilizing horizontal scaling (6 AWS EC2 machines and 3 database replications), an NGINX load balancer, and a Redis Cache
                  <br></br>
                  5. Benchmarked PostgreSQL and MongoDB with databases of 140 million records to determine optimal query performance for my microservice
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Nav.Link href="https://github.com/17000-or-bust/photos" target="_blank">
                  <img src="https://image.flaticon.com/icons/svg/25/25231.svg" className="project-icons"/>
                </Nav.Link>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://media.giphy.com/media/JRIwx1VzsyZsr3TL6h/giphy.gif" />
              <Card.Body>
                <Card.Title>N-Star</Card.Title>
                <Card.Text>
                  1. Full stack interactive Ski-Resort-Map application
                  <br></br>
                  2. React.js, Express, Node.js, MySQL, HTML, Javascript ES6, Styled Components, Axios
                  <br></br>
                  3. Designed a full stack, interactive Ski-Resort-Map, which allows users to navigate the various trails, lifts, accommodations, etc.
                  <br></br>
                  4. Implemented intuitive and visually stimulating UI/UX, which allows users to conveniently obtain pertinent resort information, as well as record personal information
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Nav.Link href="https://github.com/Cowie22/hrsf110-mvp" target="_blank">
                  <img src="https://image.flaticon.com/icons/svg/25/25231.svg" className="project-icons"/>
                </Nav.Link>
              </Card.Footer>
            </Card>
          </CardDeck>
        :
        <div>

        </div>
        }
      </div>
    )
  }
}

export default Projects