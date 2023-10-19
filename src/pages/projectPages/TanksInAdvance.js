import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class TanksInAdvance extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true} />
        <ProjectOverview
          title={"Tanks in Advance"}
          imageURL={require('../../images/TIA/TIA_Cover.png')}
          description="A 1v1 tank shootout where you play alongside your past selves"
          itchlink='https://willozeas.itch.io/tanks-in-advance'
          githublink='https://github.com/williamozeas/Tanks-In-Advance'
          roles="Game Designer, Artist"
          duration="3 months"
          team="Game Creation Society"
        />

        <div className='contentContainer'>
          <div className='sectionContainer'>
            <h2>My Contributions</h2>
            <div className='row'>
              <div className='column'>
                <ul>
                  <li>Designed tank types and abilities</li>
                  <li>Designed levels and iterated through playtesting</li>
                  <li>Created and implemented all tank models</li>
                  <li>Designed and implemented UI</li>
                </ul>
              </div>
              <div className='column gallery'>
                <img src={require('../../images/TIA/gameplay.jpg')}></img>
              </div>
            </div>
            <iframe allow="fullscreen;" width="800" height="450" style={{border:0}}
              src="https://www.youtube.com/embed/uhIsBM8HQNk?si=ktmJVtbGx887g_ia"></iframe>
            <iframe frameborder="0" src="https://itch.io/embed/2083476?dark=true" width="552" height="167"><a href="https://willozeas.itch.io/tanks-in-advance">Tanks In Advance by willozeas, adrianma</a></iframe>        
            </div>
        </div>
      </div>
    )
  }
}