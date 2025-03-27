import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
import HamburgerNav from './HamburgerNav';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if screen size is mobile
    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    // Add scroll event listener to change navbar style on scroll
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

    return (
        <motion.nav
            id="desktop-nav"
            className={scrolled ? 'scrolled' : ''}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Faster & smoother entry
            style={{ willChange: 'transform' }}
        >
            <motion.div
                className="logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250, damping: 12 }}
                onClick={() => scroll.scrollToTop()}
                style={{ cursor: 'pointer' }}
            >
                Shashi Kumar
            </motion.div>
            <div className="nav-menu">
                <ul className="nav-links">
                    {['home', 'about', 'experience', 'projects', 'contact'].map((section, index) => (
                        <motion.li
                            key={section}
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.07 + 0.2, ease: "easeOut", duration: 0.4 }}
                            whileHover={{ scale: 1.12 }}
                        >
                            <Link
                                to={section === 'home' ? 'top' : section}
                                smooth={true}
                                duration={500} // Reduced duration for faster response
                                offset={section === 'home' ? 0 : -80}
                                activeClass="active-link"
                                spy={true}
                                hashSpy={true}
                                isDynamic={true}
                                spyThrottle={50} // Reduce lag when scrolling
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
