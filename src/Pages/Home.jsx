import React from 'react';
import heroVideo from '../assets/heroVideo.mp4';
import recruitmentBanner from '../assets/recruitmentBanner.png';
import './Home.css';
import Domain from '../Components/Domain.jsx';
import Testimonials from '../Components/testimonials.jsx';
const Home = () => {
  return (
    <div className="container">
      <div className="homepage-container">
        <h1 className="title">
            <span className="club-name">TED</span>x<span className="clg-name">SiddagangaInstituteOfTechnology</span>
        </h1>
        <p className = "mission-statement">
          We ignite curiosity and creativity by sharing ideas that inspire and empower our community.
          Our mission is to connect changemakers and foster a spirit of lifelong learning at SIT.
          Together, we celebrate innovation, encourage bold thinking, and spark conversations that matter.
        </p>
      </div>

      <div className="hero-video-container">
        <img src={recruitmentBanner} alt="" className="recruitment-banner" />
        <video autoPlay loop muted className="hero-video">
          <source src= {heroVideo} type='video/mp4'/>
        </video>
      </div>

      <div className="who-we-are-container">
        <span className="who-we-are-title">
          WHO WE ARE
        </span>
        <p className="who-we-are-para">
          At <span className = "who-we-are-clb-name">TEDxSIT</span>, we are a community of curious minds, creative thinkers, and passionate changemakers
          united by the spirit of <span className = "who-we-are-moto">ideas worth spreading</span>. 
          Our mission is to spark meaningful conversations, inspire innovation, and bring bold ideas to life
          through independently organized TEDx events on campus.
        </p>
        <p className="who-we-are-para">
          From curating thought-provoking talks to building unforgettable experiences, our team works across
          storytelling, design, technology, and logistics to make each event a powerful platform
          for knowledge-sharing and inspiration.
        </p>
      </div>
      <div className="what-you-will-do-container">
        <span className="what-you-will-do-title">
          WHAT WE DO
        </span>
        <p className="what-you-will-do-desc">
          We have several <span className='what-you-will-do-domain'>domains</span>, each dedicated to a specific function that powers <span className = "what-you-will-do-clb-name">TEDxSIT</span> - 
          from discovering speakers to building the stage, designing visuals, and spreading the word.
        </p>
        <Domain />
      </div>
      <div className="why-us-container">
        <span className="why-us-title">
          WHY US
        </span>
        <p className="testimonial-subtitle">Don't take our word for it - hear it from those who've lived it.</p>
        <Testimonials />
      </div>
      <div className="how-to-join-conatiner">
        <span className="how-to-join-title">
          HOW TO JOIN US
        </span>
        <p className="how-to-join-desc">
          Ready to be part of something extraordinary? Just fill out the <span className="reg-form">registration form</span> by clicking the 
          button below and take your first step into the world of <span className="who-we-are-moto">ideas worth spreading</span>.
        </p>
        <div className="join-button-container">
        <a href="https://google.com" className="join-button">
          Register Now
        </a>
      </div>
      </div>
    </div>
  )
}

export default Home
