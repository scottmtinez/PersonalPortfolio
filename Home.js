import React, { useState, useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import myself from './myself.jpg';
import resume from './Resume - Scott Martinez (1).pdf';

function Home(){
    return (
        <div className='home-background'>
            <div className='home-main-container'>
                <div className='home-headshot-container'>
                    <img src={myself} className='home-headshot'/>
                </div>
                <div className="home-info-container">
                    <h1 className="home-name">Scott Martínez</h1>
                    <h2 className="home-pos-title">Software Engineer</h2>
                    <h3 className='home-location'><i class="bi bi-geo-alt-fill"></i>Wisconsin, USA</h3>
                    <div className='home-icons'>
                        <a href='https://www.instagram.com/scottmtinez/'><i class="bi bi-instagram" id='home-instagram'></i></a>
                        <a href='https://www.linkedin.com/in/scott-martinez-290a40249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bo4aVek64QwiEFlRQRqQHow%3D%3D'><i class="bi bi-linkedin" id='home-linkedin'></i></a>
                        <a href='https://github.com/scottmtinez'><i class="bi bi-github" id='home-github'></i></a>
                        <a href={resume} ><i class="bi bi-download" id='home-resume'></i></a> {/* NOTE: Needs to be fixed*/}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
