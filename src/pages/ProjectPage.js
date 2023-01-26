import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import '../ProjectPage.css';

export default class ProjectPage extends Component {
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
        <div className={'headerContainer'} 
            style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'}}>
          <div className='leftHalf'>
            <div className='projectOverview'>
              <h1 className='noTopMargin'>DIMENSIONAL RIFT</h1>
              <h3 className='noTopMargin'>Understanding the effects of immersive experiences and exercise on cognition</h3>
              <div className='linksContainer'>
                <a href="" className='rectButton hvr-shutter-out-horizontal medium'>ITCH.IO</a>
                <a href="" className='rectButton hvr-shutter-out-horizontal medium'>GITHUB</a>
                <a href="" className='rectButton hvr-shutter-out-horizontal medium'>GCS</a>
              </div>
              <h3 className='noTopMargin'><b className='rightGap'>My Roles</b> Team Lead, Programmer, Artist</h3>
              <h3 style={{marginTop:'15px'}}><b className='rightGap'>Project Length</b> Sep 2022 - Dec 2022</h3>
              <h3 style={{marginTop:'15px'}}><b className='rightGap'>Tools</b> Created with Unity</h3>
            </div>
          </div>
          <div className='rightHalf'>
            <img src={require('../images/DR_Header.jpg')}></img>
          </div>
        </div>
        <div className='contentContainer'>
          <div className='sectionContainer'>
            <h2>summary</h2>
            <p><b>Mia is data analyst at Spin Scooters.</b> She is tasked with understanding how well the scooter rollout in Pittsburgh is going. Her work will 
               help the company determine <b>where, when and how to increase or decrease scooter service in the city.</b> She was recently promoted based on her 
               data science acumen as well as her ability to tell stories with data. In her new role, she is <b>focusing more on connecting with the business 
               aspects rather than just data analysis.</b></p>          
          </div>
          <div className='sectionContainer'>
            <h2>summary</h2>
            <img className='full' src={require("../images/spinimages/spinsolution.svg")}></img>
          </div>
        </div>
      </div>
    )
  }
}
