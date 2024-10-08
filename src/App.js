
// import { Home } from '@mui/icons-material';
// import { Dashboard } from '@mui/icons-material';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// import UncontrolledExample from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { Row,Col } from 'react-bootstrap';
import Accessories from './Components/Accessories';
import Sports from './Components/Sports';
import Products from './Components/Products';
import Iteminfo from './Components/Iteminfo';
import Sportinfo from './Components/Sportinfo';
import Dietplan from './Components/Dietplan';

function App() {
  return (
    <div className='app'>
      {/* <div className='navbar'>
        <img src='https://img.freepik.com/free-vector/black-white-skull-headphones-vector-illustration-vintage-dead-head-professional-gamer_74855-10582.jpg?ga=GA1.1.1106714725.1721128988&semt=ais_hybrid' style={{width:'6%'}}/>
      </div> */}
      <Router>
        <Routes>
          <Route path='/gym-react' element={<Login />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/toproducts' element={<Products />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/accessories' element={<Accessories />}></Route>
          <Route path='/toAccessories' element={<Accessories />}></Route>
          <Route path='/sports' element={<Sports />}></Route>
          <Route path='/toSports' element={<Sports />}></Route>
          <Route path='/dietplan' element={<Dietplan />}></Route>
          <Route path='/accinfo/:id' element={<Iteminfo />}></Route>
          <Route path='/sportinfo/:id' element={<Sportinfo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
