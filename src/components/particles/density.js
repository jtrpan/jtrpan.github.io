// a flat count crams the same particles (and their links) into a phone-sized
// canvas as a desktop one, so scale by screen area instead. Hard-clamped:
// some devices/zoom states report wildly wrong innerWidth/innerHeight.
export const particleCount = () =>
    Math.max(15, Math.min(600, Math.round((window.innerWidth * window.innerHeight) / 15500)));
