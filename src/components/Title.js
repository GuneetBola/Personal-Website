import React, {Component} from 'react';

const TITLE = [
    'Guneet Bola.',
    'a Computer Science Student.',
    'an Enthusiastic Learner.',
    'a Traveller.'
]

class Title extends Component {
    state = {titleIndex: 0, fadeIn: true}

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);

        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles =() => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLE.length;
            this.setState({ titleIndex });

            this.setState({ titleIndex, fadeIn: true })

            this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);

        }, 4000)

        console.log('this.titleInterval', this.titleInterval);
    }

    render(){
        const {fadeIn, titleIndex} = this.state;

        const title=TITLE[this.state.titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}> I am {title}</p>
        )

    }
}

export default Title;