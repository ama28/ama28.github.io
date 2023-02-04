import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class P3G extends Component {
  render() {
    return (
        <div className='projectPage'>
        <NavBar 
          switchPage={this.props.switchPage}
          currentPage={null}
          alwaysWhite={true}/>
        <ProjectOverview
          title="Player-Programmed Partner Games"
          description="Addressing gaps in human-robotics interaction learning through educational game design"
          imageURL={require('../../images/p3gassets/coboxsample.png')}
          links="website article"
          websitelink="https://www.cmu.edu/roboticsacademy/Research/p3g.html#:~:text=Player%2DProgrammed%20Partner%20Games%20(P3G)%20for%20Low%2DResource,robotics%20education%20up%20to%20date."
          articlelink="https://www.cmu.edu/roboticsacademy/news/cmra-news-2021/cobox_adrian.html"
          roles="Game Designer, Researcher"
          duration="8 months"
          mentors="Erik Harpstead, Jonaya Kemper"
          />
        <div className='contentContainer'>
          <div className='sectionContainer'>
            <h2>summary</h2>
            <p>Player-Programmed Partner Games (P3G) for Low-Resource Learners is an Innovations in Development project that seeks to increase access to informal STEM education in out-of-school time (OST) settings, while simultaneously bringing the human-robotics interaction paradigms of robotics education up to date. It addresses gaps in existing robotics STEM education programs through Design-Based Research (DBR) into a video game-based OST learning experience that teaches coding and computational thinking in a natural co-robotics context.</p>
          </div>
          <div className='sectionContainer'>
            <h2>my contributions</h2>
            <div className='row' style={{marginBottom: '0px'}}>
                <div>
                    <h5>Sunlight</h5>
                    <p>As a game designer on the project, one of my main tasks was to develop a <b>GDD (game design document) and proposal</b> for an educational game about co-robotics accessible to children from low-resource environments. </p>
                    <p> We started by studying our end users; we performed background research and examined the learning environments of children within our target age group.</p>
                </div>
                <img src={require('../../images/p3gassets/gameexample.png')}></img>
            </div>
            <p>With this information in mind, I began working towards a proposal, <b>brainstorming 30 physical and digital games,</b> such as the one shown above, before synthesizing these ideas into <b>10 more refined ideas.</b> Then, along with a fellow researcher, we narrowed these ideas into five and then <b>one final idea</b> over two iterations. We developed and presented a detailed game design document for the game, outlining elements such as transformational goals, narrative, core mechanics, risks, and more, and presented our work to the research team.</p>
            <div className='leftRow'>
                <h5>Cobox</h5>
            </div>
            <p>Coboxes are a set of game design resources and prompts that we sent to children within our target audience to simultaneously educate them about co-robotics and garner their input regarding game design and prior knowledge about co-robotics.</p>
            <p>Click <a target='_blank' href='https://www.cmu.edu/roboticsacademy/news/cmra-news-2021/cobox_adrian.html'>here</a> to see my debrief on designing coboxes on the CMU robotics website.</p>
          </div>
        </div>
      </div>
    )
  }
}
