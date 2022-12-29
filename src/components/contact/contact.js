import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import * as Styled from './contact.style';
import './contact.style.js';
import Emoji from '../emoji';
import Particles from "react-tsparticles"

const particlesInit = (main) => {
    console.log(main);
}
const particlesLoaded = (container) => {
    console.log(container);
}

class Contact extends Component {
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
        return(
            <Styled.Wrapper>
                <Particles
                    id="landingparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    width={this.state.windowWidth}
                    height={this.state.windowHeight}
                    params={{
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
                                    mode: "repulse"
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
                    <div>
                        <br/>
                        <div className="questionLine">
                            <Bounce left duration={1000}>
                                Looking to start a project?
                            </Bounce>
                        </div>
                        <span> </span>
                        <div className="chatLine">
                            <Bounce right duration={1000} delay={1200}>
                                Just want to chat?
                            </Bounce>
                        </div>
                        <div>
                            <Fade duration={1000} delay={2400}>
                                <a href="mailto: james.pan@alumni.ubc.ca" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Projects Page">
                                    <span tabIndex="-1" className="contact-link_content">
                                        Let's talk.  <Emoji symbol="🤙" label="call me"/>
                                    </span>
                                </a>
                            </Fade>
                        </div>
                        <div style={{
                            zoom: 1.5,
                        }}>
                            <div className="contactLine">
                                <Fade bottom cascade duration={1000} delay={3600}>
                                    <div>
                                        Find me online:
                                    </div>
                                </Fade>
                                <br/>
                            </div>
                            <br/>
                            <div className="buttonGroup">
                                <Fade bottom cascade duration={2000} delay={3600}>
                                    <div><div>
                                        <a href="https://www.linkedin.com/in/jtrpan/" target="_blank" rel="noopener noreferrer">
                                    <span className="contactIcon">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="contactButton1" color={'#c0c3c4'} size="lg" transform="down-6"/>
                                    </span>
                                        </a>

                                        <a href="https://github.com/jtrpan" target="_blank" rel="noopener noreferrer">
                                    <span className="contactIcon">
                                    <FontAwesomeIcon icon={faGithubAlt} className="contactButton2"  color={'#c0c3c4'} size="lg" transform="down-6"/>
                                    </span>
                                        </a>

                                        <a href="https://www.facebook.com/james.trissin" target="_blank" rel="noopener noreferrer">
                                    <span className="contactIcon">
                                    <FontAwesomeIcon icon={faFacebookF} className="contactButton3"  color={'#c0c3c4'} size="lg" transform="down-6"/>
                                    </span>
                                        </a>

                                        <a href="https://twitter.com/jtrpan" target="_blank" rel="noopener noreferrer">
                                    <span className="contactIcon">
                                    <FontAwesomeIcon icon={faTwitter} className="contactButton4"  color={'#c0c3c4'} size="lg" transform="down-6"/>
                                    </span>
                                        </a>

                                    </div></div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Styled.Heading>
            </Styled.Wrapper>
        )
    }
}

export default Contact;