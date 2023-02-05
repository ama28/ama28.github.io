import React, { Component } from 'react'
import NavBar from '../../components/NavBar';
import '../../ProjectPage.css';
import ProjectOverview from '../../components/ProjectOverview';

export default class C1 extends Component {
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
          titleImage={require('../../images/c1assets/capital-one-logo-white.png')}
          description="Delivering horizontal value across all of C1 as well as elevating design as a practice"
          roles="UX Designer, User Researcher"
          duration="3 months"
          team="Experience Strategy and Operations"
          imageURL={require('../../images/c1assets/c1header.png')}
          />
        
        {/* USEFUL CLASSES */}
        {/* 
          sectionContainer : creates a rectangular box for a section of content
          sectionContainer noTitle : adjusts margin if sectionContainer doesn't have a header

          leftRow : horizontally distributes its child elements with left adjustment
          row : horizontally distributes its child elements (images have a max-width of 50%)
          row gallery : adds 30px spacing between elements 
          row > img sameHeight : apply to child elements of a row to make them all the same height
          row > img min : for images that should be constrained by minWidth

          column : vertically distributes elements
          column gallery : formatting for vertical image gallery

          half : makes element 47% width of parent container
          full : makes element the full width of parent container
          center : centers child elements
         */}
        <div className='contentContainer'>
          <div className='sectionContainer'>
            <h2 className='first'>Project 1: Pulse IA</h2>
            <div className='row' style={{marginBottom:'0px'}}>
              <div className='column'>
                <h4 className='noTopMargin'>The Ask</h4>
                <p>Redesign Capital One's internal site for all of designers, Pulse, so that it becomes more useful for <b>partners and associates</b> as well as much easier to maintain for <b>those implementing it.</b></p>
              </div>
              <img style={{width:'120%'}} src={require('../../images/c1assets/pulselaptop.png')}></img>
            </div>
            
            <div className='column'>
              <h4>Understanding the Problem</h4>
              <p>For this project, I began with utilizing <b>assumptions and best practices rather usability tests.</b> Although this was not a workflow I was used to using when trying to improve existing products, I learned that with an internal tool comes more freedom in the design process as well less consequences for publishing flawed designs.
              In this case, since it was easy to identify certain pain points in the interface using best practices, it was a more efficient use of resources to push the research phase until later.</p>
            </div>
          </div>

          <div className='sectionContainer'>
            <h2 className='first'>Who are we designing for?</h2>
            <p>Although I wasn't diving right into research, I still needed to understand who exactly I was designing for.</p>
            <p>After talking to some C1 associates, it was clear to me that established designers only had a few specialized uses for pulse while newer designers used the site more hollistically. As my focus was on reworking the high-level structure of the site, this knowledge <b>shifted my focus towards newer designers and well as partners that need an entry point for understanding what XD can do for them.</b> </p>
            <div className='row bottomMargin'>
              <p><b>I zoned in on four groups as my target audience</b> shown on the right. Although established designers were not the main focus, I had to ensure my changes did not obscure their specialized uses. And as people would have to implement my designs, I also had to consider the ease of implementation for developers. </p>
              <img className="half" src={require('../../images/c1assets/pulse-audience.png')}></img>
            </div>
          </div>

          <div className='sectionContainer'>

            <h2 className='first'>Pain Point 1: Complex Navigation</h2>
            <p>The first pain point I targeted was the need for complex navigation to simple answers. When speaking to some associates on slack, their most common reason for low pulse usage was the <b>difficulty of finding information the needed using the current navigation system.</b> </p>
            <p>An example of this problem is the location of the home button on the current top nav, buried under the "How We Work dropdown". Although this top nav structure was due to tech constraints rather than design choices, usability tests later on in the design process showed me that the <b>location of the home button is vital to efficient navigation and should be prioritized.</b> Other than the home button, the complexity was also apparent in the lack of important references at high levels of the IA such as a calendar of events. </p>
            <div className='row' style={{marginTop: '20px'}}>
              <img className='sameHeight' src={require('../../images/c1assets/currentnav.png')}></img>
              <img className='sameHeight' src={require('../../images/c1assets/slack.png')}></img>
            </div>

