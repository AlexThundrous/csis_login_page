import React, { Component } from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      signinEmail: '',
      signinPassword: '',
      signInFailed: false,
    };
  }

  onEmailChange(event) {
    this.setState({ signinEmail: event.target.value, signInFailed: false });
  }

  onPasswordChange(event) {
    this.setState({ signinPassword: event.target.value, signInFailed: false });
  }

  onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch('https://pure-tundra-05251-98cfe92c5280.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.signinEmail,
        password: this.state.signinPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          this.props.loadUser(data);
          this.props.onRouteChange('home');
        } else {
          // Sign-in failed
          this.setState({ signInFailed: true });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        this.setState({ signInFailed: true });
      });
  }

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { onRouteChange } = this.props;
    const { showPassword, signinEmail, signinPassword, signInFailed } = this.state;
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    const isFormValid = signinEmail.trim() !== '' && signinPassword.trim().length >= 3;

    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={this.onSubmitSignIn}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={this.onEmailChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
              </div>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={this.onPasswordChange}
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white focus:outline-none"
                  onClick={this.toggleShowPassword}
                >
                  {/* Show/hide password button */}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                  isFormValid
                    ? 'hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'cursor-not-allowed opacity-50'
                }`}
                onClick={this.onSubmitSignIn}
                disabled={!isFormValid}
              >
                Sign in
              </button>
            </div>

            {signInFailed && (
              <div className="text-red-500 text-center">Sign-In Failed. Please check your credentials.</div>
            )}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={() => onRouteChange('register')}
            >
              Register
            </a>
          </p>
          <p className="mt-10 text-center text-sm text-gray-500">
            Admin portal{' '}
            <a
              href="/csis_login_page/#/admin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Here
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signin;

