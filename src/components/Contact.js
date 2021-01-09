import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <br />
                <h2><span>Contact Information</span></h2>
                <br />
                <p>EMAIL: <a href="mailto:gbola@uwaterloo.ca">gbola@uwaterloo.ca</a></p>
                <p>Phone Number: 647-987-5343</p>
                <p>Linkedin: <a href="https://www.linkedin.com/in/guneet-bola-77ab821a7/">Guneet Bola</a></p>
                <hr />
                <br />
                <p>Feel free to contact me about any inquiries, questions, or concerns!</p>
              
            </div>

        )
    }
}

export default Contact;