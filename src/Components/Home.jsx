import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import ColorInversionNavigation from './Header'
import { PieChart } from '@mui/x-charts/PieChart';
import Card from 'react-bootstrap/Card';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import BiaxialLineChart from '../utils/linegraph';
import CustomLabels from '../utils/bargraph'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home() {
  return (
    <Row className='home'>
      <Col sm={3}>
        <ColorInversionNavigation />
      </Col>
      <Col sm={9} className='home-body'>
        <div className='dash-textimonials'>
          <Card className='home-card' style={{width:'30%', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding:'0%', backgroundColor: 'black' }}>
            <Card.Body>
              <b>Sales</b>
              <h5>$230,430</h5>
              <p><b style={{color:'green'}}>+55%</b> since last month</p>
            </Card.Body>
          </Card>

          <Card style={{width:'30%', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding:'0%', backgroundColor: 'black'  }}>
            <Card.Body>
              <b>Customers</b>
              <h5>3.200</h5>
              <p><b style={{color:'green'}}>+12%</b> since last month</p>
            </Card.Body>
          </Card>

          <Card style={{width:'30%', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding:'0%', backgroundColor: 'black'  }}>
            <Card.Body>
              <b>Avg. revenue</b>
              <h5>$1.200</h5>
              <p><b style={{color:'green'}}>+$213</b> since last month</p>
            </Card.Body>
          </Card>
        </div>
        
        <div className='pie-line'>
          <Card style={{width:'34%', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin:'5px, 5px, 5px, 5px', padding:'0%', backgroundColor: '#121212'}}>
            <Card.Body className='pie-card'>
              <b>Channels</b>
              <ErrorOutlineIcon className='icon'/>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'series A' },
                      { id: 1, value: 15, label: 'series B' },
                      { id: 2, value: 20, label: 'series C' },
                    ],
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
                ]}
                height={200}
                marginTop={10}
              />
              <div className='content'>
                <p style={{width:'65%', marginTop:'8%'}}>More than 1,200,000 sales are made using referral marketing, and 700,000 are from social media.</p>
                <button>READ MORE</button>
              </div>
              
            </Card.Body>
          </Card>

          <Card style={{width:'68%', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginLeft:'2%', padding:'0%' }}>
          <Card.Body>
            <b>Revenue</b>
            <ErrorOutlineIcon className='icon'/>
            <BiaxialLineChart/>
          </Card.Body>
          </Card>
        </div>

        <div className='bar-data'>
          <Card style={{width:'60%', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginRight:'2%', padding:'0%' }}>
          <Card.Body>
            <b>Sales by age</b>
            <CustomLabels/>
          </Card.Body>
          </Card>

          <Card style={{width:'40%', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin:'5px, 5px, 5px, 5px', padding:'0%' }}>
            <Card.Body >
              <b>Sales By Country</b>
              <table style={{width:'100%'}} className='table-row'>
                <tr>
                  <td><img src="https://flagpedia.net/data/flags/icon/16x12/us.webp" alt="" style={{width:'25px'}}/></td>
                  <td>
                    <small>Country:</small><br />
                    United State
                  </td>
                  <td>
                    <small>Sales:</small><br />
                    2500
                  </td>
                  <td>
                    <small>bounce:</small><br />
                    29.9%
                  </td>
                </tr>
                <tr>
                  <td><img src="https://flagpedia.net/data/flags/icon/16x12/no.webp" alt="" style={{width:'25px'}}/></td>
                  <td>
                    <small>Country:</small><br />
                    Norway
                  </td>
                  <td>
                    <small>Sales:</small><br />
                    2500
                  </td>
                  <td>
                    <small>bounce:</small><br />
                    29.9%
                  </td>
                </tr>
                <tr>
                  <td><img src="https://flagpedia.net/data/flags/icon/16x12/zw.webp" alt="" style={{width:'25px'}}/></td>
                  <td>
                    <small>Country:</small><br />
                    Zimbabwe
                  </td>
                  <td>
                    <small>Sales:</small><br />
                    2500
                  </td>
                  <td>
                    <small>bounce:</small><br />
                    29.9%
                  </td>
                </tr>
                <tr>
                  <td><img src="https://flagpedia.net/data/flags/icon/16x12/ca.webp" alt="" style={{width:'25px'}}/></td>
                  <td>
                    <small>Country:</small><br />
                    Canada
                  </td>
                  <td>
                    <small>Sales:</small><br />
                    2500
                  </td>
                  <td>
                    <small>bounce:</small><br />
                    29.9%
                  </td>
                </tr>
                <tr>
                  <td><img src="https://flagpedia.net/data/flags/icon/16x12/in.webp" alt="" style={{width:'25px'}}/></td>
                  <td>
                    <small>Country:</small><br />
                    India
                  </td>
                  <td>
                    <small>Sales:</small><br />
                    2500
                  </td>
                  <td>
                    <small>bounce:</small><br />
                    29.9%
                  </td>
                </tr>
              </table>
            </Card.Body>
          </Card>
        </div>

        <div className='top-sales'>
          <Card style={{width:'100%', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginRight:'2%', padding:'0%' }}>
            <Card.Body>
              <b>Top Selling Products</b><br />
              <table>
                <tr className='top-sales-heads'>
                  <td style={{width:'55%'}}><b>PRODUCT</b></td>
                  <td style={{width:'15%'}}><b>VALUES</b></td>
                  <td style={{width:'15%'}}><b>ADS SPENT</b></td>
                  <td style={{width:'15%'}}><b>REFUNDS</b></td>
                </tr>
                <tr>
                  <td style={{display:'flex'}}>
                    <img src="https://img.freepik.com/free-photo/gym-composition-with-sport-elements_23-2147915643.jpg?t=st=1725518131~exp=1725521731~hmac=bc68fdeaecfe61776e69cd976478c617ffcffe2ef7e40ec9ab2db7aa2c1a4b08&w=740" alt="" />
                    <div>
                    <b>Nike v22 Running</b><br />
                    <p><span style={{color:'green'}}>8.232</span> orders</p>
                    </div>
                  </td>
                  <td><p>$130.992</p></td>
                  <td><p>$9.500</p></td>
                  <td><p>13<KeyboardArrowUpIcon className='uparrow'/></p></td>
                </tr>
                <tr>
                  <td style={{display:'flex'}}>
                    <img src="https://img.freepik.com/free-photo/gym-composition-with-sport-elements_23-2147915643.jpg?t=st=1725518131~exp=1725521731~hmac=bc68fdeaecfe61776e69cd976478c617ffcffe2ef7e40ec9ab2db7aa2c1a4b08&w=740" alt="" />
                    <div>
                    <b>Business Kit (Mug + Notebook)</b><br />
                    <p><span style={{color:'green'}}>12.821</span> orders</p>
                    </div>
                  </td>
                  <td><p>$130.992</p></td>
                  <td><p>$9.500</p></td>
                  <td><p>13<KeyboardArrowDownIcon className='downarrow'/></p></td>
                </tr>
                <tr>
                  <td style={{display:'flex'}}>
                    <img src="https://img.freepik.com/free-photo/gym-composition-with-sport-elements_23-2147915643.jpg?t=st=1725518131~exp=1725521731~hmac=bc68fdeaecfe61776e69cd976478c617ffcffe2ef7e40ec9ab2db7aa2c1a4b08&w=740" alt="" />
                    <div>
                    <b>Black Chair</b><br />
                    <p><span style={{color:'green'}}>8.232</span> orders</p>
                    </div>
                  </td>
                  <td><p>$130.992</p></td>
                  <td><p>$9.500</p></td>
                  <td><p>13<KeyboardArrowUpIcon className='uparrow'/></p></td>
                </tr>
                <tr>
                  <td style={{display:'flex'}}>
                    <img src="https://img.freepik.com/free-photo/gym-composition-with-sport-elements_23-2147915643.jpg?t=st=1725518131~exp=1725521731~hmac=bc68fdeaecfe61776e69cd976478c617ffcffe2ef7e40ec9ab2db7aa2c1a4b08&w=740" alt="" />
                    <div>
                    <b>Nike v22 Running</b><br />
                    <p><span style={{color:'green'}}>8.232</span> orders</p>
                    </div>
                  </td>
                  <td><p>$130.992</p></td>
                  <td><p>$9.500</p></td>
                  <td><p>13<KeyboardArrowDownIcon className='downarrow'/></p></td>
                </tr>
                <tr>
                  <td style={{display:'flex'}}>
                    <img src="https://img.freepik.com/free-photo/gym-composition-with-sport-elements_23-2147915643.jpg?t=st=1725518131~exp=1725521731~hmac=bc68fdeaecfe61776e69cd976478c617ffcffe2ef7e40ec9ab2db7aa2c1a4b08&w=740" alt="" />
                    <div>
                    <b>Nike v22 Running</b><br />
                    <p><span style={{color:'green'}}>8.232</span> orders</p>
                    </div>
                  </td>
                  <td><p>$130.992</p></td>
                  <td><p>$9.500</p></td>
                  <td><p>13<KeyboardArrowUpIcon className='uparrow'/></p></td>
                </tr>
              </table>
            </Card.Body>
          </Card>
        </div>

        
        
      </Col>
    </Row>
  )
}

export default Home
