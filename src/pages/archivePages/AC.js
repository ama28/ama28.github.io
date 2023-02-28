import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class AC extends Component {
  render() {
    return (
      <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          title="AC Control Redesign"
          description="Improving accessibility through improved affordances, feedforward, and feedback"
          imageURL={require('../../images/acassets/acexample.png')}
          roles="Interaction Designer"
          duration="1 month"
          tools="Foam Core, Paper"
          />
        <div className='contentContainer'>
          <div className='sectionContainer noTitle'>
            <h2>Overview</h2>

            <div className='row'>
                <div>
                    <p>For this project, I redesigned an AC unit’s interface to <b>make it more accessible for the visually impaired</b>, with the intention that doing this would make it more accessible for all.</p>

                    <p>After identifying flaws in the original design (shown on the right), such as misleading affordances or lack of feedforward, <b>I went through a design process that consisted of brainstorming sessions followed by multiple iterations through critique.</b> Below are some sketches of the process.</p>
                </div>
                <img className='min' src={require('../../images/acassets/acoriginal.png')}></img>
            </div>

            <div className='row'>
                <img src={require('../../images/acassets/ac1.png')}></img>
                <img src={require('../../images/acassets/ac2.png')}></img>
            </div>

            <div className='row'>
                <div>
                    <p>I <b>utilized foam core to prototype and test</b> many of my ideas until reaching a final design.</p>
                    <p>By integrating the fan and temperature controls into one location but separating their interactions into a button press vs. a dial, the final prototype is accessible even in low-vision scenarios, such as in the dark.
                    </p>
                    <p>Highlighted fan and temperature setting displays as well as auditory and haptic feedback supplement this accessibility. You can see a demo of the prototype below.
                    </p>
                    <p style={{fontSize:'12px'}}>Note: the low contrast between the temperature arrow and gauge is an oversight that I was unable to fix with the interest of time
                    </p>
                </div>
                <img className='min' src={require('../../images/acassets/acprototype.png')}></img>
            </div>
            <div className='row'>
                <img src={require('../../images/acassets/ac3.png')}></img>
                <video style={{borderRadius:'10px'}} controls><source src={require('../../images/acassets/acdemo.mp4')} type='video/mp4'></source></video>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
