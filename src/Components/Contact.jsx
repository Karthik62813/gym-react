import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'

function Contact() {
  return (
    <Row>
      <Col sm={3}>
        <ColorInversionNavigation/>
      </Col>
      <Col sm={9}>
        <h1>Contact page</h1>
      </Col>
    </Row>
  )
}

export default Contact
