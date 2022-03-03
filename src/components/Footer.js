import React from "react";
import '../styles/Footer.css';
import GithubIcon from '../assets/github.png';
import LinkedinIcon from '../assets/linkedIn.png'

function Footer () {
    return(
        <div className="icon-wrapper">
            <a href="https://github.com/idpetersen"><img src={GithubIcon} alt='github logo' className="icon"/></a>
            <a href="https://www.linkedin.com/in/isaac-petersen-25ab1a214/"><img src={LinkedinIcon} alt='linkedin icon' className="icon"/></a>
        </div>
    )
}

export default Footer