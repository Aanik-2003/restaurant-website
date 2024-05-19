// App.jsx
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/about';
import Menu from './components/Menu/menu';
import Contact from './components/Contact/contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <div id="home-section"></div>
      <Hero />
      <div id="about-section"></div>
      <About />
      <div id="menu-section"></div>
      <Menu />
      <div id="contact-section"></div>
      <Contact />
    </div>
  );
};

export default App;
