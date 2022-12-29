import React, { Component } from 'react';
import TextLoop from "react-text-loop";
import Particles from "react-tsparticles"
import Fade from 'react-reveal/Fade';

import * as Styled from './landingpage.style';

const particlesInit = (main) => {
    console.log(main);
}
const particlesLoaded = (container) => {
    console.log(container);
}


class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open:true,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    }

    updateDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        if(this.state.open){
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
                <Particles
                    id="landingparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    width={this.state.windowWidth}
                    height={this.state.windowHeight}
                    params={{
                        fpsLimit: 200,
                        particles: {
                            number: {
                                value: this.state.windowWidth*this.state.windowHeight/15500,
                            },
                            size: {
                                value: 2
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                        },
                        "retina_detect": true
                    }}
                />
                <Styled.Heading>
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
                            springConfig={{ stiffness: 30, damping: 10 }}
                            mask
                        >
                            <span className="scrollTitle">
                              a Student
                            </span>
                            <span className="scrollTitle">
                              a Web Developer
                            </span>
                            <span className="scrollTitle">
                              an Engineer
                            </span>
                            <span className="scrollTitle">
                              a Swimmer
                            </span>
                            <span className="scrollTitle">
                              a Tech Geek
                            </span>
                            <span className="scrollTitle">
                              an Archer
                            </span>
                            <span className="scrollTitle">
                              a Designer
                            </span>
                            <span className="scrollTitle">
                              a Snowboarder
                            </span>
                            <span className="scrollTitle">
                              a Melophile
                            </span>
                            <span className="scrollTitle">
                              a Programmer
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
                                    UBC
                                  </span>
                            </a>
                      </span>
                        .
                    </div>
                    <div className="extraLine">
                        <Fade duration={1600} delay={25500}>
                            <div>
                                <span>
                                    Well, you're quite the patient one.
                                </span>
                            </div>
                        </Fade>
                        <Fade duration={1600} delay={28000}>
                            <div>
                                <span>
                                    Reading through all of the titles, are we?
                                </span>
                            </div>
                        </Fade>
                        <Fade duration={1600} delay={30000}>
                            <div>
                                <span>
                                    I'm afraid you've reached the end. Thanks for sticking around.
                                </span>
                            </div>
                        </Fade>
                    </div>
                </Styled.Heading>
            </Styled.Wrapper>
        );
    }
}

export default Landing;