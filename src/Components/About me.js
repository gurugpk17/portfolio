import React from 'react';
// import Layer from "../Images/Layer_2.png";
import photo from "../Images/new1.png";
export default function AboutMe() {
    return(
        <div className='AboutMe'>
            <h1>About <span>Me</span></h1>
            <div className='aboutme-1'>
                <div className='overlay-photo'>
                    <img className='photo' src={photo} alt='Overlay'/>
                </div>
                <div className='para'>
                    <p>
                    Hello! <span class="name">Gurumoorthy S</span>, a passionate coder currently pursuing Java full-stack in Besant Technologies.
                    My Passion lies in web development, where I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                    </p>
                    <p>Throughout my academic journey, I've honed my skills in designing and implementing robust web applications that blend creativity with functionality. 
                        I believe in leveraging technology to solve real-world problems, and my project portfolio reflects my commitment to delivering impactful solutions using cutting-edge technologies.
                    </p>
                    <p>Currently, I am eager to apply my knowledge and skills in a professional setting where innovation and continuous learning are valued. 
                        I am enthusiastic about contributing to projects that challenge me to grow and evolve as a developer, while making a meaningful impact in the field of technology.
                    </p>
                </div>
            </div>
        </div>
    )
}