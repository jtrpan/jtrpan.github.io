import React from 'react';
import ParticlesCanvas from './ParticlesCanvas';
import { clickRepulse } from './density';

const options = {
    fpsLimit: 120,
    detectRetina: true,
    fullScreen: { enable: true, zIndex: 0 },
    interactivity: {
        events: {
            onHover: { enable: true, mode: 'bubble' },
            onClick: { enable: true, mode: 'repulse' },
        },
        modes: {
            bubble: { distance: 200, duration: 2, size: 10, opacity: 0 },
            repulse: { ...clickRepulse(200), duration: 10 },
        },
    },
    particles: {
        number: { value: 100 },
        move: { enable: true, random: true, speed: { min: 1, max: 4 }, direction: 'top', outModes: 'out' },
        opacity: { value: { min: 0.3, max: 0.7 } },
        size: { value: { min: 1, max: 3 } },
    },
};

const AboutParticles = () => <ParticlesCanvas options={options}/>;

export default AboutParticles;
