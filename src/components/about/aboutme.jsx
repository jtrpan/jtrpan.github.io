import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Particles from '../particles/AboutParticles';
import { Reveal, SplitWords } from '../motion';

import * as Styled from './aboutme.style';
import resume from '../pdfs/resume.pdf';
import Emoji from '../emoji';

const ExternalLink = ({ href, label, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={label}>
        {children}
    </a>
);

const About = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <Styled.StyledView>
            <Particles/>
            <Styled.Wrapper>
                <h1 className="introLine">
                    <SplitWords text="Hi." delay={i => i * 200 + 300}/>
                    <SplitWords text="It's nice to meet you." delay={i => i * 140 + 700}/>
                </h1>
                <Reveal duration={1400} delay={1400}>
                    <div className="infoText">
                        <p className="lead">
                            I'm James, a Master's student in Computational Science and Engineering
                            at TUM in Munich. <Emoji symbol="🎓" label="graduation cap"/>
                        </p>
                        <p>
                            I like to <Link to="/projects" className="project-link">build things</Link>.
                            These days I'm mostly focused on CFD and high-performance
                            computing. <Emoji symbol="📚" label="books"/>
                        </p>
                        <p>
                            I graduated from UBC in 2023. Before moving to Munich, I was a software
                            engineer at Hash Machinery Systems <Emoji symbol="⚙️" label="gear"/>, and
                            before that I worked at Antario Financial, a fintech start-up building
                            closed-loop mobile payments. <Emoji symbol="💳" label="credit card"/>
                        </p>
                        <p>
                            Earlier still, I was at the National Research Council's Advanced Electronics
                            and Photonics (AEP) Research Centre, researching the next generation of
                            wireless networks (6G). <Emoji symbol="🔬" label="microscope"/> At UBC, I
                            was also an avionics engineer
                            on <ExternalLink href="https://www.ubcaerodesign.com/" label="UBC AeroDesign website">UBC
                            AeroDesign</ExternalLink>, where we built aircraft that actually had
                            to <ExternalLink href="https://www.sae.org/attend/student-events/sae-aero-design-west/about"
                            label="SAE Aero Design competition">fly</ExternalLink>. <Emoji symbol="🛩️" label="airplane"/>
                        </p>
                        <p>
                            For everything else, see my <ExternalLink href={resume} label="My resume">resume</ExternalLink>. <Emoji symbol="📑" label="resume"/>
                        </p>
                        <p>
                            Outside of school, you'll usually find me in the
                            workshop <Emoji symbol="🛠️" label="tools"/>, at the archery
                            range <Emoji symbol="🏹" label="bow and arrow"/>, or in the
                            pool. <Emoji symbol="🏊" label="swimming"/> In winter, I go snowboarding
                            whenever I can. <Emoji symbol="🏂" label="snowboarder"/>
                        </p>
                        <p>
                            I watch a lot of F1 <Emoji symbol="🏎️" label="racing car"/>, I love cars
                            and planes <Emoji symbol="✈️" label="airplane"/>, and I'm always
                            tinkering with the latest tech. <Emoji symbol="💻" label="laptop"/>
                        </p>
                        <p>
                            Want to get in touch? Head over to
                            the <Link to="/contact" className="project-link">contact
                            page</Link>. <Emoji symbol="💬" label="chat bubble"/>
                        </p>
                    </div>
                </Reveal>
            </Styled.Wrapper>
        </Styled.StyledView>
    );
};

export default About;
