// a flat count crams the same particles (and their links) into a phone-sized
// canvas as a desktop one, so scale by screen area instead. Hard-clamped:
// some devices/zoom states report wildly wrong innerWidth/innerHeight.
export const particleCount = () =>
    Math.max(15, Math.min(600, Math.round((window.innerWidth * window.innerHeight) / 15500)));

// tsParticles' click-repulse searches a radius of (distance * pixelRatio / 6)^3
// px. At distance 200 on a retina screen that's ~300,000px, and v4's spatial
// grid walks every cell in that area each frame (~400ms/frame, the page
// freezes). The push force is radius * speed / d^2, so shrink the radius to
// the screen diagonal - still reaches every particle - and raise speed by the
// same factor: identical push, a few hundred cells instead of millions.
export const clickRepulse = (distance, speed = 1) => {
    const ratio = window.devicePixelRatio || 1;
    const radius = (distance * ratio / 6) ** 3;
    const reach = Math.hypot(window.innerWidth, window.innerHeight) * ratio;
    if (radius <= reach) return { distance, speed };
    return { distance: 6 * Math.cbrt(reach) / ratio, speed: speed * radius / reach };
};
