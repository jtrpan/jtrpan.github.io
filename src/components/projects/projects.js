import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { TaggedContentCard } from 'react-ui-cards';
import Particles from "react-tsparticles"

import * as Styled from './projects.style';
import './projects.style.js';
import './projects.css';

import img1 from '../images/image1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'

const particlesInit = (main) => {
    console.log(main);
}
const particlesLoaded = (container) => {
    console.log(container);
}

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
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
        if (this.state.open) {
            window.scrollTo(0, 0);
            document.body.style.overflow = 'auto';
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return(
            <div>
                <Styled.Wrapper>
                    <Styled.Heading>
                        <div className="introLine">
                            <Fade top duration={1200} delay={300}>
                                <div>
                            <span>
                                Selected Work
                            </span>
                                </div>
                            </Fade>
                        </div>
                        <div className='cardGroup'>
                            <Fade duration={1200} delay={1500}>
                                <div className='cardRow1'>
                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/GroundstationWeb"
                                        thumbnail={img1}
                                        title='Groundstation Web'
                                        description="UBC AeroDesign's web-based flight control system. "
                                        tags={[
                                            ''
                                        ]}
                                    />

                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/AESLock"
                                        thumbnail={img2}
                                        title='AESLock'
                                        description='Experimental AES-256 bit file encryption software.'
                                        tags={[
                                            ''
                                        ]}
                                    />

                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/Reflow-Assistant"
                                        thumbnail={img6}
                                        title='Reflow Assistant'
                                        description="Reflow soldering oven controller with parameters."
                                        tags={[
                                            ''
                                        ]}
                                    />
                                </div>
                            </Fade>
                            <Fade duration={1000} delay={1700}>
                                <div className='cardRow2'>
                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/Emperor-Coin"
                                        thumbnail={img3}
                                        title="Emperor's Coin"
                                        description='Interactive 12-body counterfeit balance puzzle.'
                                        tags={[
                                            ''
                                        ]}
                                    />

                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/Make-A-Deal"
                                        thumbnail={img4}
                                        title="Let's Make a Deal!"
                                        description='A visualization of the classic Monty Hall Problem.'
                                        tags={[
                                            ''
                                        ]}
                                    />
                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/PokeMusic"
                                        thumbnail={img7}
                                        title='PokéMusic'
                                        description='Detects Pokémon gameplay and plays music.'
                                        tags={[
                                            ''
                                        ]}
                                    />
                                </div>
                            </Fade>
                        </div>
                        <br/>
                    </Styled.Heading>
                </Styled.Wrapper>
                <Particles
                    id="landingparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    width={this.state.windowWidth}
                    height={this.state.windowHeight}
                    params={{
                        "particles": {
                            "number": {
                                "value": this.state.windowWidth*this.state.windowHeight/7500,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 3,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 4,
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            detect_on: "canvas",
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                        },
                    }} />
            </div>
        )
    }
}

export default Projects;