import React from "react";
import MyResume from '../assets/resume.png'

function Resume(){
    return (
        <section>
                <h1>Resume</h1>
                <br/>
                <a href={MyResume} download><h4>Downlad my resume</h4></a>
                <br/>
                <h2>Front-end Tech</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        React.js
                    </li>
                </ul>
                <br/>
                <br/>
                <br/>
                <h2>Back-end Tech</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        NoSQL(MongoDB, Mongoose)
                    </li>
                    <li>
                        API's
                    </li>
                </ul>
        </section>
    )
}

export default Resume