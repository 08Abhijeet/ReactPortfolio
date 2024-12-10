import About from './Components/About';

import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Project from './Components/Project';
function App() {

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
