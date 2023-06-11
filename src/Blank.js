import React from 'react'
import { useNavigate } from 'react-router-dom';

function Blank() {
  const navigate=useNavigate()
  return (
    <div>
        <h2>404 Error</h2>
        <button onClick={()=>navigate('')}> Home</button>
    </div>
  )
}

export default Blank;