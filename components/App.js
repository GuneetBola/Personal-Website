import React, {Component} from 'react';
import SocialProfiles from './SocialProfiles';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Navigation from './Navigation'
import Home from './Home'



class App extends Component{ // it is a subclass of the component class
    

    render(){

        return (
          <BrowserRouter>
            <div>
                <Navigation />
              
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/Projects" component={Projects} />
                </Switch>

                <SocialProfiles /> 
            </div>
          </BrowserRouter>
        )
    }
}

export default App;
