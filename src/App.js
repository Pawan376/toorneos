import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
        	<Route exact path='/' component={Home}/>
        	<Route path='/login' component={Login}/>
        	<Route path='/signup' component={Signup}/>
          <Route path='/aboutus' component={Aboutus}/>
          <Route path='/contact' component={Contact}/>
        	<Route component={NotFoundPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
