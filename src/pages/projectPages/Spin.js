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
          imageURL={require('../../images/spinimages/spinexample.png')}
          titleImage={require('../../images/spinimages/spindashboardlogo.png')}
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
            <h2>problem</h2>
            <p>To better understand our end users and manage the scope of our project, we performed background research and centered our design around the needs of two defined <b>personas.</b> Here is a quick overview of them: </p>

            <div className='row'>
              <img src={require('../../images/spinimages/kalen.png')}></img>
              <div>
                <h5 style={{marginTop:'0px'}}>Kalen - Gig Worker</h5>
                <p><b>Kalen is a gig worker who travels around the city redistributing scooters to balance supply.</b> He also brings in scooters to charge them and to do minor repairs between redistributions. He currently is working this job while he looks for another full-time position. He is looking to maximize his ability to move scooters while also having enough downtime to <b>search for positions</b> while he is taking a break. Also, repairing scooters gets him a bonus in his pay. He tries to <b>make the most of each gas tank.</b></p>
              </div>
            </div>
            <h6>Kalen's Pain Points</h6>
            <img src={require('../../images/spinimages/kalenpainpoints.png')}></img>
            <div className='row'>
              <p>“I usually take the popular Downtown-East Liberty route. This is normally the most efficient one, but that is not always the case…”</p>
              <p>“Often times when I drive, I found myself checking the Spin app and updating Google Maps accordingly…”</p>
              <p>“I tend to eyeball the best time to take a break so I am constantly worried about missing the action…”</p>
            </div>

            <div className='row'>
              <img src={require('../../images/spinimages/mia.png')}></img>
              <div>
                <h5 style={{marginTop:'0px'}}>Mia - Data Analyst</h5>
                <p><b>Mia is data analyst at Spin Scooters.</b> She is tasked with understanding how well the scooter rollout in Pittsburgh is going. Her work will help the company determine <b>where, when and how to increase or decrease scooter service in the city.</b> She was recently promoted based on her data science acumen as well as her ability to tell stories with data. In her new role, she is <b>focusing more on connecting with the business aspects rather than just data analysis.</b></p>
              </div>
            </div>
            <h6>Mia's Pain Points</h6>
            <img src={require('../../images/spinimages/miapainpoints.png')}></img>
            <div className='row'>
              <p>“Typically, I pull up multiple spreadsheets on the computer and printed documents to figure out Today’s status…”</p>
              <p>“I generally spend more than one work day collecting, cleaning, visualizing and formatting data…” </p>
              <p>“There is no clear way for me to understand which neighborhoods have a poor distribution…”</p>
            </div>
          </div>

          <div className='sectionContainer'>
            <h2>process</h2>
            <img src={require('../../images/spinimages/spinprocess.png')}></img>
            <p>We began our design process by creating <b>current and future state models</b> for our two personas to plan out the needs our product would address and the changes it would create. </p>
            <p> We then each brainstormed different options for data visualizations and <b>wireframed</b> ways to present them with a dashboard. </p>
            <p> After receiving critique on our wireframes, we combined our ideas and proceeded to <b>design the full dashboard over multiple iterations.</b></p>
          </div>

          <div className='sectionContainer'>
            <h2>solution</h2>
            <img src={require('../../images/spinimages/spinsolution.png')}></img>
            <p><b>Our final dashboard focuses on the intersection between Kalen and Mia’s needs, while also accounting for their specific tasks.</b> </p>
            <h5>Kalen's Improved Journey</h5>
            <div className='row' style={{maxWidth: '90%'}}>
              <video width='200' controls><source src={require('../../images/spinimages/dashboard_route.mp4')} type='video/mp4'></source></video>
              <div>
                <h6>Route Planner</h6>
                <p>By swiping right on a tab to the left of the map, Kalen can easily open up a route planner from his tablet. This interaction also keeps the planner unintrusive to Mia, who accesses the dashboard from her desktop.</p>
                <p> With the route planner, Kalen is presented the most efficient route for him to complete all his tasks, while still having the flexibility to edit this suggestion and add/remove stops if he pleases. </p>
              </div>
            </div>
            <div className='row'>
              <video width='400' controls><source src={require('../../images/spinimages/KalenAddStop.mp4')} type='video/mp4'></source></video>
              <div>
                <h6>Detailed View</h6>
                <p>As Kalen goes along his route, he can see real-time scooter distribution information that was previously unavailable to him, look into specific areas on the map, and add them to his route. </p>
              </div>
            </div>
            <div className='row'>
              <img src={require('../../images/spinimages/kalengraph.png')}></img>
              <div>
                <h6>Checking for Breaks</h6>
                <p>In the past, Kalen had a hard time to find the best time to take breaks while maintaining an efficient schedule. Now Kalen can easily identify the best time of the day to take break by glancing at a highlighted area of the time with lowest demand. </p>
              </div>
            </div>
            <h6 style={{marginBottom: '0px'}}>Summary of Improved Journey</h6>
            <img src={require('../../images/spinimages/kalenimproved.png')}></img>
            <div className='row'>
              <p>The dashboard generates efficient and customizable routes for Kalen </p>
              <p>He can track his route, visualize scooter distribution, and add stops on the go</p>
              <p>The distribution chart highlights the best break times for him to interpret at a glance</p>
            </div>

            <h5>Mia's Improved Journey</h5>
            <div className='row'>
              <img src={require('../../images/spinimages/miastatus.png')}></img>
              <div>
                <h6>Status Overview</h6>
                <p>Mia now can track business performance and see the short-term effects of her decisions from the previous day. </p>
                <p> She can also quickly ascertain the state of scooter distribution in real-time with the status section. </p>
              </div>
            </div>
            <div className='row'>
              <video width='400' controls><source src={require('../../images/spinimages/Mia_Callout.mp4')} type='video/mp4'></source></video>
              <div>
                <h6>Distribution Graph</h6>
                <p>Rather than having to parse through data and create visualizations, Mia can identify the most important trends in scooter distributions using simple toggles and export visualizations of these trends to her presentations. </p>
              </div>
            </div>
            <div className='row'>
              <video width='400' controls><source src={require('../../images/spinimages/Mia_Callout.mp4')} type='video/mp4'></source></video>
              <div>
                <h6>Heatmap</h6>
                <p>By looking at a heatmap of scooter demand, Mia can get a topological overview of scooter distribution in real-time or over periods of time, and redirect ads towards areas with the highest demand.</p>
              </div>
            </div>
            <h6 style={{marginBottom: '0px'}}>Summary of Improved Journey</h6>
            <img src={require('../../images/spinimages/miaimproved.png')}></img>
            <div className='row'>
              <p>The dashboard presents high-level summary statistics for Mia</p>
              <p>She can analyze trends and download presentation graphics immediately</p>
              <p>The map renders trends by time and location for her</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