            <h2>The Solution: Landing Pages</h2>
            <img className='full' src={require('../../images/c1assets/nav-analysis.png')}></img>
            <p>On the user flow diagram that I created above, you can see that the current nav (dropdown nav) has a fully horizontal structure. Although this allows for immediate access from any page on Pulse to any other page, <b>the flow from the home page straight to specialized subtopic pages makes finding information like finding a needle in a haystack.</b> </p>
            <p>To solve this gap in flow between home pages and subtopic pages, I created <b>landing pages for each of the categories of subtopic pages</b> which give high-level information that people expect to find without much searching, as well as a quick overview of the content of the subtopic pages. The new user flow diagram on the right shows that navigation is much more intuitive, with a more balanced amount of information spread across three levels. </p>
            <img className='full' src={require('../../images/c1assets/landingpages.png')}></img>
            <p>Since some subtopic pages were fairly sparse in content, I was able to completely remove some of them and integrate their information into the quick overviews on the landing pages, which further simplified the IA of the site. Keeping in mind my target audiences, I also redesigned the home page (far left) to place a greater focus on partners and newer designers at high levels of the IA. </p>

            <h2>Prototyping and Research</h2>
            <p> Of course, the landing page designs above were not my first pass. To get to them took many iterations through feedback and user testing. After linking my wireframes together into prototypes, I conducted <b>6 think-aloud usability tests with people from my target audiences</b> and synthesized my findings into a FigJam board. </p>
            <img className='full' src={require('../../images/c1assets/researchfindings.png')}></img>
            <p>Insights from these interviews fueled the many changes I made throughout my iterations. Some of the main problems with earlier iterations that I discovered were weak link affordances, poor labeling, as well as a divergence from home page conventions. </p>
          </div>
          <div className='sectionContainer'>
            <h2>Pain Point 2: Top Navigation</h2>
            <p>The second pain point I tackled with my design comes from developers: the <b>difficulty of implementing the top navigation.</b> At C1, Pulse pages are implemented through a service called LumApps, which comes with a variety of contraints in terms of what features can be built and how they are built.</p>
            <div className='row'>
              <img src={require('../../images/c1assets/currentnav.png')}></img>
              <img src={require('../../images/c1assets/painpoint1ref.png')}></img>
            </div>
            <p>On the left is the current top navigation for pulse. It's extremely overwhelming, especially for newer users. LumApps has a 4 column constraint, which is the reason why the home page link is located under the "How We Work" dropdown rather than in its own column. But the biggest problem is that due to the difficulty of creating reusable components in LumApps, <b>this complicated top nav must be rebuilt by hand on each and every XD pulse page</b>, leading to many inconsistencies from user error. </p>
            <p>On the right are examples of some of the errors that arose from developers having to implement this top nav by hand. The DIB link on the top nav for the Design Process page takes you to the DIB page for the HR department rather than design, while the top nav on the actual design DIB page is completely uninteractable. </p>
            <h2>The Solution: Integrated Navigation</h2>
            <div className='row'>
              <img src={require('../../images/c1assets/integratednav.png')}></img>
              <div>
                <p>To simplify the top nav for implementation, I <b>removed all of the dropdowns and left the top nav with only four buttons</b> which would link to the landing pages that I designed before. </p>
                <p>By combining the "Teams" and "News & Communities" categories, <b>I was able to place the home button as high in the IA as possible,</b> at the very left of the top nav. </p>
              </div>
            </div>
            <p>In place of the dropdown fields I placed a <b>table of contents-like integrated nav on each of the landing pages</b> which link to parts of the landing pages that have summaries of the subtopics as well as links to them. However, like the landing pages, this integrated nav structure resulted from several iterations and rounds of research.</p>

            <h2>Is it really better?</h2>
            <p>Throughout my iterations, I utilized a 3 methods of evaluating whether my new designs were truly an improvement over the current pulse site. </p>
            <p>The <b>user flow diagrams</b> that I created before were even more valuable for evaluating whether the integrated nav was an improvement over the old top nav. </p>
            <p> With some findings from several structured interviews I conducted, I also <b>ranked the most common to least common use cases</b> for the Pulse site, and compared how they would differ across the two navs. Finally, I analyzed the <b>pros and cons of each nav flow first for developers, then for users,</b> keeping in mind that although ease of implementation was important, the primary audience for my design was designers. </p>
            <img className='full' src={require('../../images/c1assets/nav-analysis.png')}></img>
            <p> With lots of feedback, stakeholders as well as other designers, the team decided to move forward with my proposed integrated navigation. </p>
          </div>

