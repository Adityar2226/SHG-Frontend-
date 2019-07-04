import React from 'react';
import {Link} from 'react-router-dom';


class Login extends React.Component {
    state = {name: "", password: ""}

    onClick(event) {
        console.log("here I am, this is me");
    }

    onNameChange(e) {
        let state = {name: e.target.value, password: this.state.password}
        this.setState(state);
    }


    onPasswordChange(e) {
        let state = {name: this.state.name, password: e.target.value}
        this.setState(state);
    }

    render() {
        return <div  className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui teal image header">
                    <div className="content">
                        Log-in to your account
                    </div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input value={this.state.name} onChange={(e)=> {this.onNameChange(e)}} type="text" name="email" placeholder="E-mail address"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password"  value={this.state.password} onChange={(e)=> {this.onPasswordChange(e)}} name="password" placeholder="Password"/>
                            </div>
                        </div>
                        <Link to="/dashboard" className="ui fluid large teal submit button">Login</Link>
                    </div>

                    <div className="ui error message"></div>

                </form>

                <div className="ui message">
                    New to us? <a href="#">Sign Up</a>
                </div>
            </div>
        </div>
    }
}


export default Login;
