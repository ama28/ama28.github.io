import { Component } from 'react';
import '../App.css';

class ProjectSquare extends Component {
    constructor(props){
        super(props);
        this.state = {
            hovering: false            
        }
    }

    onHovering = () => {
        this.setState((prevState) => ({
            ...prevState,
            hovering: true
        }))
    }

    offHovering = () => {
        this.setState((prevState) => ({
            ...prevState,
            hovering: false
        }))
    }

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
            background: this.props.backgroundImgURL,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }
        return (
            this.checkIfShouldBeRendered() ?
                <a href='' onMouseOver={this.onHovering} onMouseOut={this.offHovering}>
                    <div className='projectContainer dropShadow'>
                        <div className='projectSquare' style={squareStyle}>
                            <div className={this.state.hovering ? 'projectOverlayContainer visible' : 'projectOverlayContainer'}>
                                <div className='projectHeaderContainer'>
                                    <span className='projectTitle'>{this.props.title}</span>
                                    <span className='projectDivider long'></span>
                                    <span className='projectDivider short'></span>
                                    <span className='projectSkills'>{this.props.skills}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a> : null
        );
    }
}

export default ProjectSquare