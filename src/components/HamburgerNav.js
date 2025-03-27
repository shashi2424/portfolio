import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const HamburgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);

    // Toggle menu open/closed
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    // Handle outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            closeMenu(); // Close menu on scroll
        };

        // Add event listeners
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Navigation links
    const navLinks = [
        { name: 'Home', to: 'top', onClick: () => scroll.scrollToTop() }, // Home scrolls to top
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <nav className={`hamburger-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">Shashi Kumar</div>
            <div ref={menuRef} className="hamburger-menu-container">
                {/* Hamburger Icon */}
                <div
                    className={`hamburger-icon ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Menu Overlay */}
                {isOpen && (
                    <div className="menu-overlay">
                        <ul className="menu-links">
                            {navLinks.map((link, index) => (
                                <li key={index} className="menu-item">
                                    {link.name === 'Home' ? (
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                link.onClick();
                                                closeMenu();
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            offset={-80}
                                            onClick={closeMenu}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default HamburgerNav;
