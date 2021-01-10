import React from 'react';
import {createId} from '../actions';
import {connect} from 'react-redux';

class Register extends React.Component {

    onClickSubmit = () => {
        this.props.createId("", "", "");
    };

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Email"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="Password" placeholder="Password"/>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input type="text" name="Confirm Password" placeholder="Confirm password"/>
                </div>
                <div className="ui button" type="submit" onClick={() => this.onClickSubmit()}>Submit</div>
            </form>
        )
    }
}

export default connect(null, {createId})(Register);
