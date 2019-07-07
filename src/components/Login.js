import React from 'react';
import logo from "../img/logo-white.png";
import AboutSection from './AboutSection';
import FeatureSection from './FeaturesSection';

import {
    Link
} from 'react-router-dom';

class Login extends React.Component {
    state = {
        name: "",
        password: ""
    }

    onClick(event) {}

    onNameChange(e) {
        let state = {
            name: e.target.value,
            password: this.state.password
        }
        this.setState(state);
    }

    onPasswordChange(e) {
        let state = {
            name: this.state.name,
            password: e.target.value
        }
        this.setState(state);
    }

    render() {
        return (
            <div className="home-page">
              <div className="home-page-header">
                  <div className="logo-box">
                    <img src={logo} alt="logo" className="logo"/>
                  </div>
                  <div className="text-box">
                    <h1 className="heading-primary">
                      <span className="heading-primary-main"> Bhaduli </span>
                      <span className="heading-primary-sub"> Some awesome text</span>
                    </h1>

                    <form className="ui form login-form">
                      <input type="text" name="email" placeholder="email"/>
                      <input type="text" name="password" placeholder="password"/>
                    </form>
                    <div className="btn-landing">
                      <Link onClick={() => this.onClick()} className=" btn btn-white">Login</Link>
                      <br/>
                      <Link className=" btn btn-white">Register</Link>
                    </div>
                  </div>
                </div>
              <AboutSection/>
              <FeatureSection/>
            </div>
               )
    }
}

export default Login;
