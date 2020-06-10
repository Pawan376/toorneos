import React,{ Component} from 'react';
import Slider from "react-animated-slider";
import routes from "../../../routes";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import { message } from 'antd';

const content = [
  {
    title: "Host Online Tournaments",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Host Now",
    image: "https://images.unsplash.com/flagged/photo-1571771710019-ca58cf80f225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Manage Your Tournaments Online",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://images.unsplash.com/photo-1552435053-01c010307582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1425&q=80",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Also Join Tournaments In Your's Locals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Login now",
    image: "https://images.unsplash.com/photo-1556802907-d0a60bb3573e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
    } 
  }

  handleSubmit = () => {
      if(this.props.isSignedIn){
        this.props.history.push(routes.hostTournament);
      }
      else{
         message.warning("Please login first");
        this.props.history.push(routes.login);
        }
    };

	render() {
		return (
			<div className="mt-3">
			    <Slider className="slider-wrapper" autoplay='3000'>
			      {content.map((item, index) => (
			        <div
			          key={index}
			          className="slider-content "
			          style={{ background: `url('${item.image}') no-repeat center center` }}
			        >
			          <div className="inner">
			            <h1>{item.title}</h1>
			            <p>{item.description}</p>
			            <button onClick={this.handleSubmit}>{item.button}</button>
			          </div>
			        </div>
			      ))}
			    </Slider>
			  </div>
		);
	}
}
export default Home;








