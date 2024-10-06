import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <Row>
      <Col sm={3}>
        <ColorInversionNavigation/>
      </Col>
      <Col sm={9}>
        <div className='body'>
          <h2 className='heading'>Choose Your Category</h2>
          <div className='products'>
            <Link to='/accessories'><div className='items'>
              <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
              <p>GYM ACCESSORIES</p>
            </div></Link>
            <Link to='/sports'><div className='items'>
              <img src='https://img.freepik.com/free-photo/side-view-man-practicing-yoga_23-2151406472.jpg?t=st=1727537337~exp=1727540937~hmac=8cd573958ae2c1b38963b36a415b59c6515829a0f5911445a21efc17cc646d73&w=360'/>
              <p>SPORTSWEAR</p>
            </div></Link>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Services
