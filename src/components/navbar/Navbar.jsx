import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
           <div>
   
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News-Monkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/SCIENCE">Science</Link></li>      
        <li className="nav-item"><Link className="nav-link" to="/HEALTH">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/BUSINESS">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/TECHNOLOGY">Technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/SPORTS">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/ENTERTAINMENT">Entertainment</Link></li>
      </ul>

    </div>
  </div>
</nav>

      </div>
  
  )
}
