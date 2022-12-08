import React, { Component } from 'react';
import '../App.css';
import GamePost from '../components/GamePost';
import PageHeader from '../components/PageHeader';

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMode:'Recent',
        }
    }

    switchFilterMode = (event) => {
        this.setState(prevState => ({
            ...prevState,
            filterMode: event.target.value
        }))
    }

    renderInOrder() {
        return this.props.gamePosts.map((item, idx) => {
            return <GamePost
                        key={idx}
                        filterMode={this.state.filterMode}
                        imageURL={item.imageURL}
                        title={item.title}
                        description={item.description}
                        starCount={item.starCount}
                        content={item.content}/>
        })
    }

    renderByRating(starRating) {
        return this.props.gamePosts.map((item, idx) => {
            if (item.starCount == starRating)
                return <GamePost
                            key={idx}
                            filterMode={this.state.filterMode}
                            imageURL={item.imageURL}
                            title={item.title}
                            description={item.description}
                            starCount={item.starCount}
                            headers={item.headers}
                            content={item.content}/>
        })
    }

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
        }
    }

    render() {
        return (
            <div>
                {/* ========== Header for Games Page ========== */}
                <PageHeader
                    currentPage={this.props.currentPage}
                    title="Adrian's Game Corner"
                    normalDescription="If it wasn't obvious already, I love games! Here are some of the games I've played and the impact they have left on me."
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