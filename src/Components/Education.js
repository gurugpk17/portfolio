import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // import Font Awesome CSS

export default function Education(){
    return (
        <div className='Education'>
            <h1>Education</h1>
            <div className="edu-details">
                <div className='graduation-outer'>
                    <div className='graduation'>
                        <h2>2020-2024</h2>
                        <h3>Graduation</h3>
                        <p style={{color:'#7BB3C5',fontWeight:'bold'}}>8.2 CGPA</p>
                        <p>Sri Ramakrishna Institute of Technology</p>
                        <div>
                            <i className='fas fa-map-marker-alt' style={{ fontSize: '25px', color: 'aqua' }}/>
                            <p>Coimbatore, Tamil Nadu</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-graduation-cap"/>
                </div>
                <div className='hsc-outer'>
                    <i class="fa-solid fa-user-graduate"/>
                    <div className='hsc'>
                        <h2>2019-2020</h2>
                        <h3>Higher Education</h3>
                        <p style={{color:'#7BB3C5',fontWeight:'bold',fontStyle:'italic'}}>83.667%</p>
                        <p>Paramveer Hi-Tech Matric Higher Secondary School</p>
                        <div>
                            <i className='fas fa-map-marker-alt' style={{ fontSize: '25px', color: 'aqua' }}/>
                            <p>Paupparapatti, Dharmapuri, Tamil Nadu</p>
                        </div>
                    </div>
                </div>
                <div className='sslc-outer'>
                    <div className='sslc'>
                        <h2>2017-2018</h2>
                        <h3>Secondary Education</h3>
                        <p style={{color:'#7BB3C5',fontWeight:'bold'}}>84.2%</p>
                        <p>Thiyagi Subramanya Siva Government Higher Secondary School</p>
                        <div>
                            <i className='fas fa-map-marker-alt' style={{ fontSize: '25px', color: 'aqua' }}/>
                            <p>Paupparapatti, Dharmapuri, Tamil Nadu</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-book-open-reader"/>
                </div>               
            </div>
        </div>
    )
}