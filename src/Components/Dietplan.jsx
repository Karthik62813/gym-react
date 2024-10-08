import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Dietcard from './Dietcard';
import ColorInversionNavigation from './Header'
import { weightLoss } from '../Data/diet'
import { muscleGain } from '../Data/diet'
import { veganVegetarian } from '../Data/diet'
import { diabetesManagement } from '../Data/diet'
import { generalWellness } from '../Data/diet'
import { heartHealth } from '../Data/diet'
import { useEffect } from 'react';

function Dietplan() {
  
    useEffect(() => {
      // Scroll to the top of the page when the component loads
      window.scrollTo(0, 0);
    }, []);
    
    const dietsample1 = weightLoss;
    const dietsample2 = muscleGain;
    const dietsample3 = veganVegetarian;
    const dietsample4 = diabetesManagement;
    const dietsample5 = generalWellness;
    const dietsample6 = heartHealth;
  return (
    <Row>
        <Col sm={3}>
            <ColorInversionNavigation/>
        </Col>
        <Col sm={9}>
            <div className='body dietplan-body'>
                <h2 className='heading'>Sample Diet Plans</h2>
                <h4>Weight Loss</h4>
                <div className='cards dietplan-div'>
                    {dietsample1.map((diet)=>(<Dietcard dietData={diet}  key={diet.id} />))}
                </div>

                <h4>Muscle Gain</h4>
                <div className='cards dietplan-div'>
                    {dietsample2.map((diet)=>(<Dietcard dietData={diet}  key={diet.id} />))}
                </div>

                <h4>Vegan/Vegetarian</h4>
                <div className='cards dietplan-div'>
                    {dietsample3.map((diet)=>(<Dietcard dietData={diet}  key={diet.id} />))}
                </div>

                <h4>Diabetes Management</h4>
                <div className='cards dietplan-div'>
                    {dietsample4.map((diet)=>(<Dietcard dietData={diet}  key={diet.id} />))}
                </div>

                <h4>General Wellness</h4>
                <div className='cards dietplan-div'>
                    {dietsample5.map((diet)=>(<Dietcard dietData={diet}  key={diet.id} />))}
                </div>

                <h4>Heart Health</h4>
                <div className='cards dietplan-div'>
                    {dietsample6.map((diet)=>(<Dietcard dietData={diet}  key={diet.id} />))}
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default Dietplan