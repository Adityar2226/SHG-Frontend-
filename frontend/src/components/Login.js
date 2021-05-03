  import React from 'react';
import AboutSection from './AboutSection';
import FeatureSection from './FeaturesSection';
import history from './history/History';

import {Link} from 'react-router-dom';

class Login extends React.Component {
    state = {
        name: "",
        password: ""
    }

    onClick = () => {
        history.push("/dashboard");
    }



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
                  <div className="text-box">
                    <h1 className="heading-primary">
                      <span className="heading-primary-main"> SHGProducts </span>
                      <span className="heading-primary-sub"> Original is here! </span>
                    </h1>

                    <form className="ui form login-form">
                      <input type="text" name="email" placeholder="Email"/>
                      <input type="text" name="password" placeholder="Password"/>
                    </form>
                    <div className="btn-landing">
                      <Link to="/createLogin" className=" btn btn-white">Login</Link>
                      <br/>
                      <Link to="/register" className=" btn btn-white">Register</Link>
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
