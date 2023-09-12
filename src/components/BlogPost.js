import React, { Component } from 'react';
import '../App.css';

class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            hovering: false,
        }
    }
    
    /* changes state indicator to hovering */
    onHovering = () => {
        this.setState((prevState) => ({
            ...prevState,
            hovering: true,
        }))
    }

    /* changes state indicator to not hovering */
    offHovering = () => {
        this.setState((prevState) => ({
            ...prevState,
            hovering: false,
        }))
    }
    
    render () {
        return (
            <div>
                <div className={`gamePostLink noStar dropShadow ${this.state.hovering ? 'enlarged' : ''}`} onMouseOver={() => this.onHovering()} onMouseOut={() => this.offHovering()}>
                    <a href={this.props.articlelink} target="_blank" className='gameCardBack noStar'>
                        {/* ========== Cover Image for the Post ========== */}
                        <div className='headerImage'>
                            <img src={this.props.imageURL} alt='the game being reviewed'></img>
                        </div>
                        {/* ========== Rest of the Card that Contains Content and Rating ========== */}
                        <div className='gameCardDetailsContainer noStar'>
                             {/* ------ Text Content ------ */}
                            <div className='gameCardDescriptionContainer'>
                                <div className='gameTitle'>{this.props.title}</div>
                                <div className='gameReview'>
                                    <div className='textGradient'></div>
                                    {this.props.description}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default BlogPost