import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
    render(){
        const {isSignedIn}=this.props;
        if(isSignedIn){
    	return (
    		<div>
    			<footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <hr className="clearfix w-100 d-md-none"/>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{"visibility": "visible","animationDelay": "0.4s", "animationName": "fadeInLeft"}}>
                                    <h3 className="f-title f_600 t_color f_size_18">Company</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="">Company</Link></li>
                                        <li><Link to="">Android App</Link></li>
                                        <li><Link to="">ios App</Link></li>
                                        <li><Link to="">Desktop</Link></li>
                                        <li><Link to="">Projects</Link></li>
                                        <li><Link to="">My tasks</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="clearfix w-100 d-md-none"/>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{"visibility": "visible", "animationDelay": "0.6s"," animationName": "fadeInLeft"}}>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="">FAQ</Link></li>
                                        <li><Link to="">Term &amp; conditions</Link></li>
                                        <li><Link to="">Reporting</Link></li>
                                        <li><Link to="">Documentation</Link></li>
                                        <li><Link to="">Support Policy</Link></li>
                                        <li><Link to="">Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="clearfix w-100 d-md-none"/>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{"visibility": "visible", "animationDelay":" 0.8s", "animationName": "fadeInLeft"}}>
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <Link to="" className="fab fa-facebook"></Link>
                                        <Link to="" className="fab fa-twitter"></Link>
                                        <Link to="" className="fab fa-linkedin"></Link>
                                        <Link to="" className="fab fa-pinterest"></Link>
                                    </div>
                                </div>
                            </div>
                            <hr className="clearfix w-100 d-md-none"/>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">© TOORNES Inc.. 2019 All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    		</div>
    	)
    }
    else{
        return (
            <div>
                <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{"visibility": "visible" ,"animationDelay": "0.2s", "animationName": "fadeInLeft"}}>
                                    <ul className="list-unstyled list-inline text-center py-2">
                                        <li className="list-inline-item">
                                          <h5 className="mb-1">Register for free</h5>
                                        </li>
                                        <li className="list-inline-item">
                                          <Link to="/signup" className="btn btn-danger btn-rounded">Sign up!</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="clearfix w-100 d-md-none"/>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{"visibility": "visible","animationDelay": "0.4s", "animationName": "fadeInLeft"}}>
                                    <h3 className="f-title f_600 t_color f_size_18">Company</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="">Company</Link></li>
                                        <li><Link to="">Android App</Link></li>
                                        <li><Link to="">ios App</Link></li>
                                        <li><Link to="">Desktop</Link></li>
                                        <li><Link to="">Projects</Link></li>
                                        <li><Link to="">My tasks</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="clearfix w-100 d-md-none"/>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{"visibility": "visible", "animationDelay": "0.6s"," animationName": "fadeInLeft"}}>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="">FAQ</Link></li>
                                        <li><Link to="">Term &amp; conditions</Link></li>
                                        <li><Link to="">Reporting</Link></li>
                                        <li><Link to="">Documentation</Link></li>
                                        <li><Link to="">Support Policy</Link></li>
                                        <li><Link to="">Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="clearfix w-100 d-md-none"/>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{"visibility": "visible", "animationDelay":" 0.8s", "animationName": "fadeInLeft"}}>
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <Link to="" className="fab fa-facebook"></Link>
                                        <Link to="" className="fab fa-twitter"></Link>
                                        <Link to="" className="fab fa-linkedin"></Link>
                                        <Link to="" className="fab fa-pinterest"></Link>
                                    </div>
                                </div>
                            </div>
                            <hr className="clearfix w-100 d-md-none"/>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">© TOORNES Inc.. 2019 All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        )
    }
}

}

export default Footer;