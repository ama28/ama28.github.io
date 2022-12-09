import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                                <Link to=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/itch_icon.svg"} alt='itch icon'></img>
                                </Link>
                                <Link to=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/linkedin_icon.svg"} alt='linkedin icon'></img>
                                </Link>
                                <Link to=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/email_icon.svg"} alt='email icon'></img>
                                </Link>
                            </div>
                        </div>
                        <div className='footerInternalLinks'>
                            <Link to='/'>WORK</Link>
                            <Link to='/about'>ABOUT</Link>
                            <Link to='/archive'>ARCHIVE</Link>
                            <Link to='/'>BLOG</Link>
                            <Link to='/'>GALLERY</Link>
                            <Link to='/games'>GAMES</Link>
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