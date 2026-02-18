import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
import HamburgerNav from './HamburgerNav';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        checkMobile();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    if (isMobile) {
        return <HamburgerNav />;
    }

    const navItems = ['home', 'about', 'experience', 'projects', 'contact'];

    return (
        <motion.nav
            id="desktop-nav"
            className={scrolled ? 'scrolled' : ''}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <motion.div
                className="logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onClick={() => scroll.scrollToTop()}
                style={{ cursor: 'none' }}
            >
                SK.
            </motion.div>
            <div className="nav-menu">
                <ul className="nav-links">
                    {navItems.map((section, index) => (
                        <motion.li
                            key={section}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1 * index + 0.5,
                                duration: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <Link
                                to={section === 'home' ? 'top' : section}
                                smooth="easeInOutQuart"
                                duration={600}
                                offset={section === 'home' ? 0 : -80}
                                activeClass="active-link"
                                spy={true}
                                hashSpy={true}
                                isDynamic={true}
                                spyThrottle={100}
                                onClick={() => section === 'home' && scroll.scrollToTop()}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
