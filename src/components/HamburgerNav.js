import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

const HamburgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', to: 'top', onClick: () => scroll.scrollToTop() },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' }
    ];

    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.15 }
        },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
        },
        exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
    };

    return (
        <>
            {/* Top bar - always visible */}
            <nav className={`hamburger-nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="logo">SK.</div>
                <div
                    onClick={toggleMenu}
                    role="button"
                    aria-label="Toggle menu"
                    tabIndex={0}
                    style={{
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        WebkitTapHighlightColor: 'transparent',
                        zIndex: 1200,
                        position: 'relative',
                    }}
                >
                    <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? 'var(--accent-primary)' : 'var(--text-primary)'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ transition: 'stroke 0.3s' }}
                    >
                        {isOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </div>
            </nav>

            {/* Fullscreen overlay - rendered OUTSIDE the nav to avoid stacking context issues */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(10, 10, 15, 0.97)',
                            backdropFilter: 'blur(30px)',
                            WebkitBackdropFilter: 'blur(30px)',
                            zIndex: 1050,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <motion.ul
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                textAlign: 'center',
                                width: '100%',
                            }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    style={{ margin: '0.5rem 0' }}
                                >
                                    {link.name === 'Home' ? (
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                closeMenu();
                                                setTimeout(() => link.onClick(), 100);
                                            }}
                                            style={{
                                                display: 'block',
                                                padding: '1rem 2rem',
                                                fontSize: '1.8rem',
                                                fontWeight: 600,
                                                color: 'var(--text-secondary)',
                                                textDecoration: 'none',
                                                transition: 'color 0.2s',
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.to}
                                            smooth="easeInOutQuart"
                                            duration={600}
                                            offset={-80}
                                            onClick={() => {
                                                closeMenu();
                                            }}
                                            style={{
                                                display: 'block',
                                                padding: '1rem 2rem',
                                                fontSize: '1.8rem',
                                                fontWeight: 600,
                                                color: 'var(--text-secondary)',
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                transition: 'color 0.2s',
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HamburgerNav;
