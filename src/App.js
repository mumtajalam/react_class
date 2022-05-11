import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Test from './Test';
import Home from './Home';
import Cricket from './Cricket';
import Bollywood from './Bollywood';

function App() {
  return (
    
    <div className='container'>
        <BrowserRouter>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h2>Newton School</h2>
                </div>
              </div>
                <div className='row'>
                  <div className='col-12 text-center'>
                    <Link to='/test'>Test</Link>
                    <Link to='/home'>Home</Link>
                    <Link to='/cricket'>Cricket</Link>
                    <Link to='/bollywood'>Bollywood</Link>
                  </div>
                </div>
                <div className='row'>
                <div className='col-2 text-center'>left</div>
                  <div className='col-8 text-center'>
                    <Routes>
                      <Route path = '/test' element={<Test/>}/>
                      <Route path = '/home' element={<Home/>}/>
                      <Route path = '/cricket' element={<Cricket/>}/>
                      <Route path = '/bollywood' element={<Bollywood/>}/>
                    </Routes>
                  </div>
                  <div className='col-2 text-center'>right</div>
                </div>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
