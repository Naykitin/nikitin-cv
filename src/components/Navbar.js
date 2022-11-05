import React, {useState} from 'react'

function Navbar() {

   const [burger, setBurger] = useState(false);



  return (
   <nav className="app__nav">
      <ul className={`${burger ? 'active' : ''}`}>
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#work">Work</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      <span className={`brg ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}></span>
   </nav>
  )
}

export default Navbar