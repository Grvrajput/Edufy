import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT EDUFY</h3>
        <h2>Empowering Future Leaders in Education</h2>
        <p>At Edufy, we believe in nurturing tomorrow's leaders today by providing transformative learning experiences that inspire growth, innovation, and impact. Our comprehensive programs are meticulously designed to equip individuals with the knowledge, skills, and confidence needed to thrive in the ever-evolving field of education.</p>
        <p>With a curriculum that blends cutting-edge technology, practical training, and personalized mentorship, we empower educators to make meaningful contributions to classrooms, schools, and communities. Whether you're an aspiring teacher, administrator, counselor, or educational innovator, Edufy is your pathway to unlocking your full potential and shaping the future of education..</p>
        <p>Join us on a journey of discovery, growth, and excellence as we redefine what it means to lead and inspire in education.</p>
      </div>
    </div>
  )
}

export default About
