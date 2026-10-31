import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './menu.css';
import Emoji from '../emoji';

const WIDTH = 300;
// how far (px) a finger must travel before we decide which way it's swiping
const LOCK = 12;

const links = [
    { to: '/', label: 'Home' },
    { to: '/aboutme', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
];

const Menu = () => {
    const [open, setOpen] = useState(false);
    // drawer offset in px while a finger is dragging it (null = not dragging)
    const [drag, setDrag] = useState(null);
    const touch = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => { setOpen(false); }, [pathname]);

    useEffect(() => {
        const onKey = e => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    // swipe right anywhere to open, swipe left anywhere to close. The drawer
    // follows the finger, then snaps open or shut depending on where it's let go.
    // ponytail: no fling/velocity detection, past-the-halfway-point decides
    useEffect(() => {
        const width = () => Math.min(WIDTH, window.innerWidth * 0.85);
        const start = e => {
            const t = e.touches[0];
            touch.current = { x: t.clientX, y: t.clientY, horizontal: null, offset: null };
        };
        const move = e => {
            const s = touch.current;
            if (!s) return;
            const t = e.touches[0];
            const dx = t.clientX - s.x, dy = t.clientY - s.y;
            if (s.horizontal === null) {
                if (Math.abs(dx) < LOCK && Math.abs(dy) < LOCK) return;
                s.horizontal = Math.abs(dx) > Math.abs(dy);
            }
            if (!s.horizontal) return;
            const w = width();
            s.offset = Math.max(-w, Math.min(0, (open ? 0 : -w) + dx));
            setDrag(s.offset);
        };
        const end = () => {
            const s = touch.current;
            if (s?.offset != null) {
                setOpen(s.offset > -width() / 2);
                setDrag(null);
            }
            touch.current = null;
        };
        window.addEventListener('touchstart', start, { passive: true });
        window.addEventListener('touchmove', move, { passive: true });
        window.addEventListener('touchend', end);
        window.addEventListener('touchcancel', end);
        return () => {
            window.removeEventListener('touchstart', start);
            window.removeEventListener('touchmove', move);
            window.removeEventListener('touchend', end);
            window.removeEventListener('touchcancel', end);
        };
    }, [open]);

    const dragging = drag !== null;
    // closed sits a little past -100% so the drop shadow doesn't peek in at the edge
    const transform = dragging ? `translateX(${drag}px)` : open ? 'none' : 'translateX(calc(-100% - 30px))';
    const shade = dragging ? 1 + drag / Math.min(WIDTH, window.innerWidth * 0.85) : open ? 1 : 0;
    const instant = dragging ? { transition: 'none' } : null;

    return (
        <>
            <button
                className={`menu-toggle${open ? ' is-open' : ''}`}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="site-menu"
                onClick={() => setOpen(!open)}
            >
                <span/><span/><span/>
            </button>

            <div
                className="menu-overlay"
                style={{ opacity: shade, pointerEvents: open ? 'auto' : 'none', ...instant }}
                onClick={() => setOpen(false)}
            />

            <nav
                id="site-menu"
                className="menu"
                aria-label="Site"
                inert={!open}
                style={{ transform, ...instant }}
            >
                <div className="menu-links">
                    {links.map(({ to, label }) => (
                        <NavLink key={to} to={to} end>{label}</NavLink>
                    ))}
                </div>

                <p className="hint">
                    Built with React <Emoji symbol="⚡" label="lightning"/><br/>
                    Made with <Emoji symbol="💜" label="love"/> by James Pan
                </p>
            </nav>
        </>
    );
};

export default Menu;
