import React from 'react'
import Card from 'react-bootstrap/Card';
import StarsIcon from '@mui/icons-material/Stars';

function Gymcard(props) {
    const {gymData} = props;
  return (
        <Card style={{ width: '100%', height:'60vh', border: 'none', margin:'1%' }}>
        <Card.Img style={{height: '42vh', filter: "grayscale(100%)"}} variant="top" src={ gymData.image } />
        <Card.Body>
            <h5>{gymData.name}</h5>
            <b className='star'>
              <StarsIcon />
              {gymData.rating}
            </b>
            <p>{gymData.price}</p>
        </Card.Body>
        </Card>
  )
}

export default Gymcard