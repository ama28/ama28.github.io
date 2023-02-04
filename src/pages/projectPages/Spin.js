import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class Spin extends Component {
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
          title="Spin Dashboard"
          description="Streamlining data analysis and utilization for Spin employees"
          roles="UX Designer, User Researcher"
          duration="1 month"
          team="Gabriel Alvarez, Olivia Wu, Sophia Timko"
          />

        {/* USEFUL CLASSES */}
        {/* 
          sectionContainer : creates a rectangular box for a section of content
          full : makes an images take up the full width of a container
          halfSplit : horizontally distributes its child elements (images have a max-width of 50%)
         */}
        <div className='contentContainer'>
          <div className='sectionContainer'>
            <h2>overview</h2>
            <p>For this project, my team was tasked with designing a data dashboard for spin employees to <b>account for the lack of a fast entry point for data analysis</b> at the company. In our final design, we determined what information would be most important to our end users and presented it through quickly comprehensible visualizations and seamless interactions. </p>          
          </div>
          <div className='sectionContainer'>
            <h2>solution</h2>
            <img className='full' src={require("../../images/spinimages/spinsolution.png")}></img>
            <div className='halfSplit'>
              <p> whats up whats up what up lets go team was tasked with designing a data dashboard for spin employees to</p>
              <img src={require("../../images/spinimages/spinsolution.png")}></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
