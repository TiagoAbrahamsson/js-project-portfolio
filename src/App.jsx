import React from "react";
import "./index.css"; 
import HeroSection from "./Components/Herosection";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects/projects";

export const App = () => {
  return (
    <>
     <div className="App">
     <HeroSection />
     {}
     <Tech /> 
     <Projects />
   </div>
    </>
  )
}
