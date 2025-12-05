import React from 'react';
import CardNav from './components/CardNav';
import { GoArrowUpRight } from "react-icons/go";
import logo from "./assets/logo.png"
import LetterGlitch from './components/LetterGlitch';
import FuzzyText from './components/FuzzyText';


const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#240046",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#003554",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#3c096c", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <LetterGlitch
          glitchSpeed={40}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Navigation */}
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#212529"
        menuColor="#fff"
        buttonBgColor="#fff"
        buttonTextColor="#111"
        ease="power3.out"
      />

      {/* FuzzyText Overlay di tengah */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <FuzzyText 
          baseIntensity={0.09} 
          hoverIntensity={0.2} 
          enableHover={true}
        >
          Hash-X15
        </FuzzyText>
      </div>
    </div>
  );
};

export default App;
