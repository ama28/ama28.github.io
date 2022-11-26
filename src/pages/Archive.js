import React, { Component } from 'react';
import '../App.css';
import ProjectSquare from '../components/ProjectSquare';

class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMode:'All',
        }
    }

    switchFilterMode = (event) => {
        this.setState(prevState => ({
            ...prevState,
            filterMode: event.target.value
        }))
    }

    renderProjects() {
        return this.props.archivedProjects.map((item, idx) => {
            return <ProjectSquare
                        key={idx}
                        filterMode={this.state.filterMode}
                        backgroundImgURL={item.backgroundImgURL}
                        title={item.title}
                        skills={item.skills}
                        category={item.category}/>
        })
    }

    render() {
        return(
            <div>
                {/* ========== Header for Archive Page ========== */}
                <div className='introContainer'>
                    <div className='introBar'></div>
                    <div className='introDescription'>
                        <h3>Archived Projects</h3>
                        <span style={{fontSize: '20px', lineHeight: '1em'}}>
                            More projects that are old or smaller in scope. Some were completed in my HCI coursework at Carnegie Mellon, 
                            others are just fun personal projects!
                        </span>
                    </div>
                </div>

                <div className='workContentContainer'>
                    {/* ========== Filter Button ========== */}

                    <div className='filterContainer' style={{backgroundImage: `${process.env.PUBLIC_URL}/assets/images/Vector.svg`}}>
                        <span className='filterLabel'>Filter by: </span>
                        <div className='filterButtonContainer'>
                            <select onChange={this.switchFilterMode}>
                                <option value='All'>ALL</option>
                                <option value='Design'>UX DESIGN</option>
                                <option value='Games'>GAMES</option>
                                <option value='Research'>RESEARCH</option>
                            </select>
                            <span className='down arrow'></span>
                        </div>
                    </div>

                    {/* ========== Grid of Archived Projects ========== */}
                    <div className='projectGridContainer'>
                        {this.renderProjects()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Archive
