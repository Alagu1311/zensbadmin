import { Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './Button';
import Maincomp from './Maincomp';
import Overall from './Overall';
import Card from './Card';
import Blank from './Blank';

function App() {
  return (
    <div className="App">
    
 <Maincomp/>
  
      <Routes>
        <Route exact path='/Maincomp' element={(<Maincomp/>)}/>
        <Route path='/Overall' element={(<Overall/>)}/>
        <Route  path='/Button' element={(<Button/>)}/>
        <Route path='/Card' element={(<Card/>)}/>
        <Route path='/Blank' element={(<Blank/>)}/>
      </Routes>
   
    
    </div>
  );
}

export default App;
