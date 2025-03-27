import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HamburgerNav from './components/HamburgerNav';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  // const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    // const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('resize', handleResize);
    // window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {width > 1200 ? <Navbar /> : <HamburgerNav />}

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Profile />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;