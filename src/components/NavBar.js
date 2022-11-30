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

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setFilled(window.pageYOffset > 200)
                }
            );
        }
    }, []);

    const currentButtonStyle = `currentNavButton ${filled ? "small" : ""}`

    return (
        <div className={`navContainer ${filled ? "filled" : ""}`}>
            <Link to='/' onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`, 'Work')}>
                <img src={process.env.PUBLIC_URL + "/assets/icons/mylogo.png"} width={"55px"}/>
            </Link>
            <div className="navButtonsContainer">
                <Link to="/" className={props.currentPage == 'Work' ? currentButtonStyle : ''}
                onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`, 'Work')}>WORK</Link>
                <Link to="/about" className={`${props.currentPage == 'About' ? currentButtonStyle : ''} lastRight`}
                onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`, 'About')}>ABOUT</Link>
            </div>
        </div>
    );

}