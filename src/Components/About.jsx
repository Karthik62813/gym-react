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
        <div className='abt-body'>
          <h2 className='abt-heading'>About Us....</h2>
          <div className='abt'>
            <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
            <div className='abt-txt'>
              <p><span style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>BreatheFit</span> lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, esse? Corporis quia nesciunt consequuntur, dolore adipiscir.</p>
              <a style={{color: "gray"}}>Learn More...</a>
            </div>
        </div>
        </div>
      </Col>
    </Row>
  )
}

export default About
