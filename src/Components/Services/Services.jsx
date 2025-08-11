import React, { useState, useEffect } from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleBoxes, setVisibleBoxes] = useState([]);
  
  const servicesPerSlide = 3;
  const totalSlides = Math.ceil(Services_Data.length / servicesPerSlide);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 300);

    const currentServices = getCurrentServices();
    currentServices.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBoxes(prev => [...prev, index]);
      }, 800 + (index * 150));
    });

    return () => clearTimeout(titleTimer);
  }, []);

  useEffect(() => {
    if (currentSlide > 0) {
      setVisibleBoxes([]);
      const currentServices = getCurrentServices();
      currentServices.forEach((_, index) => {
        setTimeout(() => {
          setVisibleBoxes(prev => [...prev, index]);
        }, 300 + (index * 100));
      });
    }
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('slide-left');
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection('');
    }, 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('slide-right');
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection('');
    }, 600);
  };

  const goToSlide = (slideIndex) => {
    if (isAnimating || slideIndex === currentSlide) return;
    setIsAnimating(true);
    setSlideDirection(slideIndex > currentSlide ? 'slide-left' : 'slide-right');
    setCurrentSlide(slideIndex);
    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection('');
    }, 600);
  };

  const getCurrentServices = () => {
    const startIndex = currentSlide * servicesPerSlide;
    return Services_Data.slice(startIndex, startIndex + servicesPerSlide);
  };

  return (
    <div>
      <div id='services' className="services">
        <div className={`services-title ${isTitleVisible ? 'animate-in' : ''}`}>
          <h1>What I Can Do</h1>
          <div className="title-underline"></div>
        </div>
        
        <div className="services-slider">
          <div className={`services-container ${slideDirection}`}>
            {getCurrentServices().map((service, index) => {
              return (
                <div 
                  key={service.s_no} 
                  className={`services-format ${visibleBoxes.includes(index) ? 'box-animate-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3>{service.s_no}</h3>
                  <h2>{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                  <div className="service-shine"></div>
                </div>
              );
            })}
          </div>

          
          <div className="slider-navigation">
            <button 
              className={`nav-arrow nav-arrow-left ${isAnimating ? 'arrow-active' : ''}`}
              onClick={prevSlide}
              disabled={currentSlide === 0 || isAnimating}
            >
              <img src={arrow_icon} alt="Previous" />
            </button>
            
            <div className="slide-indicators">
              {Array.from({ length: totalSlides }, (_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            
            <button 
              className={`nav-arrow nav-arrow-right ${isAnimating ? 'arrow-active' : ''}`}
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1 || isAnimating}
            >
              <img src={arrow_icon} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services