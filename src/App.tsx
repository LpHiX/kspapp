import React from 'react';
import {useRef} from 'react';
import logo from './logo.webp';
import './App.css';
import InitiativeText from './InitiativeText/InitiativeText';
import PassionText from './PassionText/PassionText';
import TeamworkText from './TeamworkText/TeamworkText';
import ExtraComponent from './MoreComponent/MoreComponent';

function App() {
  const initiativeLink = useRef(null);
  const teamworkLink = useRef(null);
  const passwordLink = useRef(null);
  const extraLink = useRef(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLLIElement>) => {
    if(elementRef.current != null){
      window.scrollTo({
        top: elementRef.current.offsetTop - 60,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="App">
      <div className="navDiv">
        <ul className="navList">
          <li onClick={() => scrollToSection(initiativeLink)} className="sectionLink">Initiative</li>
          <li onClick={() => scrollToSection(teamworkLink)} className="sectionLink">Teamwork</li>
          <li onClick={() => scrollToSection(passwordLink)} className="sectionLink">Passion</li>
          <li onClick={() => scrollToSection(extraLink)} className="sectionLink">More </li>
          
        </ul>
      </div>
      <header className="App-header">
        <div className="headerBody">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to my application for KSP! I am Martin, and I hope you can enjoy reading this application!</p>
        </div>
      </header>
      <div className="documentBody">
        <div ref={initiativeLink}><InitiativeText/></div>
        <div ref={teamworkLink}><TeamworkText /></div>
        <div ref={passwordLink}><PassionText /></div>
        <div ref={extraLink}><ExtraComponent /></div>
        </div>
    </div>
  );
}

export default App;
