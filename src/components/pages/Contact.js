import React,{ Component} from 'react';
import './Contact.css';
class Contact extends Component {
  render() {
    return (
      <div>
      <section id="contact" className="mx-auto px-1 px-md-5 px-lg-1 px-xl-5 py-5">
       <div className="container">
           <h3 className="text-center text-uppercase">contact us</h3>
           <p className="text-center w-75 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum purus at sem ornare sodales. Morbi leo nulla, pharetra vel felis nec, ullamcorper condimentum quam.</p>
           <div className="row">
             <div className="col-sm-12 col-md-6 col-lg-3 my-5">
               <div className="card border-0">
                  <div className="card-body text-center">
                    <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                    <h4 className="text-uppercase mb-5">call us</h4>
                    <p>+8801683615582,+8801750603409</p>
                  </div>
                </div>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-3 my-5">
               <div className="card border-0">
                  <div className="card-body text-center">
                    <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 className="text-uppercase mb-5">office loaction</h4>
                   <address>Suite 02, Level 12, Sahera Tropical Center </address>
                  </div>
                </div>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-3 my-5">
               <div className="card border-0">
                  <div className="card-body text-center">
                    <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 className="text-uppercase mb-5">office loaction</h4>
                    <address>Suite 02, Level 12, Sahera Tropical Center </address>
                  </div>
                </div>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-3 my-5">
               <div className="card border-0">
                  <div className="card-body text-center">
                    <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                    <h4 className="text-uppercase mb-5">email</h4>
                    <p>http://al.a.noman1416@gmail.com</p>
                  </div>
                </div>
             </div>
           </div>
       </div>
    </section>
    <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{"width":" 100%", "height": "150px"}}></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
    </div>
    )
  }
}
export default Contact;