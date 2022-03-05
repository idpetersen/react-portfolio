import React from "react";
import '../styles/About.css'
import profileImage from '../assets/profileImage.png'
function About() {
  return (
    <section>
      <div className="page-style">
        <div className="name-wrapper">
        <h3>Isaac Petersen</h3>
        </div>
        <div className="image-wrapper">
          <img className="profile-image" src={profileImage} alt="picture of me"></img>
        </div>
        <h2 className="about-me">About me</h2>
        <div className="about-wrapper">
        <p className="about-text">
          Full-Stack web Developer in training at the UW full-stack bootcamp. I reside in a small town called Clinton on Whidbey Island, Washington. My work experience consists of resturaunt work, construction contracting work and many other odd jobs. Finally settling down with something that makes me happy and excited.
          <br/>
          <br/>
          My strengths lie within back-end development, especailly with routing.
        </p>
        </div>
      </div>
    </section>
  );
}

export default About