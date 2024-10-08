import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'
import { useEffect } from 'react';

function About() {
  
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Row>
      <Col sm={3}>
        <ColorInversionNavigation/>
      </Col>
      <Col sm={9}>
        <div className='body'>
          <h2 className='heading'>About Us....</h2>
          <div className='abt'>
            <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
            <div className='abt-txt'>
              <p><span style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>BreatheFit</span> lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, esse? Corporis quia nesciunt consequuntur, dolore adipiscir.</p>
              <a style={{color: "gray"}}>Learn More...</a>
            </div>
          </div>
          <div className='our_team'> 
            <h2 className='heading'>Meet Our Team</h2>
            <div className='abt'>
              <div className='abt-txt'>
                <span style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>Personal Trainers</span>
                <p>Our certified personal trainers are committed to creating customized workout plans tailored to your fitness level and goals. Whether you’re looking to build strength, lose weight, or improve overall health, they’re here to guide and motivate you every step of the way.</p>
              </div>
              <img src='https://images.unsplash.com/photo-1642267165393-951c20e0a8b8?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='abt'>
              <img src='https://img.freepik.com/free-photo/people-exercising-practicing-sports-with-use-foam-roller_23-2151742544.jpg?t=st=1728385951~exp=1728389551~hmac=2530ca3fa87f585a2f08436dc7b18ab919b13344327edd9b884c820a5f1ea71d&w=826'/>
              <div className='abt-txt'>
                <span style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>Group Fitness Instructors</span>
                <p>Get ready to have fun and stay active with our dynamic group fitness classes! Our instructors lead a variety of sessions, from high-intensity interval training (HIIT) to yoga and Zumba, ensuring there’s something for everyone. They’ll keep you energized and inspired throughout your fitness journey.</p>
              </div>
            </div>
            <div className='abt'>
              <div className='abt-txt'>
                <span style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>Strength Coaches</span>
                <p>For those focused on building muscle and improving strength, our experienced strength coaches provide expert guidance in weightlifting, bodybuilding, and resistance training. They’ll help you push your limits while maintaining proper form and safety.</p>
              </div>
              <img src='https://images.unsplash.com/photo-1585152968992-d2b9444408cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='abt'>
              <img src='https://img.freepik.com/free-photo/two-friends-have-rest-forest_1157-24391.jpg?t=st=1728386898~exp=1728390498~hmac=11b54f4365f1e1b9332426df984dd82ccf56757da9e3cc1e3d4d1d600ae246aa&w=740'/>
              <div className='abt-txt'>
                <span style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>Nutritionists & Dietitians</span>
                <p>Fuel your fitness journey with personalized nutritional advice from our qualified dietitians. Whether you need help with meal planning, weight management, or sports nutrition, they’ll help you optimize your diet for the best results.</p>
              </div>
            </div>
            <div className='abt'>
              <div className='abt-txt'>
                <span style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>Physical Therapists</span>
                <p>Injury prevention and recovery are crucial to long-term fitness success. Our licensed physical therapists are here to help you rehabilitate from injuries and improve mobility, ensuring you stay healthy and active.</p>
              </div>
              <img src='https://img.freepik.com/free-photo/patient-doing-physical-rehabilitation-helped-by-therapists_23-2149227853.jpg?t=st=1728387115~exp=1728390715~hmac=5e004dbe70f732d953cb1dda6998325b2ca9edc812f3a89e16a33baf9225ddf5&w=740'/>
            </div>
            <div className='abt'>
              <img src='https://img.freepik.com/free-photo/medium-shot-girls-teacher-school-gym_23-2149038739.jpg?t=st=1728387362~exp=1728390962~hmac=3325f9791f0d1d8b38f00621ee92a90cff2692996879986e3326b980bb94018b&w=740'/>
              <div className='abt-txt'>
                <span style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>Front Desk & Support Staff</span>
                <p>Our friendly and professional front desk team is here to assist with membership inquiries, class bookings, and any questions you may have. They ensure your experience at BreatheFit is smooth and hassle-free from the moment you walk in.</p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default About
