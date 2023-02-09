import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class DimensionalRift extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          title="Dimensional Rift"
          description="An asymmetrical co-op game where two different game worlds collide!"
          imageURL={require('../../images/DR/DR_Header.jpg')}
          itchlink="https://adrianma.itch.io/dimensional-rift"
          githublink="https://github.com/ama28/Dimensional-Rift"
          gcslink="https://www.gamecreation.org/games/dimensional_rift"
          roles="Team Lead, Programmer, Artist"
          duration="4 months"
          team="Game Creation Society"
          />
        <div className='contentContainer'>
          <div className='sectionContainer noTitle'>
            <div className='row'>
              <div className='column'> 
                <h2>Overview</h2>
                <p>I led this project alongside my friend Will Ozeas with the CMU Game Creation Society. I love co-op games and initially came up with the idea for this game way back when I first experimented with perspectives in Super Paper Mario. <br></br><br></br>My primary goal was to practice efficient planning and management in order to create a game that feels polished despite our time frame and the varying commitments of club members on the team.</p>  
              </div>
              <iframe allow="fullscreen;" width="420" height="315" style={{border:0}}
              src="https://www.youtube.com/embed/TBNidA8OgGw ">
              </iframe> 
            </div>
          </div>
          <div className='sectionContainer'>
            <h2>My Contributions</h2>
            <div className='row'>
              <div className='column'>
                <p style={{marginBottom: '0px'}}>I initially pitched Dimensional Rift to the Game Creation Society in Fall of 2022, and served as its primary lead for the duration of the project. <b>Some of my key responsibilities included:</b> </p>
                <ul>
                  <li>Creating weekly / alpha / beta milestones, checking in on progress, readjusting plans, and delegating tasks</li>
                  <li>Leading game design and iterating on the design through playtesting sessions</li>
                  <li>Implementing art assets and character animations</li>
                  <li>Designing the GUI and implementing it</li>
                  <li>Programming core mechanics including character movement and interactions, economy / shop system, and more</li>
                </ul>
              </div>
              <div className='column gallery'>
                <img src={require('../../images/DR/DR_SC2.png')}></img>
                <img src={require('../../images/DR/DR_SC3.png')}></img>
              </div>
            </div>
            <iframe className='itchembed' src="https://itch.io/embed/1883672?dark=true" width="552" height="167" style={{border:'0px'}}><a href="https://adrianma.itch.io/dimensional-rift">Dimensional Rift by adrianma, willozeas</a></iframe>
          </div>
        </div>
      </div>
    )
  }
}
