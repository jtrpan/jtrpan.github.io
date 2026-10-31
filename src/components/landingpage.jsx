import React, { useEffect } from 'react';
import Particles from './particles/LandingParticles';
import { Reveal, TextLoop } from './motion';
import * as Styled from './landingpage.style';

const titles = [
    'an engineer', 'a developer', 'an athlete', 'a tinkerer', 'a leader',
    'a musician', 'a swimmer', 'a designer', 'an archer', 'a photographer',
    'a snowboarder', 'an adventurer', 'a researcher', 'a gearhead',
];
const INTERVAL = 2500;
// the easter-egg lines start right after the carousel has shown every title once
const lastTitle = titles.length * INTERVAL;

const Landing = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <Styled.Wrapper>
            <Styled.Heading>
                <Particles/>
                <div className="landingBlock">
                    <span className="helloTitle">Hello, world.</span>
                    <br/>
                    My name is James Pan.
                    <br/>
                    I'm <span className="scrollTitle"><TextLoop words={titles} interval={INTERVAL}/></span>
                    {' '}at{' '}
                    <a
                        href="https://www.tum.de/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="city-link"
                        aria-label="TUM website"
                    >
                        <span className="city-link_content">TUM.</span>
                    </a>
                </div>
                <div className="extraLine">
                    <Reveal duration={1600} delay={lastTitle + 500}>
                        Still reading the titles?
                    </Reveal>
                    <Reveal duration={1600} delay={lastTitle + 3000}>
                        I'm afraid that's all of them.
                    </Reveal>
                    <Reveal duration={1600} delay={lastTitle + 5000}>
                        Thanks for sticking around.
                    </Reveal>
                </div>
            </Styled.Heading>
        </Styled.Wrapper>
    );
};

export default Landing;
