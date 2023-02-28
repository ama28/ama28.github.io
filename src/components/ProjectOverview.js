import React, { Component } from 'react'
import '../ProjectPage.css';

export default class ProjectOverview extends Component {
  render() {
    return (
        // Variables:
        // title
        // titleImage
        // description
        // _link
        // roles
        // duration
        // team
        // mentors
        // tools
        // imageURL
        <div className={'headerContainer'} 
            style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'}}>
            <div className='leftHalf'>
              <div className='projectOverview'>
                  {this.props.title != null && <h1 className='noTopMargin'>{this.props.title.toUpperCase()}</h1>}
                  {this.props.titleImage != null && <img src={this.props.titleImage} alt='project logo'></img>}
                  <h3 className='noTopMargin bottomMargin'><b>{this.props.description}</b></h3>
                  <div className='linksContainer'>
                      {this.props.itchlink != null && <a target="_blank" href={this.props.itchlink} className='rectButton hvr-shutter-out-horizontal medium'>ITCH.IO</a>}
                      {this.props.githublink != null && <a target="_blank" rel="noreferrer" href={this.props.githublink} className='rectButton hvr-shutter-out-horizontal medium'>GITHUB</a>}
                      {this.props.gcslink != null && <a target="_blank" rel="noreferrer" href={this.props.gcslink} className='rectButton hvr-shutter-out-horizontal medium'>GCS</a>}
                      {this.props.websitelink != null && <a target="_blank" rel="noreferrer" href={this.props.websitelink} className='rectButton hvr-shutter-out-horizontal medium'>WEBSITE</a>}
                      {this.props.articlelink != null && <a target="_blank" rel="noreferrer" href={this.props.articlelink} className='rectButton hvr-shutter-out-horizontal medium'>ARTICLE</a>}
                  </div>
                  <h3 className='noTopMargin'><b className='rightGap'>My Roles</b>{this.props.roles}</h3>
                  <h3 style={{marginTop:'15px'}}><b className='rightGap'>Duration</b>{this.props.duration}</h3>
                  {this.props.team != null && <h3 style={{marginTop:'15px'}}><b className='rightGap'>Team</b>{this.props.team}</h3>}
                  {this.props.mentors != null && <h3 style={{marginTop:'15px'}}><b className='rightGap'>Mentors</b>{this.props.mentors}</h3>}
                  {this.props.tools != null && <h3 style={{marginTop:'15px'}}><b className='rightGap'>Tools</b>{this.props.tools}</h3>}
              </div>
            </div>
            <div className='rightHalf'>
              <img src={this.props.imageURL} alt='project example'></img>
            </div>
        </div>
    )
  }
}
