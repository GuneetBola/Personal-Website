import React, { Component } from 'react';
import CurrentProjects from './CurrentProjects';
import PROJECTS from '../data/projects';
import {Button, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Project extends Component {
    state = {displayBio: false}

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }



    render() {

        console.log('this.props',this.props);
        const {title, image1, image2, image3, description, programminglanguages,
            link1, link2, button1, button2, descriptionFull} = this.props.project;

        return (
            <div className="projectsCard col d-flex justify-content-center">
                <Card style={{ width: '35rem', margin: '30px'}}>           
                
                <Carousel>
                    <Carousel.Item >
                        <Card.Img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <Card.Img 
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <Card.Img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>


                    <Card.Body>
                        <Card.Title>
                            {title}
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Button variant='light' href={link1}>{button1}</Button>
                            &nbsp;
                            &nbsp;
                            <Button variant='light' href={link2}>{button2}</Button>
                        </Card.Title>
                        <Card.Text>
                        {description}

                        </Card.Text>
                        <Card.Text>
                        {
                            this.state.displayBio ? ( 
                            <div>
                                <p>{descriptionFull}</p>
                                <Button variant='dark' onClick={this.toggleDisplayBio} style={{align: "right"}} >Show Less</Button>
                            </div>
                            ) : (
                            <div>
                                <Button variant='dark' onClick={this.toggleDisplayBio} style={{align: "right"}}>Read More</Button>
                            </div>
                            )

                        }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


class Projects extends Component {
    render() {
        return(
            <div>
                <hr />
                <h2 style={{marginLeft:'100px'}}> Projects</h2>
                <div>
                {
                    PROJECTS.map(PROJECT => {
                        return(
                        <Project key={PROJECT.id} project={PROJECT} />
                        );
                    })
                }
                </div>

                <CurrentProjects />
            </div>

        )
    }
}

export default Projects;