import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import Signin from './components/signin/signin.js'
import Register from './components/Register/register.js'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
    };
  }  

  onRouteChange = (Route) => {
    this.setState({ route: Route });
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
           
          </div>
        )}
      </div>
    );
  }
}

export default App;
