import React, { useEffect, useState } from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div id='about' className='about'>
      <div className={`about-title ${isVisible ? 'animate-in' : ''}`}>
        <h1>About Me</h1>
        <div className="title-underline"></div>
      </div>
      <div className="about-section">
        <div className="about-left">
          <div className="image-container">
            <img src={profile_img} alt="About me" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an enthusiastic undergraduate software engineering student passionate about designing and developing clean, efficient, and user-friendly software applications. I have a strong foundation in programming principles and enjoy solving complex problems through technology.</p> <br></br>
            <p>Committed to continuous learning and growth, I strive to create practical solutions that make a meaningful impact. I enjoy collaborating with others and applying modern technologies to build innovative projects that improve everyday experiences.</p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>years of coding experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3</h1>
          <p>Personal & Academic Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>100%</h1>
          <p>eager to grow through internship opportunities</p>
        </div>
      </div>
    </div>
  )
}

export default About