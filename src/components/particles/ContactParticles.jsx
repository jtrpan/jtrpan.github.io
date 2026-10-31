import React from 'react';
import ParticlesCanvas from './ParticlesCanvas';
import { particleCount } from './density';

const options = {
    fpsLimit: 120,
    detectRetina: true,
    fullScreen: { enable: true, zIndex: 0 },
    interactivity: {
        events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
        },
    },
    particles: {
        number: { value: particleCount() },
        links: { enable: true, distance: 125, triangles: { enable: true, opacity: 0.1 } },
        move: { enable: true, random: true, speed: { min: 1, max: 4 } },
        opacity: { value: { min: 0.3, max: 0.7 } },
        size: { value: 2 },
    },
};

const ContactParticles = () => <ParticlesCanvas options={options}/>;

export default ContactParticles;
