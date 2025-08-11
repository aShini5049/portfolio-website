import React, { useEffect, useState } from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    mywork_data.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index])
      }, 800 + (index * 200))
    })

    return () => clearTimeout(timer)
  }, [])

  return (
    <div id='portfolio' className='mywork'>
      <div className={`mywork-title ${isVisible ? 'animate-in' : ''}`}>
        <h1>My Latest Work</h1>
        <div className="title-underline"></div>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
            return (
              <div 
                key={index} 
                className={`project-card ${visibleCards.includes(index) ? 'card-animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-image">
                  <img src={work.w_img} alt={work.w_name || "Project"} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-name">{work.w_name || "Project Name"}</h3>
                  <p className="project-description">{work.w_description || "Project description goes here"}</p>
                  <a
                    href={work.w_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-btn"
                  >
                    <span>View Project</span>
                    <div className="btn-shine"></div>
                  </a>
                </div>

              </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyWork