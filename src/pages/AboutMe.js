import React, { Component } from 'react';
import '../App.css';
import GamePost from '../components/GamePost';
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
                    url: `${process.env.PUBLIC_URL + "/assets/images/IMG_0299.jpg"}`
                },
                {
                    key: 3,
                    url: `${process.env.PUBLIC_URL + "/assets/images/treehouse.jpg"}`
                }
            ],
            galleryImages: [

            ]
        }
    }

    renderGalleryPreview() {
        return this.state.galleryPreviewImages.map((image) => {
            return <img key={image.key} src={image.url} className="dropShadow"></img>
        })
    }

    render() {
        return (
            <div>
                <div className='aboutHeaderContainer'>
                    <img src={process.env.PUBLIC_URL + "/assets/images/profilepic.jpg"}></img>
                    <div className='aboutDetailsContainer'>
                        <div className='aboutHeader'>
                            <div className='aboutTitle'>Hi, I'm Adrian</div>
                            <div className='aboutDescription'>
                                Sed ac lorem tempor, tempor elit ac, porttitor magna. Nunc tincidunt 
                                lorem condimentum ante malesuada, non sodales turpis dapibus. lorem condimentum 
                                ante malesuada, non sodales turpis dapibus.  
                            </div>
                            <div className='aboutLinks'>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/email_icon.svg"}></img>
                                </a>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/itch_icon.svg"}></img>
                                </a>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/linkedin_icon.svg"}></img>
                                </a>
                                <a href=''>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/medium_icon.svg"}></img>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='otherWork'>

                    <div className='aboutCallout gameCorner'>

                        <div className='aboutCalloutTitle'>Adrian's Game Corner</div>

                        <div className='calloutSubHeader'>
                            <span className='calloutSubHeadLine'></span>
                            <div>LATEST POST</div>
                            <span className='calloutSubHeadLine'></span>
                        </div>

                        <GamePost 
                            starCount={this.props.gamePosts[this.props.gamePosts.length-1].starCount}
                            title={this.props.gamePosts[this.props.gamePosts.length-1].title}
                            description={this.props.gamePosts[this.props.gamePosts.length-1].description}
                            imageURL={this.props.gamePosts[this.props.gamePosts.length-1].imageURL}/>

                        <Link to='/games' className='rectButton small hvr-shutter-out-horizontal'>SEE MORE</Link>
                    </div>

                    <div className='aboutCallout artAndMore'>

                        <div className='aboutCalloutTitle'>Art, Graphic Design, &#38; More!</div>

                        <div className='calloutSubHeader'>
                            <span className='calloutSubHeadLine'></span>
                            <div>FEATURED WORK</div>
                            <span className='calloutSubHeadLine'></span>
                        </div>
                        
                        {/* very manual, needs to be refactored — especially the styles*/}
                        <div className='aboutCalloutGallery'>
                            <div className='galleryLeft'>
                                {this.renderGalleryPreview()}
                            </div>
                            <img src={`${process.env.PUBLIC_URL + "/assets/images/dungeonp_screen.png"}`} className="dropShadow"></img>
                        </div>

                        <Link to='/games' className='rectButton small hvr-shutter-out-horizontal'>SEE MORE</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe