import React from 'react'
import './About.css'
import  theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/DP.png'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src= {theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p> I am a passionate and dedicated Frontend Developer with strong knowledge of HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS. I enjoy designing clean, responsive, and user-friendly interfaces that enhance the overall user experience.</p>
                
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>CORE JAVA</p><hr style={{width:"40%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1</h1>
                <p>YEAR TRAINNIG  </p>
            </div>
      </div>
    </div>
  )
}

export default About
