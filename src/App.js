import Header from './Components/header';
import Body from './Components/body';
import AboutMe from './Components/About me';
// import Techstack from './Components/Techstack';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/contact';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Header/>
      <Body/>
      <hr className='horizontal-line'/>
      <AboutMe/>      
      <hr className='horizontal-line'/>
      {/* <Techstack/> */}
      <Education/>
      <hr className='horizontal-line'/>
      <Projects/>
      <hr className='horizontal-line'/>
      <Contact /> 
      <hr className='horizontal-line'/>
      <p className='copyright'>Copyright © 2024 Gurumoorthy. All rights reserved.</p>
    </div>
  );
}