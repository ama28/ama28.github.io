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
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Archive from './pages/Archive';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: `url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`,
      projects: [
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/c1.png')`,
            title:'Design Internship Program',
            skills:'UX DESIGN · UX RESEARCH',
            category: {design: true, games: false, research: true}
        },
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/escape_dartist.svg')`,
            title:'Escape Dartist VR',
            skills:'GAME DESIGN · LEVEL DESIGN · XR · 3D ART',
            category: {design: false, games: true, research: false}
        },
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/channel.svg')`,
            title:'Channel',
            skills:'GAME DESIGN · PROGRAMMING',
            category: {design: false, games: true, research: false}
        },
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/fitsaber.png')`,
            title:'Fitsaber',
            skills:'RESEARCH · PROGRAMMING',
            category: {design: false, games: true, research: true}
        },
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/fitsaber.png')`,
            title:'Fitsaber',
            skills:'RESEARCH · PROGRAMMING',
            category: {design: false, games: true, research: true}
        },
      ],
      gamePosts: [
        {
            imageURL: `${process.env.PUBLIC_URL + "/assets/images/minecraft.jpg"}`,
            title:'Minecraft',
            description: 'Sed non ex quis orci commodo lobortis. In nec arcu nec erat tristique condimentum. Integer et augue leo. tempor elit c, porttitor mag na. tempor elit ac, porttitor magna.hnpuii Nunc tincidunt lorem condimen tumtempor elit ac, porttitor magna. tempor elit ac, porttitor magna.',
            starCount: 1
        },
        {
            imageURL: `${process.env.PUBLIC_URL + "/assets/images/omori.jpg"}`,
            title:'Omori',
            description: 'Sed non ex quis orci commodo lobortis. In nec arcu nec erat tristique condimentum. Integer et augue leo. tempor elit c, porttitor mag na. tempor elit ac, porttitor magna.hnpuii Nunc tincidunt lorem condimen tumtempor elit ac, porttitor magna. tempor elit ac, porttitor magna.',
            starCount: 4
        },
        {
            imageURL: `${process.env.PUBLIC_URL + "/assets/images/minecraft.jpg"}`,
            title:'Minecraft',
            description: 'Sed non ex quis orci commodo lobortis. In nec arcu nec erat tristique condimentum. Integer et augue leo. tempor elit c, porttitor mag na. tempor elit ac, porttitor magna.hnpuii Nunc tincidunt lorem condimen tumtempor elit ac, porttitor magna. tempor elit ac, porttitor magna.',
            starCount: 3
        },
        {
            imageURL: `${process.env.PUBLIC_URL + "/assets/images/minecraft.jpg"}`,
            title:'Minecraft',
            description: 'Sed non ex quis orci commodo lobortis. In nec arcu nec erat tristique condimentum. Integer et augue leo. tempor elit c, porttitor mag na. tempor elit ac, porttitor magna.hnpuii Nunc tincidunt lorem condimen tumtempor elit ac, porttitor magna. tempor elit ac, porttitor magna.',
            starCount: 2
        },
      ],
      archivedProjects: [
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/c1.png')`,
            title:'Design Internship Program',
            skills:'UX DESIGN · UX RESEARCH',
            category: {design: true, games: false, research: true}
        },
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/escape_dartist.svg')`,
            title:'Escape Dartist VR',
            skills:'GAME DESIGN · LEVEL DESIGN · XR · 3D ART',
            category: {design: false, games: true, research: false}
        },
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/channel.svg')`,
            title:'Channel',
            skills:'GAME DESIGN · PROGRAMMING',
            category: {design: false, games: true, research: false}
        },
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/fitsaber.png')`,
            title:'Fitsaber',
            skills:'RESEARCH · PROGRAMMING',
            category: {design: false, games: true, research: true}
        },
        {
            backgroundImgURL: `url('${process.env.PUBLIC_URL}/assets/images/fitsaber.png')`,
            title:'Fitsaber',
            skills:'RESEARCH · PROGRAMMING',
            category: {design: false, games: true, research: true}
        },
      ],
    }
  }

  setBackground(backgroundURL) {
    this.setState(prevState => ({
      ...prevState,
      background: backgroundURL
    }))
  }
  
  render() {
    const backgroundStyle = {
      backgroundImage: this.state.background,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    }

    return (
      <div style={backgroundStyle}>
        {/* ======= Navigation Router ======= */}
        <Router>
          {/* A Navigation Bar which contains all the buttons
              needed to navigate through the core pages of the site. */}
          <div className="navContainer">
            <a href=''>
                <img src={process.env.PUBLIC_URL + "/assets/icons/mylogo.png"} width={"55px"}/>
            </a>
            <div className="navButtonsContainer">
                <Link to="/" className="currentNavButton"
                  onClick={() => this.setBackground(`url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`)}>WORK</Link>
                <Link to="/about" className='lastRight' 
                onClick={() => this.setBackground(`url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`)}>ABOUT</Link>
            </div>
          </div>

          {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Work projects={this.state.projects}/>}/>
            <Route path="/about" element={<AboutMe gamePosts={this.state.gamePosts}/>}/>
            <Route path="/games" element={<Games gamePosts={this.state.gamePosts}/>}/>
            <Route path="/archive" element={<Archive archivedProjects={this.state.archivedProjects}/>}/>
          </Routes>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App