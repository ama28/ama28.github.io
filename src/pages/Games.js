import React, { Component } from 'react';
import '../App.css';
import GamePost from '../components/GamePost';
import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMode:'Recent',
        }
    }

    /* Changes filter mode which determines what order posts are shown in */
    switchFilterMode = (event) => {
        this.setState(prevState => ({
            ...prevState,
            filterMode: event.target.value
        }))
    }

    /* Renders posts from most recent to least */
    renderInOrder() {
        return this.props.gamePosts.map((item, idx) => {
            return <GamePost
                        key={idx}
                        filterMode={this.state.filterMode}
                        imageURL={item.imageURL}
                        title={item.title}
                        description={item.description}
                        starCount={item.starCount}
                        content={item.content}
                        articlelink={item.articlelink}/>
        })
    }

    /* Renders posts high to low or low to high based on rating and the input boolean */
    renderByRating(starRating) {
        return this.props.gamePosts.map((item, idx) => {
            if (item.starCount === starRating)
                return <GamePost
                            key={idx}
                            filterMode={this.state.filterMode}
                            imageURL={item.imageURL}
                            title={item.title}
                            description={item.description}
                            starCount={item.starCount}
                            headers={item.headers}
                            content={item.content}
                            articlelink={item.articlelink}/>
        })
    }

    /* Renders posts based on the current filter mode */
    renderPosts(filterMode) {
        switch (filterMode) {
            case "Recent":
                return this.renderInOrder().reverse();
            case "RatingHL":
                var HL = [];
                for (let i = 5; i > 0; i--){
                    HL.push(this.renderByRating(i));
                }
                return HL;
            case "RatingLH":
                var LH = [];
                for (let i = 1; i <= 5; i++){
                    LH.push(this.renderByRating(i));
                }
                return LH;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <NavBar 
                    switchPage={this.props.switchPage.bind(this)}
                    currentPage={this.props.currentPage}
                    alwaysWhite={false}/>

                {/* ========== Header for Games Page ========== */}
                <PageHeader
                    bar = {true}
                    currentPage={this.props.currentPage}
                    title="The Game Corner"
                    normalDescription="Playing games from different genres and platforms helps me build a game design repertoire that I can pull from when designing. Here I record down learnings from the games I've played and reflect on the impact they have had on me."
                />

                <div className='workContentContainer games'>
                    {/* ========== Filter Button ========== */}

                    <div className='filterContainer' style={{backgroundImage: `${process.env.PUBLIC_URL}/assets/images/Vector.svg`}}>
                        <span className='filterLabel'>Filter by: </span>
                        <div className='filterButtonContainer'>
                            <select onChange={this.switchFilterMode}>
                                <option value='Recent'>RECENT</option>
                                <option value='RatingHL'>RATING ↓ </option>
                                <option value='RatingLH'>RATING ↑</option>
                            </select>
                            <span className='down arrow'></span>
                        </div>
                    </div>

                    {/* ========== Grid of Posts ========== */}
                    <div className='projectGridContainer games'>
                        {this.renderPosts(this.state.filterMode)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Games