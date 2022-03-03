import React from "react";
import '../styles/Footer.css'

function Footer () {
    return(
        <div className="icon-wrapper">
            <a href="https://github.com/idpetersen"><img src="../assets/github.png" alt='github logo' className="icon"/></a>
            <a href="https://www.linkedin.com/in/isaac-petersen-25ab1a214/"><img src="../assets/linkedin.png" alt='linkedin icon' className="icon"/></a>
        </div>
    )
}

export default Footer