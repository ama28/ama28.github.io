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
                                or just to talk about games!
                            </div>
                            <div className='footerExternalLinks'>
                                <a href='mailto:amm28y@gmail.com' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/email_icon.svg"} alt='email icon'></img>
                                </a>
                                <a target='_blank' href='https://adrianma.itch.io/'>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/itch_icon.svg"} alt='itch icon'></img>
                                </a>
                                <a href='https://www.linkedin.com/in/adrian-ma8' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/linkedin_icon.svg"} alt='linkedin icon'></img>
                                </a>
                                <a href='https://www.superjumpmagazine.com/author/adrianma/' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/blog_icon.svg"} alt='medium icon'></img>
                                </a>
                            </div>
                        </div>
                        <div className='footerInternalLinks'>
                            <Link to='/'>WORK</Link>
                            <Link to='/about'>ABOUT</Link>
                            <a target='_blank' href='https://www.superjumpmagazine.com/author/adrianma/'>BLOG</a>
                            {/* <a target='_blank' href='https://docs.google.com/document/d/1s1sjBssLC0LS-1ClqeaMErWVwl9F-5AlFyeqleDR2hQ/edit?usp=sharing'>RESUME</a> */}
                            {/* <Link to='/games'>PLAYING</Link>
                            <Link to='/archive'>ARCHIVE</Link> */}
                        </div>
                    </div>
                    <div className='footerCopyrightContainer'>
                        <span className='copyrightText'>© Copyright 2024 Adrian Ma</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer