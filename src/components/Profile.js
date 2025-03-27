/* eslint-disable jsx-a11y/img-redundant-alt */
// File: src/components/Profile.js
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Profile = () => {
    return (
        <motion.section
            id="profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="section__pic-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: "easeOut"
                }}
            >
                <img src="/assets/profile-pic.jpeg" alt="Shashi Kumar profile picture" />
            </motion.div>
            <div className="section__text">
                <motion.p
                    className="section__text__p1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Hello, I'm
                </motion.p>
                <motion.h1
                    className="title"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Shashi Kumar
                </motion.h1>
                <motion.p
                    className="section__text__p2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <TypeAnimation
                        sequence={['Fullstack Developer', 500, 'MERN Developer', 500]}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </motion.p>
                <motion.div
                    className="btn-container"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <motion.button
                        className="btn btn-color-2"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open('/assets/resume-example.pdf')}
                    >
                        Resume
                        <img style={{ width: "20px" }} src="/assets/resume.png" alt="resume logo" />
                    </motion.button>
                    <motion.button
                        className="btn btn-color-1"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            document.getElementById('contact').scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    >
                        Contact Info
                    </motion.button>
                </motion.div>
                <motion.div
                    id="socials-container"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <motion.img
                        src="/assets/linkedin.png"
                        alt="My LinkedIn profile"
                        className="icon"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => window.open('https://linkedin.com/in/shashi-kumar-96941915a/')}
                    />
                    <motion.img
                        src="/assets/github.png"
                        alt="My Github profile"
                        className="icon"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => window.open('https://github.com/shashi2424/')}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Profile;