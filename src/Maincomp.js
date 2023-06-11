import React from 'react'
import { useNavigate } from 'react-router-dom'


function Maincomp() {
  const navigate=useNavigate();
    
  return (
    <div>
      <nav id='bor5'>
    <h3>Dashboard</h3>
    <div>component</div>
  <button onClick={()=>navigate('/Button')} className='btnflx'>Buttons</button><br></br>
 <button onClick={()=>navigate('/Card')} className='btnflx'>Cards</button><br></br>
 <button onClick={()=>navigate('/Blank')}>Error Content</button>
 
     </nav>
    </div>
  )
}

export default Maincomp;