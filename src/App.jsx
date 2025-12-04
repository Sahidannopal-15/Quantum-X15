import React from 'react';
import CardNav from './components/CardNav';
import { GoArrowUpRight } from "react-icons/go";
import logo from "./assets/logo.png"
import LetterGlitch from './components/LetterGlitch';

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#dc2f02",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#9e2a2b",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#e5383b", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div>
    <LetterGlitch
    glitchSpeed={40}
    centerVignette={true}
    outerVignette={true}
    smooth={true}
    />
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#343a40"
      menuColor="#fff"
      buttonBgColor="#fff"
      buttonTextColor="#111"
      ease="power3.out"
    />
    </div>
  );
};

export default App;
