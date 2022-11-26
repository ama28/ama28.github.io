import React, { Component } from 'react';
import '../App.css';

class GamePost extends Component {
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

    renderStar(index) {
        if (this.props.starCount >= index)
            return <img src={process.env.PUBLIC_URL + "/assets/icons/yellow_star.svg"}></img>;
        else 
            return <img src={process.env.PUBLIC_URL + "/assets/icons/gray_star.svg"}></img>
    }

    render () {
        return (
            <a href='' className='gamePostLink'>
                <div className='gameCardBack dropShadow'>
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