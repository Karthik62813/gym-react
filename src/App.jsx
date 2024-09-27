
// import { Home } from '@mui/icons-material';
// import { Dashboard } from '@mui/icons-material';
import './App.css';
import { HashRouter as Router , Routes , Route } from 'react-router-dom';
// import UncontrolledExample from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import { Row,Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      {/* <div className='navbar'>
        <img src='https://img.freepik.com/free-vector/black-white-skull-headphones-vector-illustration-vintage-dead-head-professional-gamer_74855-10582.jpg?ga=GA1.1.1106714725.1721128988&semt=ais_hybrid' style={{width:'6%'}}/>
      </div> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
