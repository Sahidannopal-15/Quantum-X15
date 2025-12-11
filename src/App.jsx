import React, { useState } from 'react';
import CardNav from './components/CardNav';
import logo from "./assets/logo.png";
import LetterGlitch from './components/LetterGlitch';
import FuzzyText from './components/FuzzyText';
import { GridScan } from './components/GridScan';
import FileUploader from './components/FileUploader';
import SelectAlgorithm from "./components/SelectAlgorithm";
import HashButton from './components/HashButton';
import Result from './components/Result';
import AlgorithmEducation from './components/AlgorithmEducation';
import Footer from './components/Footer';

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [algorithm, setAlgorithm] = useState("");
  const [hashResults, setHashResults] = useState([]);

  const handleFileSelect = (files) => {
    setSelectedFiles(files);
  };

  const handleHashComplete = (results) => {
    setHashResults(results);
  };

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
    <div className="relative w-full overflow-hidden">
      {/* Section 1: Hero */}
      <section className="relative w-full min-h-screen bg-black">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <GridScan
            sensitivity={0.55}
            lineThickness={3}
            linesColor="#A855F7"
            gridScale={0.1}
            scanColor="#EC4899"
            scanOpacity={0.5}
            enablePost
            bloomIntensity={0.8}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />

        {/* Navigation */}
        {/* <CardNav
          logo={logo}
          logoAlt="Company Logo"
          items={items}
          baseColor="#212529"
          menuColor="#fff"
          buttonBgColor="#fff"
          buttonTextColor="#111"
          ease="power3.out"
        /> */}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className='flex flex-col items-center gap-8'>
            <FuzzyText
              baseIntensity={0.09}
              hoverIntensity={0.2}
              enableHover={true}
              fontSize='clamp(3rem, 8vw, 6rem)'
              fontWeight={900}
              color='#F3F4F6'
            >
              Welcome to
            </FuzzyText>
            <FuzzyText
              baseIntensity={0.12}
              hoverIntensity={0.25}
              enableHover={true}
              fontSize="clamp(4rem, 12vw, 8rem)"
              fontWeight={900}
              color='#A855F7'
            >
              Hash-X15
            </FuzzyText>
            <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl px-4 mt-4">
              Secure, fast, and reliable file hash calculator powered by modern cryptography
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative w-full bg-black">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <LetterGlitch
            glitchSpeed={60}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
            glitchColors={['#A855F7', '#EC4899', '#8B5CF6']}
          />
        </div>

        {/* Gradient*/}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 py-20 px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* File Uploader */}
            <div className="transition-all duration-500 ease-out">
              <FileUploader onFileSelect={handleFileSelect} />
            </div>

            {/* Algorithm Selector */}
            {selectedFiles.length > 0 && (
              <div className="space-y-12 animate-fadeIn">
                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-purple-500/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-6 py-2 bg-black text-purple-400 text-sm font-semibold rounded-full border border-purple-500/30">
                      Step 2: Select Algorithm
                    </span>
                  </div>
                </div>

                {/*Algorithm Selector*/}
                <SelectAlgorithm
                  algorithm={algorithm}
                  setAlgorithm={setAlgorithm}
                />

                {/* Hash Button*/}
                {algorithm && (
                  <div className="animate-fadeIn">
                    {/* Divider */}
                    <div className="relative my-8">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-pink-500/30"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="px-6 py-2 bg-black text-pink-400 text-sm font-semibold rounded-full border border-pink-500/30">
                          Step 3: Calculate Hash
                        </span>
                      </div>
                    </div>

                    <HashButton
                      files={selectedFiles}
                      algorithm={algorithm}
                      onHashComplete={handleHashComplete}
                    />
                  </div>
                )}

                {/* Results */}
                {hashResults.length > 0 && (
                  <div className="animate-fadeIn">
                    {/* Divider */}
                    <div className="relative my-8">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-green-500/30"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="px-6 py-2 bg-black text-green-400 text-sm font-semibold rounded-full border border-green-500/30">
                          Results
                        </span>
                      </div>
                    </div>

                    <Result results={hashResults} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3*/}
      <AlgorithmEducation />

      {/*Footer*/}
      <Footer />

      {/* Global Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;