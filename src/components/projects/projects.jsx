import React, { useEffect } from 'react';
import { Fade } from '../motion';
import TaggedContentCard from './TaggedContentCard';
import Particles from '../particles/ProjectParticles';

import * as Styled from './projects.style';

import img1 from '../images/image1.png'
import img2 from '../images/img2.png'
import img6 from '../images/img6.png'
import wineSensor from '../images/wine-sensor.svg'

const Projects = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
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
                                    description="My bachelor's capstone: a sensor that detects spoiled wine by passing a current through the sealed bottle."
                                    tags={[]}
                                />

                                <TaggedContentCard
                                    href="https://github.com/jtrpan/GroundstationWeb"
                                    thumbnail={img1}
                                    title='Groundstation Web'
                                    description="A web-based flight control system for UBC AeroDesign's aircraft."
                                    tags={[]}
                                />
                            </div>
                            <div className='cardRow2'>
                                <TaggedContentCard
                                    href="https://github.com/jtrpan/Reflow-Assistant"
                                    thumbnail={img6}
                                    title='Reflow Assistant'
                                    description="A controller for reflow soldering ovens, with adjustable parameters."
                                    tags={[]}
                                />

                                <TaggedContentCard
                                    href="https://github.com/jtrpan/AESLock"
                                    thumbnail={img2}
                                    title='AESLock'
                                    description='An experimental file encryption tool built on AES-256.'
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
};

export default Projects;