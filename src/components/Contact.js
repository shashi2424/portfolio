// File: src/components/About.js
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    return (
        <section id="contact" ref={ref}>
            <motion.p
                className="section__text__p1"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                Get in Touch
            </motion.p>
            <motion.h1
                className="title"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Contact Me
            </motion.h1>
            <motion.div
                className="contact-info-upper-container"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
                }}
            >
                <motion.div
                    className="contact-info-container"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.img
                        src="/assets/email.png"
                        alt="Email icon"
                        className="icon contact-icon email-icon"
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: 0.2 }}
                    />
                    <p>
                        <motion.a
                            href="https://mail.google.com/mail/?view=cm&to=shashi24kumar24@gmail.com&su=Inquiry&body=Hello,%20I%20would%20like%20to%20connect..."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ color: "#007bff" }}
                        >
                            shashi24kumar24@gmail.com
                        </motion.a>


                    </p>
                </motion.div>
                <motion.div
                    className="contact-info-container"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.img
                        src="/assets/linkedin.png"
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                        whileHover={{ rotate: -10 }}
                        transition={{ duration: 0.2 }}
                    />
                    <p>
                        <motion.a
                            href="https://linkedin.com/in/shashi-kumar-96941915a"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ color: "#007bff" }}
                        >
                            LinkedIn
                        </motion.a>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;