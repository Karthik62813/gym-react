import React from 'react'
import Card from 'react-bootstrap/Card';

function Dietcard(props) {
    const {dietData} = props;
  return (
        <Card className='dietcard-body' style={{ width: '45%', height:'50vh', border: 'none', margin:'1.5%', color: 'whitesmoke'}}>
        <Card.Body style={{ borderRadius: '5px'}}>
            <h5>{dietData.name}</h5>
            <ul>
                <li><span>Breakfast :</span> {dietData.breakfast}</li>
                <li><span>Lunch :</span> {dietData.lunch}</li>
                <li><span>Snacks :</span> {dietData.snacks}</li>
                <li><span>Dinner :</span> {dietData.dinner}</li>
            </ul>
        </Card.Body>
        </Card>
  )
}

export default Dietcard