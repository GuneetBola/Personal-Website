import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

import bruno from '../assets/brunomars.png'
import drake from '../assets/drake.png'
import main from '../assets/mainExample.png'

import login from '../assets/login.png'
import portfolio from '../assets/portfolio.png'
import history from '../assets/history.png'

import loginClimate from '../assets/loginClimate.png'
import message from '../assets/Sending Message.png'
import contact from '../assets/contactUS.png'

const PROJECTS = [
    {
        id: 1,
        title: 'Artist Searcher',
        programminglanguages: 'HTML, CSS, REACT, API',
        description: 'A website that accesses APIs in order to create a comprehaensive search engine to find artists around the world.',
        descriptionFull: 'Includes the Spotify API that allows users to see the number of followers of the artist and listen to their top tracks',
        link1: 'https://artistsearcher.netlify.app/',
        link2: 'https://github.com/GuneetBola/Artist-Search',
        button1:'Go to Site',
        button2:'GitHub',
        image1: main,
        image2: bruno,
        image3: drake
    },
    {
        id: 2,
        title: 'Stock Trader-Finance',
        programminglanguages: 'HTML, CSS, SQL, Python',
        description: 'Developed a trading platform that allows users to create an account and trade stocks in real-time.',
        descriptionFull: 'Used an API containing relevant information of the stock market.Goal of website is to give users the opportunity to practice online before actually trading in the stock market.',
        link1: 'https://youtu.be/rnLiO9T7Z8g', 
        link2: 'https://github.com/GuneetBola/Stock-Trader-CS50',
        button1:'Go to YouTube Video',
        button2:'GitHub',
        image1: login,
        image2: portfolio,
        image3: history
    },
    {
        id: 3,
        title: 'Climate Bots',
        programminglanguages: 'HTML, CSS, SQL, JavaScript, and Python with a team',
        description: 'Encouraged youth to engage in climate action by learning long-term sustainable actions',
        descriptionFull: 'Collaborated to create many elements such as a registration/login page, contact form and a trivia game.',
        link1: 'https://www.youtube.com/watch?v=foM7h-vBahU&feature=youtu.be&ab_channel=AnjaliGupta',
        link2: 'https://github.com/GuneetBola/Climate-Bots',
        button1:'Go to Youtube Video',
        button2:'GitHub',
        image1: loginClimate,
        image2: message,
        image3: contact
    },
    {
        id: 4,
        title: 'Personal Website',
        programminglanguages: 'HTML, CSS, REACT, API',
        description: 'A React App that I built involving JS and core web dev concepts',
        descriptionFull: 'I will add more here',
        link1: 'https://youtu.be/rnLiO9T7Z8g', 
        link2: 'https://github.com/GuneetBola/Stock-Trader-CS50',
        button1:'Go to Site',
        button2:'GitHub',
        image1: project2,
        image2: project2,
        image3: project2
        
    },
];

export default PROJECTS;
