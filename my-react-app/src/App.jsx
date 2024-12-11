import About from './Components/About';
import { useEffect } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Project from './Components/Project';
const  App =()=> {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on refresh
  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
