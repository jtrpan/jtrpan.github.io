import React, { useEffect } from 'react';
import Particles from '../particles/ProjectParticles';
import { Reveal } from '../motion';

import * as Styled from './projects.style';

import img1 from '../images/image1.png';
import img2 from '../images/img2.png';
import img6 from '../images/img6.png';
import wineSensor from '../images/wine-sensor.svg';

const projects = [
    {
        // ponytail: no public repo for the capstone, so no href - card isn't clickable
        thumbnail: wineSensor,
        title: 'Contactless Wine Sensor',
        description: "My bachelor's capstone: a sensor that detects spoiled wine by passing a current through the sealed bottle.",
    },
    {
        href: 'https://github.com/jtrpan/GroundstationWeb',
        thumbnail: img1,
        title: 'Groundstation Web',
        description: "A web-based flight control system for UBC AeroDesign's aircraft.",
    },
    {
        href: 'https://github.com/jtrpan/Reflow-Assistant',
        thumbnail: img6,
        title: 'Reflow Assistant',
        description: 'A controller for reflow soldering ovens, with adjustable parameters.',
    },
    {
        href: 'https://github.com/jtrpan/AESLock',
        thumbnail: img2,
        title: 'AESLock',
        description: 'An experimental file encryption tool built on AES-256.',
    },
];

const Card = ({ href, thumbnail, title, description }) => {
    const body = (
        <>
            <div className="thumb"><img src={thumbnail} alt="" loading="lazy"/></div>
            <div className="body">
                <h2>{title}</h2>
                <p>{description}</p>
                {href && <span className="cta">View on GitHub →</span>}
            </div>
        </>
    );
    return href
        ? <a className="card" href={href} target="_blank" rel="noopener noreferrer">{body}</a>
        : <div className="card">{body}</div>;
};

const Projects = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <Styled.Wrapper>
            <Particles/>
            <Reveal effect="fade-down" duration={1200} delay={200}>
                <h1 className="introLine">Selected Work</h1>
            </Reveal>
            <Reveal duration={1200} delay={700}>
                <div className="cardGrid">
                    {projects.map(p => <Card key={p.title} {...p}/>)}
                </div>
            </Reveal>
        </Styled.Wrapper>
    );
};

export default Projects;
