import React, { Component } from 'react';
import '../App.css';
import GamePost from '../components/GamePost';
import BlogPost from '../components/BlogPost';
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

    featuredGamePost() {
        if (this.props.gamePosts[this.props.gamePosts.length-1] != null &&
            typeof this.props.gamePosts[this.props.gamePosts.length-1] !== 'undefined')
        {
            return <GamePost 
                title={this.props.gamePosts[this.props.gamePosts.length-1].title}
                description={this.props.gamePosts[this.props.gamePosts.length-1].description}
                imageURL={this.props.gamePosts[this.props.gamePosts.length-1].imageURL}
                starCount={this.props.gamePosts[this.props.gamePosts.length-1].starCount}
                headers={this.props.gamePosts[this.props.gamePosts.length-1].headers}
                content={this.props.gamePosts[this.props.gamePosts.length-1].content}
                articlelink={this.props.gamePosts[this.props.gamePosts.length-1].articlelink}
            />
        }
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
                                <p>My goal is to design digital experiences that can leave a long-lasting impact on those who use them and to explore and develop new ways through which we can interact with technology. I love to learn about all facets of game design, but specialize in economy design and combat design. </p>
                                <p>I graduated from Carnegie Mellon University in 2023 with degrees in Cognitive Science, Human-Computer Interaction, Game Design, and Animation, and am currently working on Piano Tiles 2 as an Associate Game Designer at Kooapps.</p>
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
                                <a href='https://www.superjumpmagazine.com/author/adrianma/' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/blog_icon.svg"} alt='medium icon'></img>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* ========== Game Corner and Gallery Callouts ========== */}
                <div className='otherWork'>

                    {/* ------ Game Blog Callout ------ */}
                    <div className='aboutCallout gameCorner'>
                        <div className='aboutCalloutTitle'>My Game Design Blog</div>

                        <div className='calloutSubHeader'>
                            <span className='calloutSubHeadLine'></span>
                            <div>LATEST POST</div>
                            <span className='calloutSubHeadLine'></span>
                        </div>

                        {/* ------ Featured Blog Post ------ */}
                        <BlogPost 
                            title={"How Damage Scaling Holds Fighting Games Together"}
                            description={"Fighting games are, without a doubt, some of the hardest games to develop. Due to their extremely competitive nature, which hinges on micro-interactions, design elements such as clean animations, rollback netcode, clear feedback, and many others become necessities rather than elements of polish. However, in my opinion, the hardest aspect of designing a fighting game is making it feel balanced."}
                            imageURL={require('../images/ryu.png')}
                            articlelink={'https://www.superjumpmagazine.com/how-damage-scaling-holds-fighting-games-together/'}
                        />

                        <Link to='https://www.superjumpmagazine.com/author/adrianma/' target="_blank" className='rectButton small hvr-shutter-out-horizontal'>SEE MORE</Link>
                    </div>

                    <div className='aboutCallout gameCorner'>
                        <div className='aboutCalloutTitle'>The Game Corner</div>

                        <div className='calloutSubHeader'>
                            <span className='calloutSubHeadLine'></span>
                            <div>LATEST POST</div>
                            <span className='calloutSubHeadLine'></span>
                        </div>

                        {/* ------ Featured Game Post ------ */}
                        {this.featuredGamePost()}

                        <Link to='/games' className='rectButton small hvr-shutter-out-horizontal'>SEE MORE</Link>
                    </div>
                </div>

                <div className='aboutWebsiteContainer'>
                    <div className='aboutWebsite'>
                        <a href='https://ama28.github.io/websiteV3/' target='_blank'><img src={require('../images/oldwebsite.png')}></img></a>
                        <div>
                            <h1>This Website</h1>
                            <p>This website is my third iteration of a portfolio site (second iteration on the left), and was <b>built from scratch using React without the use of any component libraries like Bootstrap.</b> <br></br><br></br>I’ve designed a lot of websites, but never really understood the experiences of the developers that would have to implement my designs. <b>This project serves to help me bridge that gap so that I can better understand developer needs in my future work.</b> </p>
                            <p>The most crucial problem with my previous iterations was the difficulty of adding new content. The third iteration incorporates a better user experience and solves this problem through <b>a system I created with the Papa Parse package that allows me to add new content to the site through csv files, without needing to touch even a line of code.</b> </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe