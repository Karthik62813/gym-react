import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import StarsIcon from '@mui/icons-material/Stars';
import ColorInversionNavigation from './Header';
import { productsData } from '../Data/ProductList';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

function Sportinfo() {
      
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);
  }, []);
  
  const [itemInfo, setItemInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getInfo();
  }, [id]); 

  const getInfo = () => {
    const product = productsData[id];
    if (product) {
      setItemInfo(product);
    } else {
      console.error('Product not found');
    }
  };

  return (
    <Row>
      <Col sm={3}>
        <ColorInversionNavigation />
      </Col>
      <Col sm={9}>
        <Link to='/toSports'><ArrowBackIcon className='previous' style={{margin: '2% 0 0 11%'}}/></Link>
        <div className='body info-body'>
          {itemInfo ? (
            <Card style={{ width: '80%', height: '150vh', border: 'none', margin: '1%' }}>
              <Card.Img
                style={{ height: '80vh', filter: 'grayscale(100%)' }}
                variant='top'
                src={itemInfo.image}
              />
              <Card.Body>
                <h2>{itemInfo.name}</h2>
                <b className='star'>
                  <StarsIcon />
                  {itemInfo.rating}
                </b>
                <p>{itemInfo.price}</p>
                <p>{itemInfo.description}</p>
              </Card.Body>
            </Card>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default Sportinfo
