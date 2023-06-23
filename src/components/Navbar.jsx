import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    const {dark, setDark} = props;

  return (
    <nav className='navbar'>
      <Link to="/"><h3>Home</h3></Link>
      
      <button 
        onClick={() => setDark(!dark)}
      >dark mode</button>
    </nav>
  )
}

export default Navbar