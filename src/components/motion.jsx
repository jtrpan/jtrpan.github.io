import React, { Children, cloneElement, useEffect, useState } from 'react';

// Drop-in replacements for react-reveal, react-pose-text and react-text-loop
// (all abandoned, none run on React 19). Each one reproduces the original
// library's keyframes, easing and timing, so the delays/durations tuned
// against the old libraries still land exactly the same. Keyframes live in
// index.css.

// Samples a damped spring (mass 1) into a CSS linear() easing, the same
// physics react-motion / popmotion ran in JS every frame. restDelta and
// restSpeed are normalised to a 0 -> 1 move.
const spring = (stiffness, damping, restDelta, restSpeed) => {
    const dt = 1 / 1000, stops = [0];
    let x = 0, v = 0, ms = 0;
    while (ms < 10000 && !(Math.abs(1 - x) < restDelta && Math.abs(v) < restSpeed)) {
        v += (stiffness * (1 - x) - damping * v) * dt;
        x += v * dt;
        if (++ms % 16 === 0) stops.push(+x.toFixed(4));
    }
    stops.push(1);
    return { easing: `linear(${stops.join(',')})`, duration: ms };
};

// react-reveal's cascade: child i's duration grows log-scaled from duration to 2x
const cascadeDuration = (i, count, duration) =>
    Math.round(Math.exp(Math.log(duration) + (Math.log(2 * duration) - Math.log(duration)) / count * i));

const reveal = (effect, duration, delay) => ({
    animationName: effect,
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
    animationFillMode: 'both',
});

// like react-reveal, these animate their single child element directly
// (no wrapper div), and with `cascade` animate each of its children instead
const animate = (effect, { duration = 1000, delay = 0, cascade, children }) => {
    const child = Children.only(children);
    if (!cascade) return cloneElement(child, { style: { ...child.props.style, ...reveal(effect, duration, delay) } });
    const inner = typeof child.props.children === 'string'
        ? child.props.children.split('').map((ch, i) => (
            <span key={i} style={{ display: 'inline-block', whiteSpace: 'pre' }}>{ch}</span>
        ))
        : Children.toArray(child.props.children);
    return cloneElement(child, {}, inner.map((c, i) => cloneElement(c, {
        style: { ...c.props.style, ...reveal(effect, cascadeDuration(i, inner.length, duration), delay) },
    })));
};

export const Fade = ({ top, bottom, ...props }) =>
    animate(top ? 'reveal-fade-top' : bottom ? 'reveal-fade-bottom' : 'reveal-fade', props);

export const Bounce = ({ left, right, ...props }) =>
    animate(left ? 'reveal-bounce-left' : 'reveal-bounce-right', props);

// react-pose-text: one inline-block per word, one per character; every
// character fades (300ms linear tween) and springs up 20px (popmotion's
// default y spring: stiffness 500, damping 25, rest at 0.5px / 10px/s)
const poseRise = spring(500, 25, 0.5 / 20, 10 / 20);

export const SplitText = ({ children, delay }) => {
    const words = children.split(' ');
    return words.map((word, w) => (
        <div key={w} style={{ display: 'inline-block' }}>
            {word.split('').map((ch, i) => (
                <div key={i} style={{
                    display: 'inline-block',
                    animation: `pose-fade 300ms linear ${delay(w)}ms both, pose-rise ${poseRise.duration}ms ${poseRise.easing} ${delay(w)}ms both`,
                }}>{ch}</div>
            ))}
            {w !== words.length - 1 ? ' ' : null}
        </div>
    ));
};

// react-text-loop: every `interval` the next child springs in from one line
// below while the current one springs out one line above, both fading
const loopSprings = new Map();

export const TextLoop = ({ children, interval, springConfig: { stiffness, damping } }) => {
    const items = Children.toArray(children);
    const [{ index, prev, count }, setState] = useState({ index: 0, prev: null, count: 0 });

    useEffect(() => {
        const t = setInterval(() => setState(s => ({
            index: (s.index + 1) % items.length, prev: s.index, count: s.count + 1,
        })), interval);
        return () => clearInterval(t);
    }, [items.length, interval]);

    const key = `${stiffness}/${damping}`;
    if (!loopSprings.has(key)) loopSprings.set(key, spring(stiffness, damping, 0.0002, 0.0002));
    const { easing, duration } = loopSprings.get(key);
    const motion = name => ({ animation: `${name} ${duration}ms ${easing} both` });

    return (
        <div style={{ display: 'inline-block', position: 'relative', verticalAlign: 'top' }}>
            {prev !== null && (
                <div key={`out${count}`} className="text-loop-item"
                     style={{ position: 'absolute', left: 0, top: 0, ...motion('loop-out') }}
                     onAnimationEnd={() => setState(s => (s.count === count ? { ...s, prev: null } : s))}>
                    {items[prev]}
                </div>
            )}
            {/* the very first word just appears, like the original */}
            <div key={`in${count}`} className="text-loop-item" style={count ? motion('loop-in') : undefined}>
                {items[index]}
            </div>
        </div>
    );
};
