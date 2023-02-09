import React, { useEffect, useState } from "react";
import '../App.css';
import {
    Link,
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

    const currentButtonStyle = `currentNavButton ${(filled || props.alwaysWhite) ? "small dark" : ""}`

    return (
        <div className={`navContainer ${(filled || props.alwaysWhite) ? "filled" : ""}`}>
             {/* ========== Home Icon ========== */}
            <Link to='/' onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`, 'Work')}>
                <img src={`${(filled || props.alwaysWhite) ? `${process.env.PUBLIC_URL + "/assets/icons/mylogo_dark.png"}` : `${process.env.PUBLIC_URL + "/assets/icons/mylogo.png"}`}`} width={"55px"} alt='my branding logo'/>
            </Link>
            {/* ========== Buttons for Pages ========== */}
            <div className="navButtonsContainer">
                <Link to="/" className={`${props.currentPage === 'Work' ? currentButtonStyle : ''} ${(filled || props.alwaysWhite) ? "darkFont" : " "}`}
                onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/background.jpg')`, 'Work')}>WORK</Link>
                <Link to="/about" className={`${props.currentPage === 'About' ? currentButtonStyle : ''} lastRight ${(filled || props.alwaysWhite) ? "darkFont" : " "}`}
                onClick={() => props.switchPage(`url('${process.env.PUBLIC_URL}/assets/images/darkened_background.jpg')`, 'About')}>ABOUT</Link>
            </div>
        </div>
    );

}