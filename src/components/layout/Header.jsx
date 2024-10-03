

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const  writer= useNavigate();

  const form = ()  => {
  
    writer('/CreateForm') 
    alert(" vh ")
}
  return (
    <><nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      < img className="navbar-brand mx-5 mt-2" to="#" src="public/img/travel-high-resolution-logo-removebg-preview.png" style={{width:"160px", height:"125px"} }/>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0  justify-content-center">
          <li className="nav-item ">
            <Link className="nav-link active  justify-content-center" aria-current="page" to="/" style={{color:" #10375C"}}>Home</Link>
          </li>
          <li className="nav-item  justify-content-center" >
            <Link className="nav-link" to="/About"  style={{color:" #10375C"}}>About  </Link> 
          </li>    <li className="nav-item  justify-content-center">
            <Link className="nav-link" to="/Contact"  style={{color:" #10375C"}}>Contact</Link>
          </li>
           <li className="nav-item  justify-content-center">
            <Link className="nav-link" to="/View0"  style={{color:" #10375C"}}>Blogs</Link>
          </li>
         
       
        </ul>
        <input placeholder="Search" class="input" name="text" type="text"></input>
        <button className="btn btn-outline-dark justify-content-end">
            <Link className="nav-link  ms-auto hover-login" to="/CreateForm" >Writer... </Link>
          </button>
      </div>
    </div>
  </nav></>
  )
}

export default Header