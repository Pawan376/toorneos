import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
import Aboutus from './components/pages/AboutUs/Aboutus';
import Contact from './components/pages/Contact/Contact';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import DashboardPage from './components/pages/DashboardPage';
import HostTournament from './components/pages/HostTournament/HostTournament';
import MasterForm from './components/pages/HostTournament/HostTournamentMultiForm/MasterForm';

 
const initialState={
                  input : '',
                  path:'home',
                  isSignedIn: false,
                  user: 
                      {
                        name: '',
                        address: ''
                      }
                }

class App extends Component{
   constructor(){
      super();
      this.state=initialState;       
        }

      loadUser= (data)=>{
          this.setState(
          {
              user: 
                  {
                  name: data.name,
                  address: data.address
                  }        
          }
        )
      }
onInputChange =(event)=>{
    this.setState({input: event.target.value});
  }

  onRouteChange =(path)=>{
    if(path==='home'){
      this.setState(initialState)
    } else if(path==='dashboard'){
      this.setState({isSignedIn: true})
    }
    this.setState({path: path});
  }

  render(){ 
     const { isSignedIn}=this.state;
    return (
          <div>
           <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
                <Switch>
                      <Route exact path="/"  render={(props) => <Home {...props} isSignedIn={isSignedIn} />}/>
                      <Route path="/login" render={(props) => <Login {...props} onRouteChange={this.onRouteChange} />}/>
                      <Route path="/signup"  render={(props) => <Signup {...props} onRouteChange={this.onRouteChange} />}/>
                      <Route path="/aboutus" component={Aboutus}/>
                      <Route path="/contact" component={Contact}/>
                      <Route path="/dashboard" component={DashboardPage}/>
                      <Route path="/hostTournament" render={(props) => <HostTournament {...props} loadUser={this.loadUser}  />}/>
                      <Route path="/masterForm"  render={(props) => <MasterForm {...props} name={this.state.user.name} address={this.state.user.address} />}/>

                      <Route component={NotFoundPage}/>
                </Switch>
           <Footer isSignedIn={isSignedIn} />    
          </div>
    );
  }
}
export default App;