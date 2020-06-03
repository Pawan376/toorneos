import React from 'react';
import './Footer.css';

const Footer = () => {
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
                                      <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{"visibility": "visible","animationDelay": "0.4s", "animationName": "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Company</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{"visibility": "visible", "animationDelay": "0.6s"," animationName": "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{"visibility": "visible", "animationDelay":" 0.8s", "animationName": "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="#" className="fab fa-facebook"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                    <a href="#" className="fab fa-pinterest"></a>
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

export default Footer;