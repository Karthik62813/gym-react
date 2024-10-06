import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'
import {productsData} from '../Data/Products'
import Gymcard from './Gymcard'
function Accessories() {
    const gymItem = productsData;
  return (
    <Row>
      <Col sm={3}>
        <ColorInversionNavigation/>
      </Col>
      <Col sm={9}>
        <div className='body'>
            <h2 className='heading'>Meet Our Team</h2>
            <div className='cards'>
                {gymItem.map((gym)=>(<Gymcard gymData={gym}/>))}
            </div>
        </div>
      </Col>
    </Row>
  )
}

export default Accessories