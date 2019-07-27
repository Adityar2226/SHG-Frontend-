import React from 'react';
import {Link} from 'react-router-dom';

import '../style/profileCard.css';


class ProfileCard3 extends React.Component {
    state = {}

    handleShow = () => {
        this.setState({active: true}) }

    handleHide = () => {
        this.setState({active: false}) }

    render() {
        return (
            <div class="ui middle aligned divided list">
              <div class="item">
                <div class="right floated content">
                  <div class="ui button">Add</div>
                </div>
                <img class="ui avatar image" src="/images/avatar2/small/lena.png"/>
                <div class="content">
                  Lena
                </div>
              </div>
              <div class="item">
                <div class="right floated content">
                  <div class="ui button">Add</div>
                </div>
                <img class="ui avatar image" src="/images/avatar2/small/lindsay.png"/>
                <div class="content">
                  Lindsay
                </div>
              </div>
              <div class="item">
                <div class="right floated content">
                  <div class="ui button">Add</div>
                </div>
                <img class="ui avatar image" src="/images/avatar2/small/mark.png"/>
                <div class="content">
                  Mark
                </div>
              </div>
              <div class="item">
                <div class="right floated content">
                  <div class="ui button">Add</div>
                </div>
                <img class="ui avatar image" src="/images/avatar2/small/molly.png"/>
                <div class="content">
                  Molly
                </div>
              </div>
            </div>        )}

}

export default ProfileCard3;
