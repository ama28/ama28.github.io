import React, { Component } from 'react';
import '../App.css';
import ProjectSquare from '../components/ProjectSquare';
import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer width="100%" height="480px" url={url} playing={isSelected} controls={true}/>
);

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMode: 'All',
        }
    }

    /* Changes filter mode which determines what projects are shown and in what order */
    switchFilterMode = (event) => {
        this.setState(prevState => ({
            ...prevState,
            filterMode: event.target.value
        }))
    }

    renderProjects() {
        return this.props.projects.map((item, idx) => {
            return <ProjectSquare
                key={idx}
                filterMode={this.state.filterMode}
                imageURL={item.imageURL}
                title={item.title}
                route={item.route}
                altRoute={item.altRoute}
                skills={item.skills}
                category={item.category} />
        })
    }

    render() {
        const description =
            <div className='introDescription' style={{ fontSize: '50px' }}>
                <b>ADRIAN MA</b> <span className='semiBold' style={{ color: '#FFFF00' }}>/</span> <span className='semiBold' style={{ color: '#90EE90' }}>Game Designer</span>
                {/* <b>Adrian Ma</b> is a game designer focused on innovative the social creating <span className='semiBold' style={{color: '#90EE90'}}>
                transformative,</span> <span className='semiBold' style={{color: '#FFFF00'}}> immersive,</span> and 
                <span className='semiBold' style={{color: '#9999FF'}}> accessible</span> real-time experiences.  */}
            </div>

        // video carousel constants
        const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

        const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

        const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

        const customRenderThumb = (children) =>
            children.map((item) => {
                const videoId = getVideoId(item.props.url);
                return <img src={getVideoThumb(videoId)} />;
            });

        return (
            <div>
                <NavBar
                    switchPage={this.props.switchPage}
                    currentPage={this.props.currentPage}
                    alwaysWhite={false} />

                {/* ========== Introduction at the Top of the Work Page ========== */}
                <PageHeader
                    bar={false}
                    styledDescription={description} />

                <div className='vidCarouselContainer'>
                    <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb} dynamicHeight={true} showThumbs={false}>
                        <YoutubeSlide key="heuristicats" url="https://www.youtube.com/embed/r1VZ5PE3MP4?si=zkg6T6pwPjfuTF3g" />
                        <YoutubeSlide key="escape-dartist" url="https://www.youtube.com/embed/l8gRlFFCwc8?si=s9VT9C2f8gRBdmci" />
                        <YoutubeSlide key="dimensional-rift" url="https://www.youtube.com/embed/TBNidA8OgGw" />
                        <YoutubeSlide key="tanks-in-advance" url="https://www.youtube.com/embed/uhIsBM8HQNk?si=ktmJVtbGx887g_ia" />
                        <YoutubeSlide key="space-shank" url="https://www.youtube.com/embed/Va5KK0SSgMc?si=2W8i1Na2YsrrLYEW" />
                        {/* <YoutubeSlide key="split" url="https://www.youtube.com/embed/d4vYNQTEoBo?si=A6HTmPGdt1eOnKDs" /> */}
                        {/* <YoutubeSlide key="gale-guardians" url="https://www.youtube.com/embed/6wQmp32qHsw?si=uRVhTkqWv6wA9vjp" /> */}
                        {/* <YoutubeSlide key="backslash" url="https://www.youtube.com/embed/MqZTwkDbLjE?si=70GuCk17_8P3ik04" /> */}
                    </Carousel>
                </div>

                <div className='workContentContainer'>
                    {/* ========== Filter Button ========== */}

                    {/* <div className='filterContainer' style={{backgroundImage: `${process.env.PUBLIC_URL}/assets/images/Vector.svg`}}>
                        <span className='filterLabel'>Filter by: </span>
                        <div className='filterButtonContainer'>
                            <select onChange={this.switchFilterMode}>
                                <option value='All'>ALL</option>
                                <option value='Design'>UX DESIGN</option>
                                <option value='Games' selected="selected">GAMES</option>
                                <option value='Research'>RESEARCH</option>
                            </select>
                            <span className='down arrow'></span>
                        </div>
                    </div> */}

                    {/* ========== Grid of Projects ========== */}
                    <div className='projectGridContainer'>
                        {this.renderProjects()}
                    </div>

                    {/* ========== See Archive Button ========== */}
                    <Link to='/archive' className='rectButton hvr-shutter-out-horizontal'>SEE ARCHIVE</Link>
                </div>
            </div>
        );
    }
}

export default Work
