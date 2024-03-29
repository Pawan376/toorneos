import React,{ Component} from 'react';
import './Aboutus.css';

class Aboutus extends Component {
  render() {
    return (
      <div>
          <div className="bg-light">
            <div className="container py-5">
              <div className="row h-100 align-items-center py-5">
                <div className="col-lg-6">
                  <h1 className="display-4">About Toorneos</h1>
                  <p className="lead text-muted mb-3 ml-2">Welcome to [SHOP NAME]!</p>
                  <p className="lead text-muted mb-3 ml-2">Starting as a small business in [NAME OF CITY/COUNTRY/YEAR OF ORIGIN], we have big dreams. Our passion for [PRODUCTS CATEGORY NAME], means that we provide our customers with nothing but the highest quality of products, that are guaranteed to meet their needs and keep them satisfied!</p>
                  <p className="lead text-muted mb-3 ml-2">With a motivated team, we strive to be the creative minds that bring a smile to your face. That’s why we’re always looking for innovative new ways to get the best to you.</p>
                </div>
                <div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-5">
            <div className="container py-5">
              <div className="row align-items-center mb-5">
                <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                  <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                  <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="/" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                </div>
                <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/>
                </div>
                <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                  <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                  <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="/" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light py-5">
            <div className="container py-5">
              <div className="row mb-4">
                <div className="col-lg-5">
                  <h2 className="display-4 font-weight-light">Our team</h2>
                  <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>

              <div className="row text-center">
               
                <div className="col-xl-3 col-sm-6 mb-5">
                  <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                    <ul className="social mb-0 list-inline mt-3">
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
               
                <div className="col-xl-3 col-sm-6 mb-5">
                  <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                    <ul className="social mb-0 list-inline mt-3">
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
               
                <div className="col-xl-3 col-sm-6 mb-5">
                  <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                    <ul className="social mb-0 list-inline mt-3">
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
               
                <div className="col-xl-3 col-sm-6 mb-5">
                  <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                    <ul className="social mb-0 list-inline mt-3">
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
               

              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Aboutus;