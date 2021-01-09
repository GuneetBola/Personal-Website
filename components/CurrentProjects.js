import React, { Component } from 'react';
import CURRENTPROJECTS from '../data/currentProjects';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

class CurrentProject extends Component {
    state = {displayBio: false}

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        console.log('this.props',this.props);
        const {title, image, description} = this.props.currentproject;

        return (
            <div className="projectsCard col d-flex justify-content-center">
                <Card style={{ width: '35rem', margin: '30px'}}>           
                    <Card.Img variant="top" src={image} alt='profile'/>

                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

class CurrentProjects extends Component {
    render() {
        return(
            <div>
                <h2 style={{marginLeft:'100px'}}> Current Projects</h2>
                <div>
                {
                    CURRENTPROJECTS.map(CURRENTPROJECT => {
                        return(
                        <CurrentProject key={CURRENTPROJECT.id} currentproject={CURRENTPROJECT} />
                        );
                    })
                }
                </div>
            </div>
        )
    }
}

export default CurrentProjects;

