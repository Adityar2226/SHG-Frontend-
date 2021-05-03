import React from 'react';
import {LoginId} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CreateLogin extends React.Component {
 constructor (props) {
 super(props);
 this.state={
     Email:'',
     Password :''
    };
    this.onEmailChange=this.onEmailChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);

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
        });}


 onClickSubmit = () => {
       this.props.LoginId(this.state);
    };

    render() {
        return (
            <form className="ui form">
            <div className="ui container grid">
                            <div className="ui row">
                            <div className="column four wide">
            <h1> Login Here</h1>

                <div className="field">
                    <label>Email</label>
                    <input type="text" autoComplete="off" name="Email" placeholder="Email"  onChange={this.onEmailChange} />

                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" autoComplete="off" name="Password" placeholder="Password"  onChange={this.onPasswordChange}/>
                </div>


                <div>  <Link to="/dashboard"className="ui button" type="submit" onClick={() =>this.onClickSubmit()}>Submit</Link></div>
                 </div>
                      </div>
                         </div>
            </form>
        )
    }
}
const mapStateToProps =(loginDetails)=>{

return loginDetails;}

export default connect(mapStateToProps,{LoginId})(CreateLogin);
