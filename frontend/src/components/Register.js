import React from 'react';
import {createId} from '../actions';
import {connect} from 'react-redux';

class Register extends React.Component {
 constructor (props) {
 super(props);
 this.state={
     Email:'',
     Password :'',
    ConfirmPassword :''};
    this.onEmailChange=this.onEmailChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);
    this.onConfirmPasswordChange=this.onConfirmPasswordChange.bind(this);
}
 onEmailChange =(event) => {
        this.setState  ({
            Email: event.target.value,
            Password:this.state.Password,
            ConfirmPassword:this.state.ConfirmPassword
        });}


    onPasswordChange = (event) => {
        this.setState ({
        Email: this.state.Email,
         Password: event.target.value,
         ConfirmPassword:this.state.ConfirmPassword
        });
       }


    onConfirmPasswordChange =(event) => {
        this.setState ({
        Email:this.state.Email,
        Password:this.state.Password,
            ConfirmPassword:event.target.value}
);
       }

    onClickSubmit = () => {
       this.props.createId(this.state);
    };

    render() {
        return (
            <form className="ui form">
            <div className="ui container grid">
                            <div className="ui row">
                            <div className="column four wide">
            <h1> Register Here</h1>

                <div className="field">
                    <label>Email</label>
                    <input type="text" autoComplete="off" name="Email" placeholder="Email"  onChange={this.onEmailChange} />

                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" autoComplete="off" name="Password" placeholder="Password"  onChange={this.onPasswordChange}/>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input type="text"  autoComplete="off" name="Confirm Password" placeholder="Confirm password"  onChange={this.onConfirmPasswordChange}/>
                </div>

                <div className="ui button" type="submit" onClick={() =>this.onClickSubmit()}>Submit</div>
                 </div>
                                </div>
                                </div>
            </form>
        )
    }
}
const mapStateToProps =(loginDetails)=>{

return loginDetails;}

export default connect(mapStateToProps, {createId})(Register);
