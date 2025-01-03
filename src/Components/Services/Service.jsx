import React from 'react'
import './Service.css';
import img1 from '../../assets/mern1.jpg';
import img2 from '../../assets/web1.jpg';
import img3 from '../../assets/cloudcompute1.jpg';

const Programs = () => {
 return (


    <div className='programs'>
       {/* <h2>Our Services</h2>
      <p1>Courses we provide</p1> */}

      <div className="program">
        <img src={img1} alt="Mern Stack" />
        <div className="caption">
            {/* <img src={mern1} alt="" /> */}
            <p>Mern Stack</p>
        </div>
      </div>
      <div className="program">
        <img src={img2} alt="" />
        <div className="caption">
            {/* <img src={program_icon_2} alt="" /> */}
            <p>Web Development</p>
        </div>
      </div>
      <div className="program">
        <img src={img3} alt="" />
        <div className="caption">
            {/* <img src={program_icon_3} alt="" /> */}
            <p>Cloud Computing</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
