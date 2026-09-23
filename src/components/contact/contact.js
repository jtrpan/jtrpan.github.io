import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import * as Styled from './contact.style';
import './contact.style.js';
import Emoji from '../emoji';
import Particles from '.././particles/ContactParticles.js';

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
            // everything on this page fits in one viewport via flexbox -
            // block scrolling outright. iOS Safari is well known to ignore
            // overflow:hidden on body alone, so it's set on both.
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    }

    render() {
        return(
            <Styled.Wrapper>
                <Particles/>
                <Styled.Heading>
                    <div className="headerRow">
                        <Bounce left duration={1000}>
                            <div className="questionLine">
                                Looking to start a project?
                            </div>
                        </Bounce>
                        <Bounce right duration={1000} delay={1200}>
                            <div className="chatLine">
                                Just want to chat?
                            </div>
                        </Bounce>
                    </div>

                    <div className="talkRow">
                        <Fade duration={1000} delay={2400}>
                            <a href="mailto:jtrpan@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Email me!">
                                <span tabIndex="-1" className="contact-link_content">
                                    Let's talk.  <Emoji symbol="🤙" label="call me"/>
                                </span>
                            </a>
                        </Fade>
                    </div>

                    <div className="socialRow">
                        <Fade bottom cascade duration={1000} delay={3600}>
                            <div className="contactLine">
                                Find me online:
                            </div>
                        </Fade>
                        <Fade bottom cascade duration={2000} delay={3600}>
                            <div className="buttonGroup">
                                <a href="https://www.linkedin.com/in/jtrpan/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="contactButton1" color={'#c0c3c4'} transform="down-6"/>
                                </a>
                                <a href="https://github.com/jtrpan" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithubAlt} className="contactButton2" color={'#c0c3c4'} transform="down-6"/>
                                </a>
                                <a href="https://www.facebook.com/james.trissin" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} className="contactButton3" color={'#c0c3c4'} transform="down-6"/>
                                </a>
                                <a href="https://twitter.com/jtrpan" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="contactButton4" color={'#c0c3c4'} transform="down-6"/>
                                </a>
                            </div>
                        </Fade>
                    </div>
                </Styled.Heading>
            </Styled.Wrapper>
        )
    }
}

export default Contact;