          <div className='sectionContainer'>
            <h2>Challenges</h2>
            <div className='row'>
              <div>
                <h4>Technical Constraints</h4>
                <p> One of my challenges during this project was of course <b>working around the constraints of our webpage builder,</b> LumApps. As I was more used to designing around constraints from my target audiences surrounding problems like accessibility, <b>navigating primarily technical constraints was challenging and pushed me to constantly look for new ways to approach familiar problems.</b> </p>
                <p style={{marginBottom:'0px'}}>On the right are some elements that I designed but wasn't able to use and below are examples of constraints I struggled with the most. </p>
                <ol>
                  <li>lack of global components</li>
                  <li>4 column limitation</li>
                  <li>small library of widgets — many widgets I wanted to utilize, such as a gallery, weren't available</li>
                  <li>limited affordance / feedforward indicators - ex: no hover animations</li>
                </ol>
              </div>
              <img className='min' src={require('../../images/c1assets/techconstraints.png')}></img>
            </div>
            <div className='row'>
              <div className='column gallery'>
                <img src={require('../../images/c1assets/pulseconventions.png')}></img>
                <img style={{border: '0.1px solid black'}} src={require('../../images/c1assets/heather.png')}></img>
              </div>
              <div>
              <h4>Pulse Conventions</h4>
                <p>Another challenge I faced was balancing design in <b>according to best practices versus according to conventions.</b> For example, on the images on the left, can you confidently tell what's clickable? </p>
                <p>I wanted to <b>improve these link affordances, but also didn't want to confuse those who were used to the interactions that were already present on Pulse.</b> This pushed me to to create really strong affordances that would not only create a seamless experience for new users, but stand out to those used to seeing these entry points in a different context. </p>
              </div>
            </div>
          </div>

          <div className='sectionContainer'>
            <h2>Project 2: Accelerator</h2>
            <p> The second project I worked on at Capital One is the Accelerator. Often times new C1 businesses and acquisitions are forced to go through a variety of different tedious processes in order to integrate into the company; <b>the Accelerator is a service aimed at supporting these groups and making their experiences going through these processes as seamless as possible.</b> </p>
            <p><b>My objective was to understand the current experiences of associates in zero-to-one businesses and begin ideating what an Accelerator service may look like on a case by case basis.</b> With the scope of this project and the breadth of its audience, I had the opportunity to collaborate with a wide variety of partners inside and outside of C1, including C1 Software, Shopping, the Cloud Controls team, and many more. </p>
            <div className='row'>
              <p> My main contribution to the project was in <b>designing and executing two hour-long blueprinting sessions with two groups of stakeholders.</b> The first group was from UTEP, a tech exceptions program for new businesses, while the second was from the Cloud Controls team, which helps businesses integrate into the cloud infrastructure. We tested <b>sessions with different structures as well as different combinations of stakeholders.</b> </p>
              <img className='min' src={require('../../images/c1assets/utep.png')}></img>
            </div>
          </div>

          <div className='sectionContainer'>
            <h2>Challenges</h2>
            <div>
              <div className='leftRow'>
                <img src={require('../../images/c1assets/scope.png')}></img>
                <h5>Scope</h5>
              </div>
              <p>The scope of the Accelerator was far larger than any project I had ever worked on. Since the service was attempting to target so many processes, I quickly understanding a variety user experiences and who exactly was involved in each of them was challenging but pushed my ability to empathize and perform user research efficiently. </p>
              <br></br>

              <div className='leftRow'>
                <img src={require('../../images/c1assets/blueprint.png')}></img>
                <h5>Blueprinting</h5>
              </div>
              <p>If the number of experiences we were trying to streamline wasn't enough, even each individual process the Aceelerator targeted was large in scope, which leads me to my second challenge, conducting blueprinting sessions effectively.  </p>
              <p>As someone used to conducting usability tests for 5-minute long user experiences, the idea of <b>capturing week-long or sometimes even month-long processes in a single hour long interview was extremely daunting.</b> I had to think about how to probe as much information as possible from stakeholders in a short amount of time and work through questions such as, "is it more effective to speak to process owners and customers simultaneously or individually?" </p>
              <br></br>

              <div className='leftRow'>
                <img src={require('../../images/c1assets/ambiguity.png')}></img>
                <h5>Ambiguity</h5>
              </div>
              <p> The final challenge I'm going to mention is working with the ambiguity of the project. For most of my time working on the project, <b>I had no idea what the final product might look like.</b> I had to jump between different groups and juggle the needs of different stakeholders to create even a starting point for what to design. </p>
              <p>For some groups, a dashboard display of where you were in a process may be the best solution, while another group may instead need a specialized group of people and a resource playbook to support them. This was one of my first service design projects, so <b>working with ambiguity was challening, but helped me think outside the box and not limit myself to conventional interface solutions that I was used to.</b> </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
