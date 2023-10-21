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
      user: {
        id: '',
        first_name: '',
        email: '',
        last_name: '',
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
        phone: data.phone
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
           
          </div>
        )}
      </div>
    );
  }
}

export default App;
