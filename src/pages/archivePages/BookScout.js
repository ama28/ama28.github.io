import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class BookScout extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          title="Book Scout"
          description="Streamlining catalog use through innovative user interactions"
          imageURL={require('../../images/bookscoutassets/bookscoutdemo.png')}
          roles="Designer, Researcher"
          duration="1 month"
          team="Joshua Suber, Yo-lei Chen, Healy Dwyer"
          />
        <div className='contentContainer'>
          <div className='sectionContainer noTitle'>
            <h2>Overview</h2>

            <p>My team was tasked with designing a responsive app for locating a specific book on the Carnegie Library catalog. We first developed a strong understanding of our users through <b>directed storytelling, intercept interviews, observational research and customer journey mapping.</b></p>

            <p>Using this research, we created four example <b>scenarios</b> of improved user experiences with possible solutions and created <b>storyboards</b> for each them.</p>  

            <img src={require('../../images/bookscoutassets/storyboards.png')}></img>
            <img className='full' src={require('../../images/bookscoutassets/customerjourney.png')}></img>

            <div className='row'>
                <img src={require('../../images/bookscoutassets/wireframes.png')}></img>
                <div>
                    <p>We <b>created wireframes and a paper prototype</b>, which we used to conduct <b>think-aloud usability testing</b>.</p>

                    <p>After several iterations, we landed on a final design focused specifically on the process from searching for a book to requesting it. To streamline the user experience as much as possible, the app, <b>Book Scout, targets users who prioritize time of pickup over location</b> and uses the lens of the Carnegie Library of Pittsburgh.</p>
                </div>
            </div>

            <div className='row'>
                <video style={{borderRadius:'10px'}} controls><source src={require('../../images/bookscoutassets/bookscoutdemo.mp4')} type='video/mp4'></source></video>
                <img style={{borderRadius:'10px'}} src={require('../../images/bookscoutassets/bookscoutdemo2.gif')}></img>
                <img src={require('../../images/bookscoutassets/webprototype.png')}></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
