import React, { useState } from 'react'
import '../styles/AboutUs.css'
import MemberCard from '../Components/MemberCard'
import member from '../about-us/teamMembers.json'

const AboutUs = () => {
  const specialMembers = member.filter(person => person.isLead)
  const otherMembers = member.filter(person => !person.isLead)
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <div className='about-us-enitre-page'>
      <div className='first-section'>
        <div className='about-us-left'>
          <h1>About <span className="highlight-white">TEDxSIT</span></h1>
          <div className='img-container'>
            <video controls autoPlay muted loop src="https://videos.pexels.com/video-files/3975494/3975494-hd_1920_1080_24fps.mp4"></video>
            <p className='about-img-text'>"Ideas Worth Spreading"</p>
          </div>
          <div className="about-us-description">
            <p>The ideas that aren't are caged! Lol</p>
          </div>
        </div>
        <div className='about-us-right'>
          <div className="who-are-we">
            <h1>Who Are We?</h1> 
            <p>We are <span className="highlight-red">TEDxSiddagangaInstituteofTechnology</span>. Our team is a dedicated platform that brings together distinguished speakers and an enthusiastic audience to explore multidimensional themes. Supported by our institution and sponsors, we meticulously plan our events to create an unforgettable and seamless experience.</p>
          </div>
          <div className="our-mission">
            <p><span className="highlight-red">Our mission</span> is to discover and share ideas that ignite creativity, explore new opportunities, and encourage positive change. We are dedicated to fostering curiosity, critical thinking, and the pursuit of knowledge with openness and impartiality. Ultimately, our goal is to provide a platform for spreading ideas worth sharing.</p>
          </div>
        </div>
      </div>
      <div className='second-section'>
        <h1>Timeline</h1>
        <div>Box</div>
      </div>
      <div className="third-section">
        <h1>Team Members</h1>
        <div className="box-team">
          <div className="special-members-column">
            {specialMembers.map(people => (
                <MemberCard key={people.id} member={people} />
            ))}
          </div>
          <div className="members-grid-column">
            <div className="members-grid">
            {otherMembers.map(people => (
                <MemberCard key={people.id} member={people} />
            ))}
            </div>
            <div className="members-grid-single">
            {member.map(people => (
                <MemberCard key={people.id} member={people} />
            ))}
            </div>
          </div>
          <div className="members-grid-details">
          </div>
          
          {/* USING THIS WHEN TIME ARRIVES 
          {member.map((members) => (
            <MemberCard key={members.id} member={members} />
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
