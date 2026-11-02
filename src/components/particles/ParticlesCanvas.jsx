import React from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// tsparticles v4 click-repulse queries a circle of (distance * pixelRatio / 6)^3
// px (~300k on retina), and the spatial grid walks every cell in it each frame,
// so the first click freezes the page. Nothing lies beyond the screen, so cap
// the search circle at twice the screen diagonal: same particles, same physics.
const capQuery = container => {
    const proto = Object.getPrototypeOf(container.particles.grid);
    if (proto.query.capped) return;
    const query = proto.query;
    proto.query = function (range, ...rest) {
        const cap = 2 * Math.hypot(window.innerWidth, window.innerHeight) * (window.devicePixelRatio || 1);
        if (range.radius > cap) range = new range.constructor(range.position.x, range.position.y, cap);
        return query.call(this, range, ...rest);
    };
    proto.query.capped = true;
};

// the engine loads once per app; after that the provider renders instantly
const ParticlesCanvas = ({ options }) => (
    <ParticlesProvider init={loadSlim}>
        <Particles id="tsparticles" options={options} particlesLoaded={async c => c && capQuery(c)}/>
    </ParticlesProvider>
);

export default ParticlesCanvas;
