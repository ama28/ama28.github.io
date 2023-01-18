import React, { Component } from 'react';
import '../App.css';
import PageHeader from '../components/PageHeader';
import ProjectSquare from '../components/ProjectSquare';

class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMode:'All',
        }
    }

    /* Changes filter mode which determines what projects are shown and in what order */
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
                <PageHeader
                    currentPage='Archive'
                    title="Archived Projects"
                    normalDescription="A collection of older projects, personal projects, or some that are just smaller in scope!"
                />

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
