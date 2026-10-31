import React, { useEffect, useState } from 'react';

// CSS-keyframe replacements for react-reveal / react-pose-text / react-text-loop
// (all abandoned, none work on current React). Keyframes live in index.css.

// effect: fade | fade-down | fade-up | bounce-left | bounce-right
export const Reveal = ({ effect = 'fade', duration = 1000, delay = 0, className = '', children }) => (
    <div
        className={`reveal reveal-${effect} ${className}`}
        style={{ animationDuration: `${duration}ms`, animationDelay: `${delay}ms` }}
    >
        {children}
    </div>
);

// rises each word in on its own, staggered: delay(i) gives word i's delay in ms
export const SplitWords = ({ text, delay }) =>
    text.split(' ').map((word, i) => (
        <React.Fragment key={i}>
            <span className="reveal reveal-rise" style={{ animationDelay: `${delay(i)}ms` }}>{word}</span>{' '}
        </React.Fragment>
    ));

// cycles through words forever; the key change re-runs the slide-in animation
export const TextLoop = ({ words, interval }) => {
    const [i, setI] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setI(n => (n + 1) % words.length), interval);
        return () => clearInterval(t);
    }, [words.length, interval]);
    return <span key={i} className="text-loop">{words[i]}</span>;
};
