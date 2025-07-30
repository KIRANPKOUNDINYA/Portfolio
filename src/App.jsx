import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Work from './components/work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

const App = () => {
  return (
    // <div className="bg-[#050414] w-screen min-h-screen overflow-x-hidden relative">
    <div className="bg-[#050414]">

      {/* Optional background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      {/* All content above background */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
