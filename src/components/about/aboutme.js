import React, {Component} from 'react';
import SplitText from 'react-pose-text';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import Particles from '.././particles/AboutParticles.js';
import {Container, Row, Col} from 'reactstrap';

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

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true, windowWidth: window.innerWidth, windowHeight: window.innerHeight,
        }
    }

    updateDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth, windowHeight: window.innerHeight,
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        if (this.state.open) {
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (<Styled.StyledView>
            <Particles/>
            <Styled.Wrapper>
                <Styled.Heading>
                    <div className="introLine">
                        <SplitText initialPose="exit" pose="enter" charPoses={wordOne}>
                            Hi.
                        </SplitText><span> </span>
                        <SplitText initialPose="exit" pose="enter" charPoses={introLine}>
                            It's nice to meet you.
                        </SplitText>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="infoText" style={{
                                    maxWidth: "100%", display: "block", textAlign: "center",
                                }}>
                                    <Fade duration={1600} delay={2000}>
                                        <div>
                                                <span className="specialText">
                                                    My name is James. I'm a Master's student based in Munich, Germany. <Emoji
                                                    symbol="🎓" label="graduation cap"/>
                                                </span>
                                            <br/>
                                            <span className="specialText">
                                                    I like to build <span> </span>
                                                <span>
                                                <Link
                                                    to="/projects"
                                                    target="_blank"
                                                    onClick={this.props.closeCallback}
                                                    className="project-link">
                                                    <span className="project-link_content">
                                                        stuff
                                                    </span>
                                                </Link>
                                                .
                                                Currently, I'm pursuing a Master's degree in Computational Science and Engineering at the Technical University of Munich.
                                                <span> </span>
                                                <Emoji symbol="📚" label="books"/>
                                                <br/><br/>
                                                Before that, I worked as a Software Engineer at Hash Machinery Systems,
                                                <span> </span>
                                                <Emoji symbol="⚙️" label="gear"/> and prior to that, as a Software Developer at Antario Financial,
                                                a fintech start-up building smart, closed-loop mobile payments.
                                                <br/><br/>
                                                Earlier still, I worked as a Software Engineer within the AEP division at the National Research Council.
                                                <span> </span>
                                                <Emoji symbol="🔬" label="microscope"/>
                                                <br/>
                                                There, my work consisted of researching the next generation of wireless data networks - "6G", so to speak.
                                                <br/><br/>
                                                I've also spent some time as an Avionics Engineer on <span></span>
                                                <span>
                                                    <a
                                                        href="http://www.ubcaerodesign.com/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        aria-label="UBC Website"
                                                    >
                                                        <span
                                                            tabIndex="-1"
                                                            className="project-link_content"
                                                        >
                                                        UBC AeroDesign
                                                        </span>
                                                    </a>
                                                </span>
                                                <span> </span>
                                                <span>
                                                    to help make things that
                                                </span>
                                                <span> </span>
                                                <span>
                                                    <a
                                                        href="https://www.sae.org/attend/student-events/sae-aero-design-west/about"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        aria-label="UBC Website"
                                                    >
                                                        <span
                                                            tabIndex="-1"
                                                            className="project-link_content"
                                                        >
                                                            fly
                                                        </span>
                                                    </a>
                                                </span>. <Emoji symbol="🛩️" label="aeroplane"/></span>
                                                <br/>
                                                <span className="specialText">
                                                    To learn more about my professional history, check out my <span> </span>
                                                <span>
                                                    <a
                                                        href={my_pdf}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        aria-label="My Resume"
                                                    >
                                                        <span
                                                            tabIndex="-1"
                                                            className="project-link_content"
                                                        >
                                                            resume
                                                        </span>
                                                    </a>
                                                . <Emoji symbol="📑" label="resume"/>
                                                </span>
                                                </span>
                                                    <br/> <span> </span>
                                                    <br/>
                                                    <span className="specialText">
                                                When I'm not in class, you can find me in the workshop <Emoji
                                                        symbol="🛠️"
                                                        label="tools"/><span>.  </span>
                                                Or at the archery range <Emoji symbol="🏹"
                                                                               label="bow and arrow"/><span>.  </span>
                                                Or in the pool <Emoji symbol="🏊" label="swimming"/><span>.  </span>
                                                </span>
                                                    <br/>
                                                    <span className="specialText">
                                                If it's winter, I might be hitting the slopes <Emoji symbol="🏂"
                                                                                                     label="snowboard"/><span>.  </span>
                                                I could be anywhere; who knows! <Emoji symbol="🤷🏻‍♂️" label="shrug"/>
                                                </span>
                                                    <br/>
                                                    <span className="specialText">
                                                    <br/>
                                                To save you the trouble, <span> </span>
                                                <span>
                                                <a
                                                    href="/contact"
                                                    rel="noopener noreferrer"
                                                    className="project-link"
                                                    aria-label="Contact"
                                                >
                                                <span
                                                    tabIndex="-1"
                                                    className="project-link_content"
                                                >
                                                here
                                                </span>
                                                </a>
                                                </span> <span> </span>
                                                is the best way to reach me. <Emoji symbol="💬" label="chat bubble"/>
                                                </span>
                                                    <br/>
                                                    <span className="specialText">
                                                I'll get back to you as soon as possible - in the meantime, why not solve a
                                                <span> </span>
                                                <span>
                                                <a
                                                    href="javascript:alert('Sorry, not implemented yet. Keep your eyes peeled!');"
                                                    rel="noopener noreferrer"
                                                    className="project-link2"
                                                    aria-label="What could this be?"
                                                >
                                                <span
                                                    tabIndex="-1"
                                                    className="project-link_content2"
                                                >
                                                secret puzzle
                                                </span>
                                                </a>
                                                </span> <span> </span>
                                                ?
                                                </span>
                                                    <br/>
                                                    <span className="hintText">
                                                <br/>
                                                *There seem to be some fun easter eggs lurking about on my website. Try clicking around!
                                                </span>
                                                </span>
                                        </div>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Styled.Heading>
            </Styled.Wrapper>
        </Styled.StyledView>)
    }
}

export default About;

/*
highschool
<span className="specialText">
                                                    I've also spent some time as a Mechatronics Engineer on Ashbury College Robotics, where I attended <span> </span>
                                                <span>
                                                    <a
                                                        href="https://www.ashbury.ca/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        aria-label="UBC Website"
                                                    >
                                                        <span
                                                            tabIndex="-1"
                                                            className="project-link_content"
                                                        >
                                                        high school
                                                        </span>
                                                    </a>
                                                    .
                                                    </span>
                                                </span>
                                                    <br/>

 */