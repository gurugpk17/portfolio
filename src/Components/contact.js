import React from 'react'
export default function Contact() {
    return(
        <div className='Contact'>
            <h1>Get In Touch</h1>
            <div className='contact-details'>
                <div className='contact-left'>
                    <h3>Contact with Me</h3>
                    <div>
                        <i class="fa-solid fa-envelope"/>
                        <p>gurusgpk@gmail.com</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone"/>
                        <p>9486842633</p>
                    </div>
                    <div>
                        <i className='fas fa-map-marker-alt' style={{ fontSize: '25px', color: 'aqua' }}/>          
                        <p>Dharmapuri, Tamilnadu</p>
                    </div>
                </div>
                <div className='contact-right'>
                    <h3>Contact Me</h3>
                    <div>
                        <input type='text' placeholder='Your Name' />
                        <input type='email' placeholder='Your Email' />
                        <textarea type='address' placeholder='Your Address' />
                        <button className='submit'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}