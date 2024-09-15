import React from 'react';
import Photo from "../Images/new1.png";
import Linedin from "../Images/linkedin_1x.png";
import Github from "../Images/github-1.png";
import Mail from "../Images/envelope.png";
import Instagram from "../Images/instagram-white.png";
import Twitter from "../Images/twitter.png";
import Docx from "../Images/docx.png";
import resume from "./Resume.pdf";

export default function Body() {
    return (
        <div className='Body'>
            <div className='Myself'>
                <div className='hi'>
                    <hr />
                    <h1>Hi</h1>
                </div>
                <div className='myself2'>
                    <h1>I'm Gurumoorthy</h1>
                    <h2 className='about'>a CS Student</h2>
                </div>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/gurugpk17' target="_blank" rel="noreferrer noopener">
                        <img className='linkedin' src={Linedin} alt='LinkedIn' />
                    </a>
                    <a href='https://github.com/gurugpk17' target="_blank" rel="noreferrer noopener">
                        <img className='github' src={Github} alt='GitHub' />
                    </a>
                    <a href='mailto:gurugpkjuly17@gmail.com'>
                        <img className='mail' src={Mail} alt='Mail' />
                    </a>
                    <a href='https://www.instagram.com/guru_gpk/' target="_blank" rel="noreferrer noopener">
                        <img className='insta' src={Instagram} alt='Instagram' />
                    </a>
                    <a href="https://x.com/GurumoorthyS20" target="_blank" rel="noreferrer noopener">
                        <img className='twitter' src={Twitter} alt='Twitter' />
                    </a>
                </div>
                <a className='resume-box' href={resume} download>
                    <img className='docx' src={Docx} alt='Resume Icon' />Resume
                </a>
            </div>
            <div className='profile_photo'>
                <img className='profile' src={Photo} alt='Profile' />
            </div>
        </div>
    );
}
