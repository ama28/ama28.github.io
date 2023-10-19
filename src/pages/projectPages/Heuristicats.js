import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class Heuristicats extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true} />
        <ProjectOverview
          title={"Heuristicats"}
          imageURL={require('../../images/heuristicats/title_screen.png')}
          description="A turn-based RPG adventure that teaches players to apply UX heuristics to navigate poor game UX"
          itchlink='https://adrianma.itch.io/heuristicats'
          githublink='https://github.com/ama28/CatEmblem'
          roles="Lead Game Designer, Programmer"
          duration="3 months"
          team="Nellie Tonev, Teresa Yang, Jeremia Lo"
        />

        <div className='contentContainer'>
          <div className='sectionContainer'>
            <h2>My Contributions</h2>
            <div className='row'>
              <div className='column'>
                <ul>
                  <li>Creating and managing a high-level <a target="_blank" href="https://docs.google.com/document/d/1Yh8WV7HhNXeGeMmQuVZlCjdopkaqipHMdx5_dFbFymk/edit?usp=sharing">game design document</a></li>
                  <li>Designing and implementing turn-based battle system with a core educational mechanic surrounding the manipulation of the player's interface</li>
                  <li>Designing and implementing the movesets of 7 characters</li>
                  <li>Designing learning objectives, mechanisms, progression and educational content</li>
                  <li>Running playtest sessions and balancing game difficulty for our target audience</li>
                </ul>
              </div>
              <div className='column'>
                <iframe style={{minWidth:'55%'}} src={require('../../images/heuristicats/gdd.pdf')} width="450px" height="500px"></iframe>
              </div>
            </div>
            <iframe allow="fullscreen;" width="800" height="450" style={{border:0}}
              src="https://www.youtube.com/embed/r1VZ5PE3MP4?si=zkg6T6pwPjfuTF3g"></iframe>
            <iframe frameborder="0" src="https://itch.io/embed/2173919?dark=true" width="552" height="167"><a href="https://adrianma.itch.io/heuristicats">Heuristicats by adrianma</a></iframe>          </div>
        </div>
      </div>
    )
  }
}
