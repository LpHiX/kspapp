import React from 'react';
import {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import InitiativeText from './InitiativeText';
import PassionText from './PassionText';
import TeamworkText from './TeamworkText';
import ExtraComponent from './ExtraComponent';

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
          <li onClick={() => scrollToSection(extraLink)} className="sectionLink">Extra</li>
          
        </ul>
      </div>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>Welcome to my application for KSP! <br/> I am Martin, and I hope you<br/> can enjoy reading this application!</p>
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
