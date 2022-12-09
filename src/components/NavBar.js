import React, { useEffect, useState } from "react";
import '../App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function NavBar(props) {
    const [filled, setFilled] = useState(false);

    /* Dynamically change appearance of the nav bar so it is visible when scrolling down; 
       changes sooner on mobile because of smaller screen size */
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.matchMedia("(max-width: 600px)").matches)
                {
                    setFilled(window.pageYOffset > 50)
                }
                else setFilled(window.pageYOffset > 200)
                }
            );
        }
    }, []);

    const currentButtonStyle = `currentNavButton ${filled ? "small" : ""}`

    return (
        <div className={`navContainer ${filled ? "filled" : ""}`}>
             {/* ========== Home Icon ========== */}
            <Link to='/react-portfolio' onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`, 'Work')}>
                <img src={process.env.PUBLIC_URL + "/assets/icons/mylogo.png"} width={"55px"} alt='my branding logo'/>
            </Link>
            {/* ========== Buttons for Pages ========== */}
            <div className="navButtonsContainer">
                <Link to="/react-portfolio" className={props.currentPage == 'Work' ? currentButtonStyle : ''}
                onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`, 'Work')}>WORK</Link>
                <Link to="/about" className={`${props.currentPage == 'About' ? currentButtonStyle : ''} lastRight`}
                onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`, 'About')}>ABOUT</Link>
            </div>
        </div>
    );

}