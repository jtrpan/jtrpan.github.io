import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './about/aboutme';
import Contact from './contact/contact';
import Projects from './projects/projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main;