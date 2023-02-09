import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';
import Quotes from '../../images/amosassets/amosquotes.svg';
import Prototype from '../../images/amosassets/amosprototype.svg';
import Info from '../../images/amosassets/amosinfo.svg';

export default class Amos extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          imageURL={require('../../images/amosassets/amosprototype.png')}
          titleImage={require('../../images/amosassets/amosText.png')}
          description="Increasing awareness of algorithmic bias through support and accessibility"
          roles="User Researcher, Project Manager"
          duration="3 months"
          team="Nellie Tonev, Yiqi Wang, Joanne Aire O."
          />

        <div className='contentContainer'>
            <div className='sectionContainer'>
                <h2>Overview</h2>
                <p>Amos is a user research project and proposal aimed at solving the increasing problem of algorithmic bias in social media. Through an investigation of our platform, Instagram, along with members from our target audience, my team identified that <b>users lack a concrete understanding of algorithmic bias and the way their personal data is used.</b> To tackle these issues, we propose Amos, an extension for instagram that adds a bias downvote button to posts.</p>
            </div>

            <div className='sectionContainer'>
                <h2>Problem</h2>
                <p>My team worked to answer this question:</p>
                <div className='blueBox'>How might we use the combined efforts of the college student community to identify algorithmic bias in social media?</div>
                <p>We focused on understanding users’ relationship with algorithmic bias and discovering how we might help them learn about it and identify it within the context of Instagram. </p>
            </div>

            <div className='sectionContainer'>
                <h2>Methods</h2>
                <div className='row'>
                    <p>We began with <b>background research,</b> using a combination of <b>informational and experiential activites</b> with a variety of social media platforms to learn about stakeholders in the project and inform our own understanding of algorithmic bias. </p>
                    <img className='min' src={require('../../images/amosassets/socials.png')} alt='social media icons'></img>
                </div>
                <p>To begin working towards our solution, we utilized <b>generative think-aloud interviews,</b> where we talked to <b>four college students</b> with varying experiences with Instagram and varying familiarity with algorithmic bias.</p>
                <p>We also conducted <b>contextual inquiry interviews,</b> where we again interviewed four new college students from various colleges in the context of where and when they would use Instagram in their everyday life.</p>

                <div className='row'>
                    <img src={require('../../images/amosassets/amosaffinitydiagram.jpeg')} alt='affinity diagram of interview notes'></img>
                    <p>By going through each of interview notes as a team and creating an <b>affinity diagram,</b> we synthesized our findings, identified our priorities, and generated insights that would inform the direction our solution would take.</p>
                </div>

                <p>With a better understanding of our target users and the problem space, we moved to brainstorming possible solutions using <b>storyboards that each correlated to a specific user need.</b> Below are a few storyboards that I created along with a wireframe of a brower extension solution. </p>

                <div className='row'>
                    <img src={require('../../images/amosassets/flagstoryboard.jpg')} alt='storyboard of a flagging solution'></img>
                    <img src={require('../../images/amosassets/hackathonstoryboard.jpg')} alt='storyboard of a hackathon solution'></img>
                </div>

                <p>We created a variety of storyboards; some dealt with safe ideas that users would likely be comfortable using, while others were more unfamiliar and risky. To <b>reaffirm that our ideas targeted actual user needs,</b> we utilized a <b>speed dating</b> interview technique to get feedback from another four college students on each of the storyboards. All of our interviewees converged on the idea of “Flag Upvoting” that I storyboarded above, since they felt that it most directly targeted their <b>need to learn more about algorithmic bias in an accesible way.</b> </p>
            </div>

            <div className='sectionContainer'>
                <h2>Key Quotes and Insights</h2>
                <img src={Quotes} alt='visual of important quotes from interviewees and the insights derived from them'></img>
            </div>

            <div className='sectionContainer'>
                <h2>Solution</h2>
                <p>Using the insights we generated from all previous research stages, our team decided on what we believe is the most effective approach for tackling our problem statement: an Instagram bias-flagging extension called Amos.</p>
                <div className='row'>
                    <img className='min'style={{minWidth:'45%'}} src={Prototype} alt='screenshot of the Amos prototype'></img>
                    <div>
                        <p>In addition to liking, commenting, sharing, and saving, users also have the <b>option to downvote a post they believe is affected by algorithmic bias.</b> </p>

                        <p>Users <b>cannot see how many others have downvoted the post,</b> which prevents them for downvoting due to a herd mentality rather than an identification of algorithmic bias.</p>

                        <p>However, when a certain number of downvotes is reached, <b>users can see a “Bias Alert” banner</b> which brings further attention to a post and frames it as another example of algorithmic bias to learn from.</p>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <p>Upon setup, Amos also presents users with a <b>screen explaining what algorithm bias looks like and begins to discuss how they might identify it for themselves. </b> </p>

                        <p> This page can be returned to at any time and further encourages users to use the flag button for its intended purpose. </p>
                    </div>
                    <img className='min'style={{minWidth:'40%'}} src={Info} alt='screenshot of the info page of the prototype'></img>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
