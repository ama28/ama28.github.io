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

    checkIfShouldBeRendered = () => {
        switch (this.props.filterMode) {
            case "Highest Rating":
                return true;
            case "Lowest Rating":
                return this.props.category.design;
            case "Recent":
                return this.props.category.games;
        }
    }

    switchModal = (state) => {
        state ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
        this.setState(prevState => ({
            ...prevState,
            modalIsOpen: state
        }))
    }

    onHovering = () => {
        this.setState((prevState) => ({
            ...prevState,
            hovering: true,
        }))
    }

    offHovering = () => {
        this.setState((prevState) => ({
            ...prevState,
            hovering: false,
        }))
    }

    renderStar(index) {
        if (this.props.starCount >= index)
            return <img src={process.env.PUBLIC_URL + "/assets/icons/yellow_star.svg"}></img>;
        else 
            return <img src={process.env.PUBLIC_URL + "/assets/icons/gray_star.svg"}></img>
    }

    render () {
        return (
            <div>
                <div onClick={() => this.switchModal(true)} className={`gamePostLink dropShadow ${this.state.hovering ? 'enlarged' : ''}`} 
                     onMouseOver={() => this.onHovering()} onMouseOut={() => this.offHovering()}>
                    <div className='gameCardBack'>
                        <div className='headerImage'>
                            <img src={this.props.imageURL}></img>
                        </div>
                        <div className='gameCardDetailsContainer'>
                            <div className='gameCardDescriptionContainer'>
                                <div className='gameTitle'>{this.props.title}</div>
                                <div className='gameReview'>
                                    <div className='textGradient'></div>
                                    {this.props.description}
                                </div>
                            </div>
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
                {this.state.modalIsOpen &&
                    <GameModal
                        isOpen={this.state.modalIsOpen}
                        closeModal={() => this.switchModal(false)}
                        title={this.props.title}
                        description={this.props.description}
                        imageURL={this.props.imageURL}
                        content={this.props.content}
                />}
            </div>
        );
    }
}

export default GamePost