import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'

function About() {
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
              <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
            </div>
            <div className='abt'>
              <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
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
              <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
            </div>
            <div className='abt'>
              <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
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
              <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
            </div>
            <div className='abt'>
              <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
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
