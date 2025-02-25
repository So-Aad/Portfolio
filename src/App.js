// App.js
import React from 'react';
import HeroSection from './components/HeroSection.js';
import SplashCursor from './components/SplashCursor.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';


const App = () => {
  return (
    <div>
     <HeroSection/>
     <SplashCursor/>
     <About/> 
     <Skills/>
     <Project/>
     <Contact/>
     
      
</div>
  );
};

export default App;
