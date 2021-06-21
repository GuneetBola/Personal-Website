import React, { Component } from 'react';
import profile from '../assets/profile.jpg';
import resume from '../assets/GuneetBolaResumeFinal.pdf';
import ProjectsHome from './ProjectsHome';
import {Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';
class Home extends Component {
    state = {displayBio: false}

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }
    

    render() {
        return(
            <div className="Home">
                <div className="mainpart col d-flex justify-content-center">
                    <img src={profile} alt='profile' className="profile"/>
                
                    <Jumbotron className= "jumbo">
                        <h1>Hello, world!</h1>
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <p> Who Am I? </p>
                            &nbsp;
                            &nbsp;
                            <Title />
                        </div>
                        
                        {/* { this.state.displayBio ? <Title /> : null} */}
                        
                        <p>
                        Welcome to my personal website. The goal of this website is to introduce myself to the world!
                        </p>
                        <p>Below you can find some of my recent projects and to learn more about them, check out the projects page!</p>
                        <p>Feel free to contact me by scrolling to the bottom of the page and clicking on the icons.</p>
                        <hr />
                        <p>Currently, I am a Honors Computer Science Student at the Univeristy of Waterloo and I working as a Developer for WIL programs at the University of Waterloo. Also, I am activley seeking Summer 2022 internships.</p>
                        <p> Here is my <a href = {resume} target = "_blank">resume</a>.</p>
                    </Jumbotron>
                </div>
                
       
               
                <ProjectsHome />
            </div>

        )
    }
}


export default Home;



