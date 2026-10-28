import React, {Component} from 'react';
import SplitText from 'react-pose-text';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import Particles from '.././particles/AboutParticles.js';

import * as Styled from './aboutme.style';
import './aboutme.css';
import my_pdf from '../pdfs/resume.pdf'
import Emoji from '../emoji';

const introLine = {
    exit: {opacity: 0, y: 20}, enter: {
        opacity: 1, y: 0, delay: ({wordIndex}) => wordIndex * 140 + 1000
    }
};

const wordOne = {
    exit: {opacity: 0, y: 20}, enter: {
        opacity: 1, y: 0, delay: ({wordIndex}) => wordIndex * 200 + 400
    }
};

const ExternalLink = ({href, label, children}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={label}>
        {children}
    </a>
);

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'auto';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'auto';
    }

    render() {
        return (<Styled.StyledView>
            <Particles/>
            <Styled.Wrapper>
                <h1 className="introLine">
                    <SplitText initialPose="exit" pose="enter" charPoses={wordOne}>
                        Hi.
                    </SplitText>{' '}
                    <SplitText initialPose="exit" pose="enter" charPoses={introLine}>
                        It's nice to meet you.
                    </SplitText>
                </h1>
                <Fade duration={1600} delay={2000}>
                    <div className="infoText">
                        <p className="lead">
                            I'm James. I'm doing my Master's in Computational Science and Engineering
                            at TUM in Munich. <Emoji symbol="🎓" label="graduation cap"/>
                        </p>
                        <p>
                            I like to <Link to="/projects" className="project-link">build stuff</Link>.
                            Right now I'm mostly into CFD and high-performance computing. <Emoji symbol="📚" label="books"/>
                        </p>
                        <p>
                            I finished my undergrad at UBC in 2023. Before Munich, I was a software engineer
                            at Hash Machinery Systems <Emoji symbol="⚙️" label="gear"/>, and before that I
                            was at Antario Financial, a fintech start-up doing closed-loop mobile
                            payments. <Emoji symbol="💳" label="credit card"/>
                        </p>
                        <p>
                            Before that, I was at the National Research Council in the AEP division, working
                            on research for the next generation of wireless networks (6G,
                            basically). <Emoji symbol="🔬" label="microscope"/> At UBC I was also an avionics
                            engineer on <ExternalLink href="https://www.ubcaerodesign.com/" label="UBC AeroDesign website">UBC
                            AeroDesign</ExternalLink>, where we built planes that actually had
                            to <ExternalLink href="https://www.sae.org/attend/student-events/sae-aero-design-west/about"
                            label="SAE Aero Design competition">fly</ExternalLink>. <Emoji symbol="🛩️" label="airplane"/>
                        </p>
                        <p>
                            My <ExternalLink href={my_pdf} label="My resume">resume</ExternalLink> has the
                            rest. <Emoji symbol="📑" label="resume"/>
                        </p>
                        <p>
                            Outside of school, I'm usually in the workshop <Emoji symbol="🛠️" label="tools"/>,
                            at the archery range <Emoji symbol="🏹" label="bow and arrow"/>, or at the
                            pool. <Emoji symbol="🏊" label="swimming"/> In winter I go snowboarding whenever
                            I can. <Emoji symbol="🏂" label="snowboarder"/>
                        </p>
                        <p>
                            I watch a lot of F1 <Emoji symbol="🏎️" label="racing car"/>, I'm into cars and
                            planes <Emoji symbol="✈️" label="airplane"/>, and I'm always messing around with
                            whatever new tech just came out. <Emoji symbol="💻" label="laptop"/>
                        </p>
                        <p>
                            If you want to get in touch, use the <Link to="/contact" className="project-link">contact
                            page</Link>. <Emoji symbol="💬" label="chat bubble"/>
                        </p>
                    </div>
                </Fade>
            </Styled.Wrapper>
        </Styled.StyledView>)
    }
}

export default About;
