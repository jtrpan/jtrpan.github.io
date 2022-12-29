import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './about/aboutme';
import Contact from './contact/contact';
import Projects from './projects/projects';

const Main = () => (
    <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
)

export default Main;