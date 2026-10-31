import React from 'react';
import ParticlesCanvas from './ParticlesCanvas';
import { particleCount } from './density';

// all options: https://particles.js.org/docs/
const options = {
    fpsLimit: 120,
    detectRetina: true,
    fullScreen: { enable: true, zIndex: 0 },
    interactivity: {
        events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
        },
        modes: {
            push: { quantity: 4 },
            grab: { distance: 300 },
        },
    },
    particles: {
        number: { value: particleCount() },
        links: { enable: true, distance: 200 },
        move: { enable: true, speed: { min: 1, max: 5 } },
        opacity: { value: { min: 0.3, max: 0.7 } },
        size: { value: 2 },
    },
};

const LandingParticles = () => <ParticlesCanvas options={options}/>;

export default LandingParticles;
