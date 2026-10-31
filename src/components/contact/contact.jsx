import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Bounce, Fade } from '../motion';

import * as Styled from './contact.style';
import Emoji from '../emoji';
import Particles from '../particles/ContactParticles';

const socials = [
    { href: 'https://www.linkedin.com/in/jtrpan/', icon: faLinkedinIn, label: 'LinkedIn', className: 'contactButton1' },
    { href: 'https://github.com/jtrpan', icon: faGithubAlt, label: 'GitHub', className: 'contactButton2' },
    { href: 'https://www.facebook.com/james.trissin', icon: faFacebookF, label: 'Facebook', className: 'contactButton3' },
    { href: 'https://x.com/jtrpan', icon: faXTwitter, label: 'X (Twitter)', className: 'contactButton4' },
];

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // everything on this page fits in one viewport via flexbox, so
        // block scrolling outright. iOS Safari is well known to ignore
        // overflow:hidden on body alone, so it's set on both.
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <Styled.Wrapper>
            <Particles/>
            <Styled.Heading>
                <div className="headerRow">
                    <Bounce left duration={1000}>
                        <div className="questionLine">Looking to start a project?</div>
                    </Bounce>
                    <Bounce right duration={1000} delay={1200}>
                        <div className="chatLine">Or just want to chat?</div>
                    </Bounce>
                </div>

                <div className="talkRow">
                    <Fade duration={1000} delay={2400}>
                        <a href="mailto:jtrpan@gmail.com" className="contact-link" aria-label="Email me">
                            <span className="contact-link_content">
                                Let's talk.  <Emoji symbol="🤙" label="call me"/>
                            </span>
                        </a>
                    </Fade>
                </div>

                <div className="socialRow">
                    <Fade bottom cascade duration={1000} delay={3600}>
                        <div className="contactLine">Find me online:</div>
                    </Fade>
                    <Fade bottom cascade duration={2000} delay={3600}>
                        <div className="buttonGroup">
                            {socials.map(({ href, icon, label, className }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                    <FontAwesomeIcon icon={icon} className={className} color={'#c0c3c4'} transform="down-6"/>
                                </a>
                            ))}
                        </div>
                    </Fade>
                </div>
            </Styled.Heading>
        </Styled.Wrapper>
    );
};

export default Contact;
