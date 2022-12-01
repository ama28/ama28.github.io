import React, { Component } from 'react';
import '../App.css';

class GamePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            hovering: false,
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
            <a href='' className={`gamePostLink dropShadow ${this.state.hovering ? 'enlarged' : ''}`} onMouseOver={this.onHovering} onMouseOut={this.offHovering}>
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
            </a>
        );
    }
}

export default GamePost