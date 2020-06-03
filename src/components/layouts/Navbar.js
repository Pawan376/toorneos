import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
		  <Link className="navbar-brand ml-4" to="#">
		  	<img src={logo} alt='logo' style={{}}/>
		  </Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span>
		    	<i className="fas fa-bars" style={{'color':'#fff'}}></i>
		    </span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <Link className="nav-link text-white text-uppercase ml-4" to="/">Home&nbsp;<i className="fas fa-home"></i> <span className="sr-only">(current)</span></Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link text-white text-uppercase ml-4" to="/aboutus">About us</Link>
		      </li>
		       <li className="nav-item">
		        <Link className="nav-link text-white text-uppercase ml-4" to="/services">Services</Link>
		      </li>
		      <li className="nav-item dropdown">
		        <Link className="nav-link dropdown-toggle text-white text-uppercase ml-4" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          Dropdown
		        </Link>
		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
		          <Link className="dropdown-item" to="#">Action</Link>
		          <Link className="dropdown-item" to="#">Another action</Link>
		          <div className="dropdown-divider"></div>
		          <Link className="dropdown-item" to="#">Something else here</Link>
		        </div>
		       </li>
		       <li className="nav-item">
		        <Link className="nav-link text-white text-uppercase ml-4" to="/contact">Contact</Link>
		      </li>
		    </ul>
		    <ul className="navbar-nav ml-auto">
		     <li className="nav-item ">
			   <Link className="nav-link text-white text-uppercase ml-4" to="/login">Login&nbsp;<i className="fas fa-sign-in-alt"></i></Link>
	  	   	 </li>
		  	 <li className="nav-item">
		  	   <Link className="nav-link text-white text-uppercase ml-4" to="/signup">Signup&nbsp;<i className="fas fa-user-plus"></i></Link>
			 </li>
		    </ul>
		  </div>
		</nav>
	)
}

export default Navbar;