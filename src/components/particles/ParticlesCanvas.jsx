import React from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// the engine loads once per app; after that the provider renders instantly
const ParticlesCanvas = ({ options }) => (
    <ParticlesProvider init={loadSlim}>
        <Particles id="tsparticles" options={options}/>
    </ParticlesProvider>
);

export default ParticlesCanvas;
