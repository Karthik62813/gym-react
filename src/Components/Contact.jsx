import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'
import { useEffect } from 'react';

function Contact() {
    
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
          <h2 className='heading'>Contact Us...</h2>
          <form className='contact'>
              <div class="form-group">
                  <label style={{ width:"12%" }}>First name</label>
                  <input type="text" class="form-control input-lg" />
              </div>
              <div class="form-group">
                  <label style={{ width:"16%" }}>Second name</label>
                  <input type="text" class="form-control input-lg" />
              </div>
              <div class="form-group">
                  <label style={{ width:"10%" }}>Email</label>
                  <input type="email" class="form-control input-lg" />
              </div>
              <div class="form-group">
                  <label style={{ width:"18%" }}>Phone Number</label>
                  <input type="number" class="form-control input-lg" />
              </div>
              <div class="form-group" style={{ marginBottom: "3%"}}>
                  <label style={{ width:"22%" }}>Enter Your Message</label>
                  <input style={{ height:"20vh" }} type="text" class="form-control input-lg" />
              </div>
              <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </Col>
    </Row>
  )
}

export default Contact
