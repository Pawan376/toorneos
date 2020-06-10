import React,{ Component} from 'react';
import routes from "../../../routes";
import { Link } from 'react-router-dom';

class Signup extends Component {

	constructor(props){
		super(props);
		this.state={
		} 
	}
	handleClick = () => {
	    console.log("token", "I am now Signed in");
	    this.props.onRouteChange('dashboard');
	    this.props.history.push(routes.dashboard);
	  };
	render() {
		return (
			<div className="px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto bg">
				<div className="card2 card border-0 px-4 py-5 bg-light">
                    <div className="row mb-4 px-3">
	                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
		                <div className="facebook text-center mr-3">
				            <div className="fa fa-facebook"></div>
				        </div>
				    </div>
				    <div className="row px-3 mb-4">
				        <div className="line"></div> 
				        	<small className="or text-center">Or</small>
				            <div className="line"></div>
				    </div>
				    <div className="row px-3"> 
				    	<label className="mb-1">
				        	<h6 className="mb-0 text-sm">First Name</h6>
			            </label> 
			            <input className="mb-4" type="text" name="name" placeholder="Enter your first name"/>
			        </div>
				    <div className="row px-3"> 
				    	<label className="mb-1">
				            <h6 className="mb-0 text-sm">Last Name</h6>
				        </label> 
				        <input className="mb-4" type="text" name="name" placeholder="Enter your last name"/> 
				    </div>
				    <div className="row px-3"> 
				        <label className="mb-1">
				            <h6 className="mb-0 text-sm">Email Address</h6>
				        </label> 
				        <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> 
				    </div>
				    <div className="row px-3"> 
				    	<label className="mb-1">
				            <h6 className="mb-0 text-sm">Password</h6>
				        </label> 
				        <input type="password" name="password" placeholder="Create password"/> 
				    </div>
				    <div className="row px-3 mb-4">
				        <div className="custom-control custom-checkbox custom-control-inline"> 
				        	<input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> 
				        	<label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> 
				        </div>
				    </div>
				    <div className="row mb-3 px-3"> 
				    	<button 
				    		type="submit" 
				    		className="btn btn-blue text-center"
				    		onClick={this.handleClick}
				    	>
				    		Sign Up
				    	</button> 
				    </div>
				    <div className="row mb-4 px-3"> 
				    	<small className="font-weight-bold">
				    		Already have an account? <Link to="/login" className="text-danger ">Login</Link>
				    	</small> 
				    </div>
				</div>
			</div>
		);
	}
}
export default Signup;