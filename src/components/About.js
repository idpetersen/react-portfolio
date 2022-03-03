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
        <p className="about-text">
          I'm baby esse green juice celiac shoreditch 90's asymmetrical
          letterpress hashtag kickstarter food truck est quis. Try-hard street
          art taiyaki dolore. Ugh raclette scenester, XOXO tilde craft beer yr
          lo-fi cray. Shabby chic franzen selvage occupy VHS prism, air plant
          locavore twee tumblr elit sustainable banh mi umami. Whatever austin
          chambray taiyaki hot chicken. Tote bag la croix coloring book,
          humblebrag officia ut est artisan shaman health goth woke. Beard
          fingerstache VHS, flannel ut proident marfa deep v magna excepteur ad
          aliquip reprehenderit. Snackwave duis slow-carb hammock, velit ea four
          loko vape cillum adaptogen roof party drinking vinegar. Jianbing anim
          shoreditch, fam semiotics vice cardigan. Proident viral chillwave,
          paleo banjo next level fingerstache cred sunt kitsch cillum literally.
          Before they sold out pour-over pinterest, wolf adaptogen tumblr
          readymade. Asymmetrical meh brunch kale chips XOXO. Kickstarter
          flexitarian thundercats tattooed gastropub cardigan tilde pork belly
          neutra. Franzen sunt hell of waistcoat drinking vinegar paleo est
          activated charcoal. Kale chips everyday carry hot chicken skateboard
          non viral. Adaptogen chambray helvetica microdosing beard tacos et
          kickstarter four dollar toast pop-up. Venmo shabby chic mollit hot
          chicken cloud bread minim butcher fugiat. Dummy text? More like dummy
          thicc text, amirite?
        </p>

      </div>
    </section>
  );
}

export default About