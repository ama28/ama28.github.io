import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <div className='footerBackground'>
                <div className='footerContainer'>
                    <div className='footerContentContainer'>
                        <div className='contactInfo'>
                            <div className='email'>
                                amm28y@gmail.com
                            </div>
                            <div className='footerDescription'>
                                Contact me for jobs, opportunities for collaboration, design discussions, 
                                or even to just talk about games!
                            </div>
                            <div className='footerExternalLinks'>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/itch_icon.svg"}></img>
                                </a>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/linkedin_icon.svg"}></img>
                                </a>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/email_icon.svg"}></img>
                                </a>
                            </div>
                        </div>
                        <div className='footerInternalLinks'>
                            <a href=''>WORK</a>
                            <a href=''>ABOUT</a>
                            <a href=''>ARCHIVE</a>
                            <a href=''>BLOG</a>
                            <a href=''>GALLERY</a>
                            <a href=''>GAMES</a>
                        </div>
                    </div>
                    <div className='footerCopyrightContainer'>
                        <span className='copyrightText'>© Copyright 2022 Adrian Ma</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer