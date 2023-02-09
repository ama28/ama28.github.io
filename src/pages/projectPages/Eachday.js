import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class Eachday extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          imageURL={require('../../images/eachdayassets/eachdaysample.png')}
          titleImage={require('../../images/eachdayassets/eachday.png')}
          description="Gamifying ADHD education and self-management for clinical patients"
          websitelink='https://www.eachday.health/'
          roles="Game Designer, UX Designer"
          duration="6 months"
          mentors="Erik Harpstead, Christian Murphy"
          />

        <div className='contentContainer'>
            <div className='sectionContainer'>
                <h2>Overview</h2>
                <p>Eachday is a digital medicine startup looking to aid people with self-managing their ADHD. The Eachday app, which is already being pilot tested with clinical patients, <b>guides users through an ADHD treatment plan as well as engaging users and teaching them about ADHD through an integrated educational game within the app.</b> </p>
                <p>I serve as the Gameplay Lead for Eachday, and have worked to design and build the educational game side of the app from scratch. Throughout this process, I have performed research using methods such as competitive analysis and usability tests, iterated on the game’s interface from low to high fidelity, as well as brainstormed and iterated on the game’s core systems and mechanics. </p>
            </div>
            <div className='sectionContainer'>
                <h2>Preliminary Research</h2>
                <p>Before I started my design process, I needed to understand why I was designing this game and who I was designing for. Some preliminary research brought me to this question: </p>
                <div className='blueBox'>How might we teach ADHD patients how to self-manage their ADHD while encouraging them to do it on a daily basis?</div>
                <p style={{marginBottom: '0px'}}><b>My target audience, the end users of the product, is ADHD patients over the age of 18.</b> It’s important to note that these patients may or may not have played games before, so I couldn’t make any assumptions about users’ gaming experience when designing the game. </p>

                <div className='row'>
                    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width='600' height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FccsH0Ng27Mq95y7EFpetVE%2FUser-Flow-Diagram%3Fnode-id%3D0%253A1%26t%3D3uIBEfJdSQF9ksHr-1" ></iframe>

                    <div style={{maxWidth:'30%'}}>
                        <p>I also needed to understand how the gameplay would fit into the existing self-management app, in order to ensure that my game systems would tie in seamlessly and not disrupt the purely medical portion of the app.</p><p> For this purpose, I <b>created a high-level user flow</b> to determine when and how users would navigate between the two sections of the app. </p>
                    </div>
                </div>
               
            </div>
            <div className='sectionContainer'>
                <div className='row'>
                    <div>
                        <h2>Game Design Document</h2>
                        <p>Next came the primary ideation phase. <b>I created a game design document (GDD) and defined all the core systems of the game,</b> which have gone through several iterations through user research and discussion with members of the medical side of the team. </p>

                        <p>Here is an early version of the document. As it is an evolving project, this document is being frequently updated and the newest version cannot be shown.</p>
                    </div>
                    <iframe style={{minWidth:'55%'}} src={require('../../images/eachdayassets/document.pdf')} height="500px"></iframe>
                </div>
            </div>
            <div className='sectionContainer'>
                <div className='row'>
                    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="400" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkxoAebvsqFZiCRSc3vcvD4%2FGame-Flow-Wireframes%3Fpage-id%3D0%253A1%26node-id%3D47%253A15%26viewport%3D-479%252C540%252C0.45%26scaling%3Dscale-down%26starting-point-node-id%3D47%253A15" allowfullscreen></iframe>
                    <div>
                     <h2>App Integration</h2>
                        <p>Using the overarching systems from the GDD, I <b>designed and iterated on wireframes of the app’s gameplay portion’s core user flow.</b> </p>
                        <p>Now, with a good idea of how the gameplay would fit into the existing app, my next objective was the most crucial part of the game's goal of user engagement and retention — the battle system.</p>
                        <p>After some research and low-fidelity prototyping of different game ideas, for reasons you can find in the GDD, <b>we decided on a turn-based battle system.</b></p>
                    </div>
                </div>
            </div>
            <div className='sectionContainer'>
                <h2>The Battle System</h2>
                <div className='leftRow'>
                    <h5>Research and Ideation</h5>
                </div>
                <p style={{marginBottom:'0px'}}>To ideate how a turn-based system might tie into the medical objectives of the app and how to make it engaging for my target audience, I <b>researched existing turn-based systems and brainstormed possible mechanics.</b> </p>
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFn7l5dQQmRpPVTSA8ej7qa%2FBattle-System-Brainstorm%3Fnode-id%3D0%253A1%26t%3DPSBGRFA8p9Li92fz-1" allowfullscreen></iframe>
                
                <div className='row'>
                    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="400" height="300" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FggmRPDeDC1Bvg9h27HCdnR%2FEnemies-Brainstorm%3Fnode-id%3D0%253A1%26t%3DwD42hxHKprb9NgyL-1" allowfullscreen></iframe>
                    <div>
                        <h5>Enemy Brainstorm</h5>
                        <p>One idea was to use skills dealing damage to enemies as a metaphor for treatment methods combating ADHD symptoms. To test this concept, we brainstormed how enemies could be linked to executive functions and common symptoms.</p>
                    </div>
                </div>
            </div>
            <div className='sectionContainer'>
                <h2>Paper Prototyping</h2>
                <p style={{marginBottom:'0px'}}>With some ideas in place, I created a paper prototype of the battle system and ran think-aloud usability tests with four ADHD patients from a local school. </p>
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FN2Xz5W67a3qwjcDpzXJzJd%2FWesley-Research-Synthesis%3Fnode-id%3D0%253A1%26t%3DZ1RuIXbiuHYI3seJ-1" allowfullscreen></iframe>
            </div>
            <div className='sectionContainer'>
                <h2>Battle System Design Document</h2>
                <p style={{marginBottom:'0px'}}>Using the findings, from the usability tests, I further iterated on the battle system’s defining mechanics and began synthesizing these ideas in Figma. I also created preliminary wireframes of the in-battle interface. </p>
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FltqMiltbY1s9KBamYtc3BC%2FBattle-System-Design-Document%3Fnode-id%3D0%253A1%26t%3DhpibN2LeVQgOVm31-1" allowfullscreen></iframe>
                <p>Currently, I am creating a low-fidelity prototype of the updated battle system in Unity. When this is finished, we will go through another round of user research and game design iteration before beginning development of the game.  </p>
=            </div>
        </div>
      </div>
    )
  }
}
