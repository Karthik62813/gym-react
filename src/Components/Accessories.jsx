import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'
import {productsData} from '../Data/ProductList'
import Gymcard from './Gymcard'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Accessories() {
    const gymItem = productsData;
  return (
    <Row>
      <Col sm={3}>
        <ColorInversionNavigation/>
      </Col>
      <Col sm={9}>
        <div className='body'>
            <h2 className='heading'>Gym Accessories</h2>
            <Link to='/toproducts'><ArrowBackIcon className='previous'/></Link>
            <div className='cards'>
                {gymItem.map((gym)=>(<Link style={{textDecoration:'none', width: '30%', margin: '1%'}} key={gym.id} to={'/accinfo/' + gym.id}><Gymcard gymData={gym}/></Link>))}
            </div>
        </div>
      </Col>
    </Row>
  )
}

export default Accessories