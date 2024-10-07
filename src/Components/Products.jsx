import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function Products() {
  
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
          <h2 className='heading' style={{ marginTop: "5%"}}>Choose Your Category</h2>
          <div className='products'>
            <Link to='/accessories'><div className='items'>
              <img src='https://img.freepik.com/free-photo/kettlebell-gym-equipment-still-life_23-2151739248.jpg?t=st=1728291956~exp=1728295556~hmac=5468a67f6e16b2d8a36073adc5d81de47569474dee63741ab3602c3dce06ad16&w=740'/>
              <p>GYM ACCESSORIES</p>
            </div></Link>
            <Link to='/sports'><div className='items'>
              <img src='https://img.freepik.com/free-photo/couple-training-together-gym_1303-26840.jpg?t=st=1728293247~exp=1728296847~hmac=d6a6be3b9ca6497787484f3e1633ffa04eb86b0bf0ac77ae7705d88c7221029a&w=360'/>
              <p>SPORTSWEAR</p>
            </div></Link>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Products