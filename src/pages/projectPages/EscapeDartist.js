import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class EscapeDartist extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`,
      backgroundSize: '',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }

    return (
      <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          imageURL={require('../../images/escapedartistassets/gif.gif')}
          titleImage={require('../../images/escapedartistassets/logo.png')}
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
                            <li>Designing the game's levels and implementing them in Unity</li>
                            <li>Integrating different team members' work</li>
                        </ul>
                    </div>
                    <div>
                        <iframe allow="fullscreen;" width="420" height="315" style={{border:'0', marginBottom:'20px'}}
                        src="https://www.youtube.com/embed/1a9-9AhRGE8 "></iframe>
                        <div className='center'>
                            <span>Note: recording is much darker than the actual game</span>
                        </div>
                    </div>
                </div>
                <iframe style={{border: 'none'}} src="https://itch.io/embed/1916007?dark=true" width="552" height="167"><a href="https://adrianma.itch.io/escape-dartist">Escape Dartist by adrianma</a></iframe>
            </div>
        </div>
      </div>
    )
  }
}
