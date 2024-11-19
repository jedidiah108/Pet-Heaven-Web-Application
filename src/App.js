import NavBar from './components/NavBar';
import './styles.css';
import Dogs from './components/Dogs';
import Cats from './components/Cats';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Adopt from './components/Adopt';

import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
    <Router>
   
      <NavBar />
     
      <div   className='container'>
     
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/funcat' element={ <Cats /> } />
            <Route path='/fundog' element={ <Dogs /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/adopt' element={ <Adopt /> } />
            </Routes>
       
      </div>
      </Router>
    </>

   
  );
}

export default App;