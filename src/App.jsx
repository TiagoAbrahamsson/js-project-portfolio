import React from "react";
import "./index.css"; 
import HeroSection from "./Components/Herosection";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects/projects";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

export const App = () => {
  return (
    <>
     <div className="App">
     <HeroSection />
     {}
     <Tech /> 
     <Projects />
     <Skills />
     <Footer />
   </div>
    </>
  )
}
