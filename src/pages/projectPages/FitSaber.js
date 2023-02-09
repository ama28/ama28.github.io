import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class FitSaber extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          title="FitSaber"
          description="Understanding the effects of immersive experiences and exercise on cognition"
          imageURL={require('../../images/fitsaberassets/demo.gif')}
          roles="Game Designer, Research Assistant"
          duration="2 years"
          mentors="Dr. Cassondra Eng, Dr. Anna Fisher"
          />
        <div className='contentContainer'>
          <div className='sectionContainer'>
            <h2>Summary</h2>
            <p>With the rapid growth of the field of immersive technology and the surge in people’s online presences with the onset of the pandemic, it is becoming increasingly important for us to understand how people think and function within virtual spaces. </p>
            <p> This research study aims to address this issue through the creation of FitSaber, a game inspired by the popular VR game Beat Saber but altered to fit the needs of this experiment, and has funding from Facebook Reality Labs and multiple CMU research grants, including the SURF grant I received personally for the development of the game’s tutorial in the summer of 2021. </p>
            <p> Data collection for the study is currently in progress. </p>
          </div>

          <div className='sectionContainer'>
            <h2>Research Process</h2>
            <p>Our study focuses on <b>two main research questions:</b> </p>
            <img style={{maxWidth: '85%'}} src={require('../../images/fitsaberassets/fitsabergoals.png')}></img>
            <div className='center'>
                <h5>FitSaber</h5>
            </div>
            <p> Using Unity, our team developed FitSaber from scratch, a VR rhythm game where players have to slice incoming blocks in a corresponding direction with a corresponding saber in accordance with the rhythm of a song. </p>
            <p> In pursuit of our research questions, we implemented a <b>Stroop effect</b> into the game which, when turned on, requires participants to slice blocks in the opposite direction of what the arrow on the block indicates. As the Stroop effect has been extensively tested and confirmed in non-immersive contexts, our experiments strives to understand to what extent the effect carries over in virtual reality. </p>
            <img style={{maxWidth: '80%'}} src={require('../../images/fitsaberassets/stroop.png')}></img>
            <p> We also implemented an <b>exercise condition,</b> which toggles between sedentary and aerobic versions of songs, utilizing elements such as red zones that the player must dodge as well as the placement of incoming blocks to do so. </p>
            <p> With these two treatment variables in place, stroop and exercise, FitSaber incorporates <b>four experimental conditions</b> shown below. </p>
            <img style={{maxWidth: '80%'}} src={require('../../images/fitsaberassets/fitsaberconditions.png')}></img>
            <h4 className='leftRow' style={{marginBottom:'0px'}}>My Contributions:</h4>
            <ul>
                <li>Implementation of experimental conditions</li>
                <li>Integration with Beat Saber beatmaps</li>
                <li>Experimenter GUI for researchers to easily choose specific songs or conditions</li>
                <li>Tutorial for participants to learn and practice the game before testing</li>
                <li>Audio and visual feedback when playing</li>
                <li>Automatic scoring and data collection system with variables such as accuracy, score, and comparisons across conditions</li>
                <li>Implementation of other cognitive tasks and surveys in Unity</li>
                <li>Experimental Design (see below)</li>
            </ul>
            <h5>Experimental Design</h5>
            <div className='row' style={{marginBottom:'20px'}}>
                <p>In order to collect background data and ensure that our sample has high internal and external validity, we also created pre-test and post-test <b>cognitive batteries</b> in Unity, which include demographic and behavioral surveys as well as attention tasks and conventional stroop tasks. Data from the batteries is automatically saved and exported to an Excel spreadsheet.</p>
                <img src={require('../../images/fitsaberassets/paces.gif')}></img>
            </div>
            <p> The experiment uses a <b>within-subjects design,</b> where each participant experiences all four treatment conditions, and <b>accounts for carry-over effects through counter-balancing</b> (participants go through the conditions in a random order after getting used to the game through the tutorial).</p>
            <p> Participants will go through the study over five days and have their cognitive data collected through brain imaging techniques along the way. Data collection will begin in the spring of 2022. Below is our progress presentation from the CMU Meeting of the Minds research symposium in the spring of 2021. </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hTGAXOeDxpU" title="CMU MoTM: Promoting Cognitive & Physical Activity in VR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}
