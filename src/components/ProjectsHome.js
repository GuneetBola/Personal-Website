import React from 'react';
import PROJECTSHOME from '../data/projectsHome';
import {CardGroup, Card, Button} from 'react-bootstrap';

const Project = props => {

    const {title, image, description, link1, link2, button1, button2} = props.project;

    return (
        <CardGroup style={{ display: 'inline-block', width: 350, margin: 10 }}>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                        
                    </Card.Text>
                    </Card.Body>
                <Card.Footer>
                <Button variant="dark" href={link1}>{button1}</Button>
                &nbsp;
                &nbsp;
                <Button variant="dark" href={link2}>{button2}</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

const Projects = () => (
    <div>
        <h2 className="col d-flex justify-content-center"> Highlighted Projects</h2>
        <div className="projectsCardHome col d-flex justify-content-center" style={{width: '%'}}>
        {
            PROJECTSHOME.map(PROJECT => (

                <Project key={PROJECT.id} project={PROJECT} />

            ))
        }
        </div>
    </div>

    )

export default Projects;