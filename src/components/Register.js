import React from 'react';
import{createId} from '../actions';
import {connect} from 'react-redux';

class Register extends React.Component {

onClickSubmit= () =>{
console.log("**************************")
console.log(this.props);
//this.props.createId("","","");
console.log("button clicked");}

render() {
console.log(this.props);
        return (

        <form class="ui form">
          <div class="field">
            <label>Email</label>
            <input type="text" name="Email" placeholder="Email"/>
          </div>
          <div class="field">
            <label>Password</label>
            <input type="text" name="Password" placeholder="Password"/>
          </div>
          <div class="field">
          <label>Confirm Password</label>
          <input type="text" name="Confirm Password" placeholder="Confirm password"/>
          </div>

          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden"/>
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit"  onClick={()=> this.onClickSubmit()}>Submit</button>
        </form>
                 )
    }
}

//const mapStateToProps = (state) => {
//    console.log(state);
//    return {login: state};
//}
//const mapPropsToDispatch = {}
//export default connect(null,{ createId })(Register);
export default Register;