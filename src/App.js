import React, {Component} from 'react';
import './App.css';
import Work from './pages/Work.js';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Games from './pages/Games';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Archive from './pages/Archive';
import Papa from "papaparse";
import GamePosts from './GamePosts.csv';
import Projects from './Projects.csv';
import ArchiveProjects from './ArchiveProjects.csv'
import DimensionalRift from './pages/projectPages/DimensionalRift';
import Spin from './pages/projectPages/Spin';
import C1 from './pages/projectPages/C1';
import P3G from './pages/projectPages/P3G';
import FitSaber from './pages/projectPages/FitSaber';
import Amos from './pages/projectPages/Amos';
import EscapeDartist from './pages/projectPages/EscapeDartist';
import Eachday from './pages/projectPages/Eachday';
import BookScout from './pages/archivePages/BookScout';
import AC from './pages/archivePages/AC';
import Heuristicats from './pages/projectPages/Heuristicats';
import SpaceShank from './pages/projectPages/SpaceShank';
import TanksInAdvance from './pages/projectPages/TanksInAdvance';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: `url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`,
      currentPage: 'Work',
      data: '',
      projects: [],
      gamePosts: [],
      archivedProjects: [],
    }
    this.updateGameData = this.updateGameData.bind(this)
    this.updateProjectData = this.updateProjectData.bind(this)
    this.updateArchiveData = this.updateArchiveData.bind(this)
  }

  /* Changes background when switching a page 
    (not currently in use — all pages have the same background) */
  switchPage = (backgroundURL, nextPage) => {
    this.setState(prevState => ({
      ...prevState,
      background: backgroundURL,
      currentPage: nextPage
    }))
  }

  componentDidMount() {
    document.title = 'Adrian Ma'

    Papa.parse(GamePosts, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: this.updateGameData
    });

    Papa.parse(Projects, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: this.updateProjectData
    });

    Papa.parse(ArchiveProjects, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: this.updateArchiveData
    });
  }

  /* Filter data from the parsed projects csv into the projects state variable*/
  updateProjectData(result) {
    const data = result.data.map((project, idx) => {
      return {
        title: project.title,
        route: project.title.replace(/\s/g, ''),
        altRoute: project.altRoute,
        imageURL: `url(${process.env.PUBLIC_URL}/assets/images/` + project.imageURL + `)`,
        skills: project.skills,
        category: {
          design: project.category.includes("design"),
          games: project.category.includes("games"),
          research: project.category.includes("research"),
        },
      }
    })
    this.setState({projects: data});
  }

  updateArchiveData(result) {
    const data = result.data.map((project, idx) => {
      return {
        title: project.title,
        route: project.title.replace(/\s/g, ''),
        altRoute: project.altRoute,
        imageURL: `url(${process.env.PUBLIC_URL}/assets/images/` + project.imageURL + `)`,
        skills: project.skills,
        category: {
          design: project.category.includes("design"),
          games: project.category.includes("games"),
          research: project.category.includes("research"),
        },
      }
    })
    this.setState({archivedProjects: data});
  }

  /* Helper function for updateGameData: reformats any image entry in the csv in the form, 
     __.jpg/jpeg/svg/png to the format necessary to find the source file in the project */
  formatImages(inputString) {
    let temp = inputString
    temp = temp.replace(/\w*.jpg\b/, '/assets/images/$&')
    temp = temp.replace(/\w*.svg\b/, '/assets/images/$&')
    temp = temp.replace(/\w*.png\b/, '/assets/images/$&')
    temp = temp.replace(/\w*.jpeg\b/, '/assets/images/$&')
    return temp;
  }

  /* Helper function for updateGameData: combines headers and sections into a 2D array 
     where each index is an array of size 2 containing a header and its corresponding section */
  to2Darray(headers, sections) {
    let headerArray = headers.split(', ');

    let sectionsWithImages = this.formatImages(sections)
    let sectionArray = sectionsWithImages.split('\\section ') //sections are delimited by "\section" in the csv

    let result = [];
    for ( let i = 0; i < headerArray.length; i++ ) {
      result.push( [ headerArray[i], sectionArray[i] ] );
    }
    return result;
  }
  
  /* Filter data from the parsed game posts csv into the gamePosts state variable*/
  updateGameData(result) {
    const data = result.data.map((post, idx) => {
      return {
        title: post.title,
        imageURL: `${process.env.PUBLIC_URL + "/assets/images/" + post.imageURL}`,
        starCount: parseInt(post.rating),
        description: post.description,
        content: this.to2Darray(post.headers, post.sections),
        articlelink: post.articlelink,
      }
    })
    this.setState({gamePosts: data});
  }
  
  render() {
    // storing a style for the background here so that switchPage can alter it if necessary
    const backgroundStyle = {
      backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    }

    return (
      <div style={backgroundStyle}>
        {/* ======= Navigation Router ======= */}
        <Router>
          <ScrollToTop></ScrollToTop>
          {/* <NavBar 
            switchPage={this.switchPage.bind(this)}
            currentPage={this.state.currentPage}/> */}
          
          {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Work projects={this.state.projects} switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/about" element={<AboutMe gamePosts={this.state.gamePosts} switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/games" element={<Games gamePosts={this.state.gamePosts} switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/archive" element={<Archive archivedProjects={this.state.archivedProjects} switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            {/* projects */}
            <Route path="/DimensionalRift" element={<DimensionalRift switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/DesignInternshipProgram" element={<C1 switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/Player-ProgrammedPartnerGames" element={<P3G switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/SpinDashboard" element={<Spin switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/FitSaber" element={<FitSaber switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/Amos" element={<Amos switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/EscapeDartistVR" element={<EscapeDartist switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/Eachday" element={<Eachday switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/Heuristicats" element={<Heuristicats switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/SpaceShank" element={<SpaceShank switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/TanksInAdvance" element={<TanksInAdvance switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            {/* archive */}
            <Route path="/BookScout" element={<BookScout switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
            <Route path="/ACControlRedesign" element={<AC switchPage={this.switchPage.bind(this)} currentPage={this.state.currentPage}/>}/>
          </Routes>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App