import React, { useEffect, useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState([]);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 300);

 
    const leftTimer = setTimeout(() => {
      setIsLeftVisible(true);
    }, 800);


    const rightTimer = setTimeout(() => {
      setIsRightVisible(true);
    }, 1000);


    const details = ['email', 'phone', 'location'];
    details.forEach((_, index) => {
      setTimeout(() => {
        setVisibleDetails(prev => [...prev, index]);
      }, 1400 + (index * 200));
    });

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(leftTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9c2f034e-e75d-4e88-a732-4fdee52c8ae0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  }; 

  return (
    <div>
      <div id='contact' className="contact">
        <div className={`contact-title ${isTitleVisible ? 'animate-in' : ''}`}>
          <h1>Get in touch</h1>
          <div className="title-underline"></div>
        </div>
        <div className="contact-section">
          <div className={`contact-left ${isLeftVisible ? 'left-animate-in' : ''}`}>
            <h1>Let's talk</h1>
            <p>Looking for a motivated and enthusiastic undergraduate software engineering student to join your team? I’m eager to apply my skills, learn from industry professionals, and contribute to real-world projects through internship opportunities. Feel free to get in touch - I’d love to discuss how I can add value to your team.</p>
            <div className="contact-details">
              <div className={`contact-detail ${visibleDetails.includes(0) ? 'detail-animate-in' : ''}`}>
                <img src={mail_icon} alt="" />
                <p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ashinihewagamage21@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Ashini%2C%0AI%20would%20like%20to%20connect%20with%20you..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor-link"
                  >
                    ashinihewagamage21@gmail.com
                  </a>
                </p>
              </div>

              <div className={`contact-detail ${visibleDetails.includes(1) ? 'detail-animate-in' : ''}`}>
                <img src={call_icon} alt="" />
                <p>
                  <a href="tel:+94702224201" className="anchor-link">
                    +94 70 222 4201
                  </a>
                </p>
              </div>

              <div className={`contact-detail ${visibleDetails.includes(2) ? 'detail-animate-in' : ''}`}>
                <img src={location_icon} alt="" />
                <p>
                  <a
                    href="https://www.google.com/maps/place/Colombo,+Western+Province,+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor-link"
                  >
                    Colombo, Western Province, Sri Lanka
                  </a>
                </p>
              </div>

            </div>
          </div>
          <form onSubmit={onSubmit} className={`contact-right ${isRightVisible ? 'right-animate-in' : ''}`}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>
              <span>Submit Now</span>
              <div className="btn-shine"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact