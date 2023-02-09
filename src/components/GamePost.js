import React, { Component } from 'react';
import '../App.css';
import GameModal from './GameModal';

class GamePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            hovering: false,
            modalIsOpen: false
        }
    }

    /* check if an item should be rendered based on the filter mode */
    checkIfShouldBeRendered = () => {
        switch (this.props.filterMode) {
            case "Highest Rating":
                return true;
            case "Lowest Rating":
                return this.props.category.design;
            case "Recent":
                return this.props.category.games;
            default:
                break;
        }
    }

    /* opens and closes the corresponding modal containing the blog post for this entry*/
    switchModal = (state) => {
        state ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
        this.setState(prevState => ({
            ...prevState,
            modalIsOpen: state
        }))
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

    /* draws out stars based off of the rating for the post */
    renderStar(index) {
        if (this.props.starCount >= index)
            return <img src={process.env.PUBLIC_URL + "/assets/icons/yellow_star.svg"} alt='a yellow rating star'></img>;
        else 
            return <img src={process.env.PUBLIC_URL + "/assets/icons/gray_star.svg"} alt='a gray empty rating star'></img>
    }

    render () {
        return (
            <div>
                <div onClick={() => this.switchModal(true)} className={`gamePostLink dropShadow ${this.state.hovering ? 'enlarged' : ''}`} 
                     onMouseOver={() => this.onHovering()} onMouseOut={() => this.offHovering()}>
                    <div className='gameCardBack'>
                        {/* ========== Cover Image for the Post ========== */}
                        <div className='headerImage'>
                            <img src={this.props.imageURL} alt='the game being reviewed'></img>
                        </div>
                        {/* ========== Rest of the Card that Contains Content and Rating ========== */}
                        <div className='gameCardDetailsContainer'>
                             {/* ------ Text Content ------ */}
                            <div className='gameCardDescriptionContainer'>
                                <div className='gameTitle'>{this.props.title}</div>
                                <div className='gameReview'>
                                    <div className='textGradient'></div>
                                    {this.props.description}
                                </div>
                            </div>
                            {/* ------ Star Rating Display ------ */}
                            <div className='gameRating'>
                                {this.renderStar(5)}
                                {this.renderStar(4)}
                                {this.renderStar(3)}
                                {this.renderStar(2)}
                                {this.renderStar(1)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ========== Blog Post Modal that Shows When Item is Clicked ========== */}
                {this.state.modalIsOpen &&
                    <GameModal
                        isOpen={this.state.modalIsOpen}
                        closeModal={() => this.switchModal(false)}
                        title={this.props.title}
                        description={this.props.description}
                        imageURL={this.props.imageURL}
                        content={this.props.content}
                        starCount={this.props.starCount}
                />}
            </div>
        );
    }
}

export default GamePost