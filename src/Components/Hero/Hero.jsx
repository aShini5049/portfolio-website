import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import social_icon1 from '../../assets/social_icon1.png';
import social_icon2 from '../../assets/social_icon2.png';
import social_icon3 from '../../assets/social_icon3.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-left">
        <h1 className="fade-in-up"><span>I'm Ashini Hewagamage</span></h1>
        <h1 className="fade-in-up delay-1">Undergraduate Software Engineer</h1>
        
        <div className='hero-action fade-in-up delay-2'>
          <div className='hero-connect pulse-animation'>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashinihewagamage21@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Ashini%2C%0AI%20would%20like%20to%20connect%20with%20you..."
              target="_blank"
              rel="noopener noreferrer"
              className='anchor-link'
            >
              Connect With Me
            </a>
          </div>

          <a 
            href="/Ashini Hewagamage CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-resume bounce-on-hover"
          >
            My Resume
          </a>
        </div>

        <div className='hero-socials fade-in-up delay-3'>
          <a href="https://www.linkedin.com/in/ashini-hewagamage-532798293/" target="_blank" rel="noopener noreferrer" className="social-icon social-bounce">
            <img src={social_icon1} alt="LinkedIn" />
          </a>
          <a href="https://github.com/aShini5049" target="_blank" rel="noopener noreferrer" className="social-icon social-bounce">
            <img src={social_icon2} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/ashini_hewagamage/" target="_blank" rel="noopener noreferrer" className="social-icon social-bounce">
            <img src={social_icon3} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-wrapper float-animation">
          <img src={profile_img} alt="Profile" className="profile-image-zoom" />
        </div>
      </div>
    </div>
  );
};

export default Hero;