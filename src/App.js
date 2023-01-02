import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from "./components/About";
import Portfolio from "./components/Portfolio"
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);


  return (

    <div className={!darkTheme ? 'dark' : ''} >
      <div >
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
        <SocialLinks />
      </div>
    </div>

  );
}

export default App;
