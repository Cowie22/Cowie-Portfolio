import React from 'react';
import { Button, CardDeck, Card } from 'react-bootstrap';
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
        {this.props.pagePosition >= 1600 ?
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="https://media.giphy.com/media/W5aNHyICXRPGYWqtMt/giphy.gif" />
              <Card.Body>
                <Card.Title>ZoundLoud</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://i.imgur.com/BC5igyL.gif" />
              <Card.Body>
                <Card.Title>Reservation For Four</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://media.giphy.com/media/JRIwx1VzsyZsr3TL6h/giphy.gif" />
              <Card.Body>
                <Card.Title>N-Star</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
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