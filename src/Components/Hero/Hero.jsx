import React from 'react'
import './Hero.css'
import profile_image from '../../assets/DP.png';

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_image} alt="" className='hero-dp'/>
      <h1><span>I'm Mohd Jeeshan</span><br /> Web Developer  </h1>
      <p>A passionate Web Developer with skills in HTML, CSS, JavaScript, Core Java,React,Tailwind,Bootstrap and MySQL.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
