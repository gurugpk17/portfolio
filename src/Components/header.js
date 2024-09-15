import React from 'react'
import Navlogo from "../Images/G4.png"
export default function Header(){
    return (
        <div className='Nav-bar'>
          <img className='nav-logo' src={Navlogo} alt='Nav-logo'/>
          <div className='Links'>
            <a href='#home'>Home</a>
            <a href='#Edu'>Education</a>
            <a href='#Projects'>Projects</a>
            <a href='#Contact'>Contact</a>
          </div>
        </div>
      );
}
    