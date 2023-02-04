import React, { Component } from 'react'
import '../ProjectPage.css';

export default class ProjectOverview extends Component {
  render() {
    return (
        <div className={'headerContainer'} 
            style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'}}>
            <div className='leftHalf'>
              <div className='projectOverview'>
                  {this.props.title != null && <h1 className='noTopMargin'>{this.props.title.toUpperCase()}</h1>}
                  {this.props.titleImage != null && <img src={this.props.titleImage}></img>}
                  <h3 className='noTopMargin bottomMargin'><b>{this.props.description}</b></h3>
                  {this.props.links != null && <div className='linksContainer'>
                      {this.props.links.includes("itch") && <a target="_blank" href={this.props.itchlink} className='rectButton hvr-shutter-out-horizontal medium'>ITCH.IO</a>}
                      {this.props.links.includes("github") && <a target="_blank" href={this.props.githublink} className='rectButton hvr-shutter-out-horizontal medium'>GITHUB</a>}
                      {this.props.links.includes("gcs") && <a target="_blank" href={this.props.gcslink} className='rectButton hvr-shutter-out-horizontal medium'>GCS</a>}
                      {this.props.links.includes("website") && <a target="_blank" href={this.props.websitelink} className='rectButton hvr-shutter-out-horizontal medium'>WEBSITE</a>}
                      {this.props.links.includes("article") && <a target="_blank" href={this.props.articlelink} className='rectButton hvr-shutter-out-horizontal medium'>ARTICLE</a>}
                  </div>}
                  <h3 className='noTopMargin'><b className='rightGap'>My Roles</b>{this.props.roles}</h3>
                  <h3 style={{marginTop:'15px'}}><b className='rightGap'>Duration</b>{this.props.duration}</h3>
                  {this.props.team != null && <h3 style={{marginTop:'15px'}}><b className='rightGap'>Team</b>{this.props.team}</h3>}
                  {this.props.mentors != null && <h3 style={{marginTop:'15px'}}><b className='rightGap'>Mentors</b>{this.props.mentors}</h3>}
              </div>
            </div>
            <div className='rightHalf'>
              <img src={this.props.imageURL}></img>
            </div>
        </div>
    )
  }
}
