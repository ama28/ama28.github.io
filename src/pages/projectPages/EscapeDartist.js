import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class EscapeDartist extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          imageURL={require('../../images/escapedartistassets/gif.gif')}
          title={"Escape Dartist"}
          description="A VR stealth game where you escape security drones using darts to both move and attack"
          itchlink='https://adrianma.itch.io/escape-dartist'
          githublink='https://github.com/noorh96/Lawn-Darts-VR'
          roles="Game Designer, Level Designer"
          duration="3 months"
          team="Noor Hammad, Haley Carter, Ian Kaneko, Richard Zhou"
          />

        <div className='contentContainer'>
            <div className='sectionContainer'>
                <h2>My Contributions</h2>
                <div className='row' style={{marginBottom:'0px'}}>
                    <div>
                        <p>For this project, I served primarily as a game designer and a level designer. Here are some of my key responsibilities:</p>
                        <ul>
                            <li>Contributing to and maintaining a game design document</li>
                            <li>Brainstorming gameplay elements and iterating on these mechanics through playtesting</li>
                            <li>Designing the game's levels, blocking them out, and implementing them in Unity</li>
                            <li>Integrating different team members' work</li>
                        </ul>
                    </div>
                    <div>
                        <iframe allow="fullscreen;" width="420" height="315" style={{border:'0', marginBottom:'20px'}}
                        src="https://www.youtube.com/embed/l8gRlFFCwc8?si=s9VT9C2f8gRBdmci"></iframe>
                    </div>
                </div>
                  <img style={{margin: '10px', maxWidth: '60%'}} src={require('../../images/escapedartistassets/escapedartistlevel.png')}></img>
                <iframe style={{border: 'none'}} src="https://itch.io/embed/1916007?dark=true" width="552" height="167"><a href="https://adrianma.itch.io/escape-dartist">Escape Dartist by adrianma</a></iframe>
            </div>
        </div>
      </div>
    )
  }
}
