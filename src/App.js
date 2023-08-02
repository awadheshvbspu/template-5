import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import  Footer from './shared/Footer'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
