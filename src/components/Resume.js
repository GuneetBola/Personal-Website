import React, { Component } from 'react';
import {Button, Card} from 'react-bootstrap';
import ResumePDF from '../assets/resumenew.pdf'

class Resume extends Component {
    onResumeClick() {
        window.open(ResumePDF);
      }
    render() {
        return(
            <div className="Resume " style={{flex: 1, flexWrap: 'wrap'}}>
                
                <span className="topResume" style={{textAlign:'center', marginBottom:'200px'}}>
                    <br />
                    <br />
                    <br />
                    <h2 > Resume </h2> 
                    <Button style={{marginBottom:'50px'}}
                        variant='dark' href={ResumePDF} className="btn">
                            Resume PDF
                    </Button>
                </span>



                <div className="resumeCards">
                <div className="workexperience">
                    <h4>Work Experience</h4>
                    <div className="MathMagician">
                        <Card className="resumeCard">
                            <Card.Header className="cardHeader">Work Experience</Card.Header>
                            <Card.Body>
                                <Card.Title>MathMagician Tutoring Centre</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Math and Science Tutor for all ages</li>
                                        <li>Evidence of gradual improvement in terms of grades by at least 15% seen</li>
                                        <li>Encouraged curiosty and motivation to learn in a fast-paced environment</li>
                                        <li><em>07/2019-07/2020</em></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div className="projects">
                    <h4>Projects</h4>
                    <div className="musicsearcher">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Projects</Card.Header>
                            <Card.Body>
                                <Card.Title>Artist Searcher</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Implemented an online search engine where users can search 1000+ musicians and find top tracks </li>
                                        <li>Included audio for each relevant track using the Spotify API</li>
                                        <li>HTML, CSS, and React.js</li>
                                        <li><em>01/2021</em></li>
                                    </ul>
                                </Card.Text>
                                <Card.Text>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Button variant='dark' href='https://artistsearcher.netlify.app/'>Go to Site</Button>
                                    &nbsp;
                                    &nbsp;
                                    <Button variant='dark' href='https://github.com/GuneetBola/Artist-Search'>GitHub</Button>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="stocktrader">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Projects</Card.Header>
                            <Card.Body>
                                <Card.Title>Stock Trader-Finance</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Developed a trading platform that allows users to create an account and trade stocks in real-time. </li>
                                        <li>Used HTML, CSS, SQL, Python and an API containing relevant information of the stock market.</li>
                                        <li>Goal of website is to give users the opportunity to practice online before actually trading in the stock market.</li>
                                        <li><em>12/2020</em></li>
                                    </ul>
                                </Card.Text>
                                <Card.Text>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Button variant='dark' href='https://youtu.be/rnLiO9T7Z8g'>Youtube Video</Button>
                                    &nbsp;
                                    &nbsp;
                                    <Button variant='dark' href='https://github.com/GuneetBola/Stock-Trader-CS50'>GitHub</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="climatebots">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Projects</Card.Header>
                            <Card.Body>
                                <Card.Title>Climate Bots</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Worked with a group at Set Hacks</li>
                                        <li>Encouraged youth to engage in climate action by learning long-term sustainable actions</li>
                                        <li>Collaborated to create many elements such as a registration/login page, contact form and a trivia game</li>
                                        <li>HTML, CSS, SQL, JavaScript, and Python with a team</li>
                                        <li><em>07/2020</em></li>
                                    </ul>
                                </Card.Text>
                                <Card.Text>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Button variant='dark' href='https://www.youtube.com/watch?v=foM7h-vBahU&feature=youtu.be&ab_channel=AnjaliGupta'>Youtube Video</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="Personal Website">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Projects</Card.Header>
                            <Card.Body>
                                <Card.Title>Personal Wesbite</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>This Website!</li>
                                        <li>Designed a website which includes an online resume, projects, and contact information</li>
                                        <li>HTML, CSS, JavaScript, and React.JS</li>
                                        <li><em>06/2020</em></li>
                                    </ul>
                                </Card.Text>
                                <Card.Text>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Button variant='dark' href='https://github.com/GuneetBola/Stock-Trader-CS50'>GitHub</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div className="education">
                    <h4>Education</h4>
                    <div className="waterloo">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Education</Card.Header>
                            <Card.Body>
                                <Card.Title>University of Waterloo</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Honors Bachelors of Computer Science CO-OP</li>
                                        <li>Current GPA: 3.94</li>
                                        <li>Will start a specialization in business.</li>
                                        <li><em>09/2020-04/2025</em></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="harold">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Education</Card.Header>
                            <Card.Body>
                                <Card.Title>Harold M. Brathwaite Secondary School</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Recieved Ontario Secondary School Diploma along with Ontario Scholar Certificate</li>
                                        <li>Graduated with 40 points in International Baccleaureate Diploma.</li>
                                        <li><em>09/2016-06/2020</em></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <br />
                <div className="programming">
                    <h4>Programming Skils</h4>
                    <div className="def">
                        <Card className="resumeCard">
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>C</li>
                                        <li>Python</li>
                                        <li>React.JS</li>
                                        
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br />
                <div className="certifications">
                    <h4>Certifications</h4>
                    <div className="react">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Certifications</Card.Header>
                            <Card.Body>
                                <Card.Title>React.JS Web Development - the essentials bootcamp</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Learnt all basic components of React.JS</li>
                                        <li><em>12/2020-01/2021</em></li>
                                    </ul>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="cs50">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Certifications</Card.Header>
                            <Card.Body>
                                <Card.Title>CS50: Introduction to Computer Science (Harvard University)</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Improved problem solving skills</li>
                                        <li>Learnt C, SQL, Python, HTML, and CSS</li>
                                        <li>Lectures included algorithms, basic data structures, and techniques for problem solving.</li>
                                        <li><em>Expected: 03/2021</em></li>
                                    </ul>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <br />
                <div className="Extra-Cirricular ">
                    <h4>Extra-Cirricular Activities</h4>

                    <div className="humanimpact">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Extra-Cirricular Activities</Card.Header>
                            <Card.Body>
                                <Card.Title>Human Impact: Vice-President</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Organized and oversaw activities to improve the environmental knowledge of the school</li>
                                        <li>Managed and inspired a team of 50 students to recieve Platinum Eco-School award and plan a region-wide eco-conference</li>
                                        <li><em>08/2019-06/2020</em></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="council">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Extra-Cirricular Activities</Card.Header>
                            <Card.Body>
                                <Card.Title>Brampton West Youth Council</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Advocated for youth by introducing and adressing relevant issues within the community every month</li>
                                        <li>Initiated and led awareness project on issues the Indigenous community faces and mental health stigma</li>
                                        <li><em>01/2017-06/2020</em></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="hospital">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Extra-Cirricular Activities</Card.Header>
                            <Card.Body>
                                <Card.Title>Peel Memorial Hospital</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Guided and communicated with 100+ patients to ensure needs are met</li>
                                        <li>Worked in a team with other volunteers to ensure a welcoming and efficient environment</li>
                                        <li><em>04/2019-11/2019</em></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="deca">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Extra-Cirricular Activities</Card.Header>
                            <Card.Body>
                                <Card.Title>DECA/DECAU</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Competed in multiple business events by completing 10-15 page reports along with engaging presentations.</li>
                                        <li><em>2018-Present</em></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="swimming">
                        <Card className="resumeCard">
                            <Card.Header className="card-header">Extra-Cirricular Activities</Card.Header>
                            <Card.Body>
                                <Card.Title>Swim Team Member</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Competed in over 10 swim meets in three years.</li>
                                        <li>Dedicated time for at least three practices each week.</li>
                                        <li><em>2017-2020</em></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <br />
                <div>
                    <h4>Honors/Awards</h4>
                    <Card className="resumeCard">
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>President’s Scholarship of Distinction-University of Waterloo <em>2020</em></li>
                                        <li>Community Involvment Medallion<em>06/2020</em></li>
                                        <li>Top 20 DECA Provincials <em>02/2020</em></li>
                                        <li>Bronze Medal ROPSAA Swimming<em>02/2020</em></li>
                                        <li>Honor Roll <em>2017-2020 (4 years of high school)</em></li>
                                        
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </div>
                <div className="skills">
                    <h4>General Skills</h4>
                    <div className="def">
                        <Card className="resumeCard">
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>Leadership</li>
                                        <li>Creativity</li>
                                        <li>Microsoft Office</li>
                                        <li>Teamwork</li>
                                        <li>Communication</li>
                                        <li>Dedication</li>
                                        
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

            </div>
            </div>

        )
    }
}


export default Resume;