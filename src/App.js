
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
import Services from './Components/Services';
import Contact from './Components/Contact';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
