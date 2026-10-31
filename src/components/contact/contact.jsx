import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Reveal } from '../motion';

import * as Styled from './contact.style';
import Emoji from '../emoji';
import Particles from '../particles/ContactParticles';

const socials = [
    { href: 'https://www.linkedin.com/in/jtrpan/', icon: faLinkedinIn, label: 'LinkedIn', className: 'linkedin' },
    { href: 'https://github.com/jtrpan', icon: faGithubAlt, label: 'GitHub', className: 'github' },
    { href: 'https://www.facebook.com/james.trissin', icon: faFacebookF, label: 'Facebook', className: 'facebook' },
    { href: 'https://x.com/jtrpan', icon: faXTwitter, label: 'X (Twitter)', className: 'x' },
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
                    <Reveal effect="bounce-left" duration={1000}>
                        <div className="questionLine">Looking to start a project?</div>
                    </Reveal>
                    <Reveal effect="bounce-right" duration={1000} delay={700}>
                        <div className="chatLine">Or just want to chat?</div>
                    </Reveal>
                </div>

                <div className="talkRow">
                    <Reveal duration={1000} delay={1500}>
                        <a href="mailto:jtrpan@gmail.com" className="contact-link" aria-label="Email me">
                            <span className="contact-link_content">
                                Let's talk. <Emoji symbol="🤙" label="call me"/>
                            </span>
                        </a>
                    </Reveal>
                </div>

                <div className="socialRow">
                    <Reveal effect="fade-up" duration={1000} delay={2200}>
                        <div className="contactLine">Find me online:</div>
                        <div className="buttonGroup">
                            {socials.map(({ href, icon, label, className }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                                    <FontAwesomeIcon icon={icon} className={className}/>
                                </a>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Styled.Heading>
        </Styled.Wrapper>
    );
};

export default Contact;
