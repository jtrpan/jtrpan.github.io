import React, { useEffect } from 'react';
import Particles from './particles/LandingParticles';
import { Fade, TextLoop } from './motion';
import * as Styled from './landingpage.style';

const titles = [
    'an engineer', 'a developer', 'an athlete', 'a tinkerer', 'a leader',
    'a musician', 'a programmer', 'a swimmer', 'a designer', 'an archer',
    'a photographer', 'a snowboarder', 'an adventurer', 'a researcher', 'a gearhead',
];

const Landing = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <Styled.Wrapper>
            <Styled.Heading>
                <Particles/>
                <div className="landingBlock">
                    <span className="helloTitle">
                        Hello, world.
                    </span>
                    <br/>
                    My name is James Pan.&nbsp;
                    <br/>
                    I'm<span> </span>
                    <TextLoop interval={2500} springConfig={{ stiffness: 40, damping: 6 }}>
                        {titles.map(t => <span key={t} className="scrollTitle">{t}</span>)}
                    </TextLoop>
                    <span> </span>
                    at<span> </span>
                    <span>
                        <a
                            href="https://www.tum.de/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="city-link"
                            aria-label="TUM website"
                        >
                            <span className="city-link_content">TUM.</span>
                        </a>
                    </span>
                </div>
                <div className="extraLine">
                    <Fade duration={1600} delay={35500}>
                        <div><span>Still reading the titles?</span></div>
                    </Fade>
                    <Fade duration={1600} delay={38000}>
                        <div><span>I'm afraid that's all of them.</span></div>
                    </Fade>
                    <Fade duration={1600} delay={40000}>
                        <div><span>Thanks for sticking around.</span></div>
                    </Fade>
                </div>
            </Styled.Heading>
        </Styled.Wrapper>
    );
};

export default Landing;
