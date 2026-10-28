import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { TaggedContentCard } from 'react-ui-cards';
import Particles from '.././particles/ProjectParticles.js';

import * as Styled from './projects.style';
import './projects.style.js';
import './projects.css';

import img1 from '../images/image1.png'
import img2 from '../images/img2.png'
import img6 from '../images/img6.png'
import wineSensor from '../images/wine-sensor.svg'

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
                        <Particles/>
                        <div className="introLine">
                            <Fade top duration={1200} delay={300}>
                                <div>
                            <span>
                                Selected Work
                            </span>
                                </div>
                            </Fade>
                        </div>
                        <Fade duration={1200} delay={1500}>
                            <div className='cardGroup'>
                                <div className='cardRow1'>
                                    {/* ponytail: no public repo for the capstone, so no href - card isn't clickable */}
                                    <TaggedContentCard
                                        thumbnail={wineSensor}
                                        title='Contactless Wine Sensor'
                                        description="Bachelor's capstone: detects spoiled wine by passing current through a sealed bottle."
                                        tags={[]}
                                    />

                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/GroundstationWeb"
                                        thumbnail={img1}
                                        title='Groundstation Web'
                                        description="UBC AeroDesign's web-based flight control system."
                                        tags={[]}
                                    />
                                </div>
                                <div className='cardRow2'>
                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/Reflow-Assistant"
                                        thumbnail={img6}
                                        title='Reflow Assistant'
                                        description="Reflow soldering oven controller with adjustable parameters."
                                        tags={[]}
                                    />

                                    <TaggedContentCard
                                        href="https://github.com/jtrpan/AESLock"
                                        thumbnail={img2}
                                        title='AESLock'
                                        description='Experimental AES-256 bit file encryption software.'
                                        tags={[]}
                                    />
                                </div>
                            </div>
                        </Fade>
                        <br/>
                    </Styled.Heading>
                </Styled.Wrapper>
            </div>
        )
    }
}

export default Projects;