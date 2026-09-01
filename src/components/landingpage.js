import React from 'react';
import TextLoop from "react-text-loop";
import Particles from './particles/LandingParticles.js';
import Fade from 'react-reveal/Fade';
import * as Styled from './landingpage.style';

class Landing extends React.Component {
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
        return (
            <Styled.Wrapper>
                <Styled.Heading>
                    <Particles/>
                    <div className="landingBlock">
                        <span className="helloTitle">
                          Hello World.
                        </span>
                        <br/>
                        My name is
                        James Pan.&nbsp;
                        <br/>
                        I'm<span> </span>
                        <TextLoop
                            interval={2500}
                            springConfig={{stiffness: 40, damping: 6}}
                            mask
                        >
                            <span className="scrollTitle">
                              an Engineer
                            </span>
                            <span className="scrollTitle">
                              a Developer
                            </span>
                            <span className="scrollTitle">
                              an Athlete
                            </span>
                            <span className="scrollTitle">
                              a Tech Enthusiast
                            </span>
                            <span className="scrollTitle">
                              a Leader
                            </span>
                            <span className="scrollTitle">
                              a Musician
                            </span>
                            <span className="scrollTitle">
                              a Programmer
                            </span>
                            <span className="scrollTitle">
                              a Swimmer
                            </span>
                            <span className="scrollTitle">
                              a Designer
                            </span>
                            <span className="scrollTitle">
                              an Archer
                            </span>
                            <span className="scrollTitle">
                              a Photographer
                            </span>
                            <span className="scrollTitle">
                              a Snowboarder
                            </span>
                            <span className="scrollTitle">
                              an Adventurer
                            </span>
                        </TextLoop>
                        <span> </span>
                        from<span> </span>
                        <span>
                            <a
                                href="https://www.ubc.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="city-link"
                                aria-label="UBC Website"
                            >
                                  <span
                                      tabIndex="-1"
                                      className="city-link_content"
                                  >
                                    UBC.
                                  </span>
                            </a>
                      </span>
                    </div>
                    <div className="extraLine">
                        <Fade duration={1600} delay={35500}>
                            <div>
                                <span>
                                    Reading through all of the different titles?
                                </span>
                            </div>
                        </Fade>
                        <Fade duration={1600} delay={38000}>
                            <div>
                                <span>
                                    I'm afraid you've seen all of them by now.
                                </span>
                            </div>
                        </Fade>
                        <Fade duration={1600} delay={40000}>
                            <div>
                                <span>
                                    Thanks for sticking around.
                                </span>
                            </div>
                        </Fade>
                    </div>
                </Styled.Heading>
            </Styled.Wrapper>);
    }
}

export default Landing;
