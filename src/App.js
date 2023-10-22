import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import Signin from './components/signin/signin.js'
import Register from './components/Register/register.js'
import Home from './components/Home/home.js'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      user: {
        id: '',
        first_name: '',
        email: '',
        last_name: '',
        phone: ''
      }
    };
  }  

  onRouteChange = (Route) => {
    this.setState({ route: Route });
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        first_name: data.first_name,
        address: data.address,
        last_name: data.last_name,
        phone: data.phone_number
      }
    })
  }

  render() {
    return (
      <div className="flex flex-col app-container">
        {this.state.route === 'signin' || this.state.route === 'register' ? (this.state.route === 'signin' ?
          ( 
          <div className="app-container"> 
          <ParticlesBg type="cobweb" bg={false} color="#7C3AED" /> 
          <div className="signin-container">
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          </div>
          </div>) : (<div className='app-container'><ParticlesBg type="cobweb" bg={false} color="#7C3AED" /> <div className="signin-container"> <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} /> </div> </div>)
        ) : (
          <div>
           <Home id = {this.state.user.id} firstName = {this.state.user.first_name} lastName = {this.state.user.last_name} address = {this.state.user.address} phoneNumber = {this.state.user.phone} loadUser={this.loadUser}/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
