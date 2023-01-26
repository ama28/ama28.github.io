import React, { Component } from 'react';
import '../App.css';
import GamePost from '../components/GamePost';
import NavBar from '../components/NavBar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryPreviewImages: [
                {
                    key: 1,
                    url: `${process.env.PUBLIC_URL + "/assets/images/chen.jpg"}`

                },
                {
                    key: 2,
                    url: `${process.env.PUBLIC_URL + "/assets/images/IMG_0299.JPG"}`
                },
                {
                    key: 3,
                    url: `${process.env.PUBLIC_URL + "/assets/images/treehouse.jpg"}`
                }
            ],
            galleryImages: []
        }
    }

    /* Renders the first 3 images in the gallery preview (this needs to be revised to be less manual) */
    renderGalleryPreview() {
        return this.state.galleryPreviewImages.map((image) => {
            return <img key={image.key} src={image.url} className="dropShadow" alt='an example of my artwork'></img>
        })
    }

    render() {
        return (
            <div>
                <NavBar 
                    switchPage={this.props.switchPage}
                    currentPage={this.props.currentPage}
                    alwaysWhite={false}/>

                {/* ========== About Me Header ========== */}
                <div className='aboutHeaderContainer'>
                    <img src={process.env.PUBLIC_URL + "/assets/images/profilepic.jpg"}  alt='profile picture of me'></img>
                    <div className='aboutDetailsContainer'>
                        <div className='aboutHeader'>
                            {/* ------ Title and Description ------ */}
                            <div className='aboutTitle'>Hi, I'm Adrian</div>
                            <div className='aboutDescription'>
                                Sed ac lorem tempor, tempor elit ac, porttitor magna. Nunc tincidunt 
                                lorem condimentum ante malesuada, non sodales turpis dapibus. lorem condimentum 
                                ante malesuada, non sodales turpis dapibus.  
                            </div>
                            {/* ------ Links to External Sites ------ */}
                            <div className='aboutLinks'>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/email_icon.svg"} alt='email icon'></img>
                                </a>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/itch_icon.svg"} alt='itch icon'></img>
                                </a>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/linkedin_icon.svg"} alt='linkedin icon'></img>
                                </a>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/medium_icon.svg"} alt='medium icon'></img>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* ========== Game Corner and Gallery Callouts ========== */}
                <div className='otherWork'>

                    {/* ------ Game Blog Callout ------ */}
                    <div className='aboutCallout gameCorner'>
                        <div className='aboutCalloutTitle'>Adrian's Game Corner</div>

                        <div className='calloutSubHeader'>
                            <span className='calloutSubHeadLine'></span>
                            <div>LATEST POST</div>
                            <span className='calloutSubHeadLine'></span>
                        </div>

                        {/* ------ Featured Game Post ------ */}
                        <GamePost 
                            starCount={this.props.gamePosts[this.props.gamePosts.length-1].starCount}
                            title={this.props.gamePosts[this.props.gamePosts.length-1].title}
                            description={this.props.gamePosts[this.props.gamePosts.length-1].description}
                            imageURL={this.props.gamePosts[this.props.gamePosts.length-1].imageURL}/>

                        <Link to='/games' className='rectButton small hvr-shutter-out-horizontal'>SEE MORE</Link>
                    </div>

                    {/* ------ Gallery Callout ------ */}
                    <div className='aboutCallout artAndMore'>
                        <div className='aboutCalloutTitle'>Art, Graphic Design, &#38; More!</div>

                        <div className='calloutSubHeader'>
                            <span className='calloutSubHeadLine'></span>
                            <div>FEATURED WORK</div>
                            <span className='calloutSubHeadLine'></span>
                        </div>
                        
                        {/* gallery preview for now — very manual, needs to be refactored */}
                        <div className='aboutCalloutGallery'>
                            <div className='galleryLeft'>
                                {this.renderGalleryPreview()}
                            </div>
                            <img src={`${process.env.PUBLIC_URL + "/assets/images/DungeonP_screen.png"}`} className="dropShadow" alt='an example of my artwork'></img>
                        </div>

                        <div className='rectButton small' style={{opacity: '40%'}}>UNDER CONSTRUCTION</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe