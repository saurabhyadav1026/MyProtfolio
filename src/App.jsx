import React, { useState, useEffect } from 'react';
import NeuralCanvas from './components/NeuralCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LeetCodeStats from './components/LeetCodeStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import SEO from './seo/Seo';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync theme with document class list
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  // Intersection Observer to trigger scroll-fade animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.12,
      rootMargin: '0px'
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const animElements = document.querySelectorAll(
      '.glass-card, .section-header, .timeline-item, .learning-item, .skill-card, .project-card, .info-item-card'
    );
    
    animElements.forEach(el => {
      el.classList.add('scroll-reveal-item');
      observer.observe(el);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEO/>
      {/* 1. Interactive Canvas particle background with theme sync */}
      <NeuralCanvas theme={theme} />

      {/* 2. Floating Navbar with theme variables toggling */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* 3. Hero / Welcome banner */}
      <Hero />

      {/* 4. Biography details */}
      <About />

      {/* 5. Categorized technology strengths */}
      <Skills />

      {/* 6. Portfolio Showcase Grid */}
      <Projects />

      {/* 7. LeetCode Coding profile & DSA progress */}
      <LeetCodeStats />

      {/* 8. Contact Form with validation */}
      <Contact />

      {/* 9. Copyright footer and links */}
      <Footer />

      {/* 10. Back to top button */}
      <button 
        className={`back-to-top-btn ${showScrollTop ? 'active' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}

export default App;
