import React from 'react'
import './Hero.css'
import profile_image from '../../assets/DP.png';
import {Link} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_image} alt="" className='hero-dp'/>
      <h1><span>I'm Mohd Jeeshan</span><br /> Web Developer  </h1>
      <p>A passionate Web Developer with skills in HTML, CSS, JavaScript, Core Java,React,Tailwind,Bootstrap and MySQL.</p>
      <div className="hero-action">
        <div className="hero-connect" onClick={() => {
      window.open(
        "www.instagram.com/jeeshan006",
        "_blank"
      );
    }}>Connect with me</div>
        <div className="hero-resume" onClick={() => {
      window.open(
        "https://drive.google.com/file/d/1osF3aC-5vjsLpQf_Y5vHM8AAPU4tVIcj/view?usp=drive_link",
        "_blank"
      );
    }}>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
