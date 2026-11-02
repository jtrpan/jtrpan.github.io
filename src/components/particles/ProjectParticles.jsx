import React from 'react';
import ParticlesCanvas from './ParticlesCanvas';

const options = {
    fpsLimit: 120,
    detectRetina: true,
    fullScreen: { enable: true, zIndex: 0 },
    interactivity: {
        events: {
            onHover: { enable: true, mode: 'grab', parallax: { enable: true, force: 60, smooth: 10 } },
            onClick: { enable: true, mode: 'repulse' },
        },
        modes: {
            grab: { distance: 400, links: { opacity: 0 } },
            repulse: { distance: 200, duration: 10 },
        },
    },
    particles: {
        number: { value: 100 },
        move: { enable: true, random: true, speed: { min: 1, max: 4 } },
        opacity: { value: { min: 0.3, max: 0.7 } },
        size: { value: { min: 2, max: 5 } },
    },
};

const ProjectParticles = () => <ParticlesCanvas options={options}/>;

export default ProjectParticles;
