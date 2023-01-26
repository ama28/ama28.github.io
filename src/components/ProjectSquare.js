import { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

class ProjectSquare extends Component {
    constructor(props){
        super(props);
        this.state = {
            hovering: false,
        }
    }

    /* changes state to indicate hovering */
    onHovering = () => {
        this.setState((prevState) => ({
            ...prevState,
            hovering: true,
        }))
    }

    /* changes state to indicate not hovering */
    offHovering = () => {
        this.setState((prevState) => ({
            ...prevState,
            hovering: false,
        }))
    }

    /* check if an item should be rendered based on the filter mode */
    checkIfShouldBeRendered = () => {
        switch (this.props.filterMode) {
            case "All":
                return true;
            case "Design":
                return this.props.category.design;
            case "Games":
                return this.props.category.games;
            case "Research":
                return this.props.category.research;
        }
    }

    render() {
        const squareStyle = {
            backgroundImage: this.props.imageURL,
            backgroundPosition: 'center center',
        }
        return (
            this.checkIfShouldBeRendered() ?
                <Link to='/project' onMouseOver={this.onHovering} onMouseOut={this.offHovering}>
                    <div className='projectContainer dropShadow'>
                        <div className={`projectSquare ${this.state.hovering ? 'zoomed' : ''}`} style={squareStyle}>
                            <div className={`projectOverlayContainer ${this.state.hovering ? 'visible' : ''}`}>
                                <div className={`projectHeaderContainer ${this.state.hovering ? "hovering" : ""}`}>
                                    <span className='projectTitle'>{this.props.title}</span>
                                    <span className='projectDivider long'></span>
                                    <span className='projectDivider short'></span>
                                    <span className='projectSkills'>{this.props.skills}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link> : null
        );
    }
}

export default ProjectSquare