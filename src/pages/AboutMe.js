import React, { Component } from 'react';
import '../App.css';
import GamePost from '../components/GamePost';
import NavBar from '../components/NavBar';
import {
    Link,
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
                                <p>My goal is to design digital experiences that can leave a long-lasting impact on those who use them and to explore and develop new ways through which we can interact with technology. </p>
                                <p>I graduated from Carnegie Mellon University in 2023 with degrees in Cognitive Science, Human-Computer Interaction, Game Design, and Animation, and am now working as an Associate Game Designer at Kooapps.</p>
                            </div>
                            {/* ------ Links to External Sites ------ */}
                            <div className='aboutLinks'>
                                <a href='mailto:amm28y@gmail.com' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/email_icon.svg"} alt='email icon'></img>
                                </a>
                                <a href='https://adrianma.itch.io/' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/itch_icon.svg"} alt='itch icon'></img>
                                </a>
                                <a href='https://www.linkedin.com/in/adrian-ma8' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/linkedin_icon.svg"} alt='linkedin icon'></img>
                                </a>
                                <a href='https://medium.com/@amm28y' target='_blank'>
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
                            title={this.props.gamePosts[this.props.gamePosts.length-1].title}
                            description={this.props.gamePosts[this.props.gamePosts.length-1].description}
                            imageURL={this.props.gamePosts[this.props.gamePosts.length-1].imageURL}
                            starCount={this.props.gamePosts[this.props.gamePosts.length-1].starCount}
                            headers={this.props.gamePosts[this.props.gamePosts.length-1].headers}
                            content={this.props.gamePosts[this.props.gamePosts.length-1].content}
                            articlelink={this.props.gamePosts[this.props.gamePosts.length-1].articlelink}
                        />

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

                <div className='aboutWebsiteContainer'>
                    <h1>This Website</h1>
                    <div className='aboutWebsite'>
                        <a href='https://ama28.github.io/websiteV3/' target='_blank'><img src={require('../images/oldwebsite.png')}></img></a>
                        <div>
                            <p>This website is my third iteration of a portfolio site (second iteration on the left), and was <b>built from scratch using React without the use of any component libraries like Bootstrap.</b> <br></br><br></br>I’ve designed a lot of websites, but never really understood the experiences of the developers that would have to implement my designs. <b>This project serves to help me bridge that gap so that I can better understand developer needs in my future work.</b> </p>
                            <p>The most crucial problem with my previous iterations was the difficulty of adding new content. The third iteration incorporates a better user experience and solves this problem through <b>a system I created with the Papa Parse package that allows me to add new content to the site through csv files, without needing to touch even a line of code.</b> </p>
                        </div>
                    </div>
                    <div className='aboutWebsite'>
                        <p><b>The content on this site serves not only as a way to display my experience to employers, but also as a way to ensure that I continue growing as a designer.</b> Each time I undertake a project, my perspective on the design process evolves as I work with different audiences in different contexts. Documenting my experiences here helps me avoid mistakes I’ve made in the past and bring insights that I discover into every project that follows. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe