import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class SpaceShank extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true} />
        <ProjectOverview
          title={"Space Shank"}
          imageURL={require('../../images/spaceshank/spaceshank.jpg')}
          description="A competitive 2-4 player party game about blending in with a crowd and stabbing your friends!"
          itchlink='https://scottking.itch.io/space-shank'
          githublink='https://github.com/jsking2920/Stealth-Game'
          roles="Game Designer, Programmer"
          duration="1 month"
          team="Scott King, Kelly Zhang"
        />

        <div className='contentContainer'>
          <div className='sectionContainer'>
            <h2>My Contributions</h2>
            <div className='row'>
              <div className='column'>
                <ul>
                  <li>Collaborated to design the core pillars of the gameplay experience</li>
                  <li>Designed and implemented 2 game modes</li>
                  <li>Improved user experience through visual and auditory feedback</li>
                  <li>Designed tutorials and UI</li>
                </ul>
              </div>
              <div className='column gallery'>
                <img src={require('../../images/spaceshank/gameplay.png')}></img>
              </div>
            </div>
            <iframe allow="fullscreen;" width="800" height="450" style={{border:0}}
              src="https://www.youtube.com/embed/-kyUefBzeiU?si=wmetPhQQdWCbqr8u"></iframe>
            <iframe frameborder="0" src="https://itch.io/embed/1989867?dark=true" width="552" height="167"><a href="https://scottking.itch.io/space-shank">Space Shank by Scott King</a></iframe>          
            </div>
        </div>
      </div>
    )
  }
}