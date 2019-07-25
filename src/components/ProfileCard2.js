import React from 'react';
import {Link} from 'react-router-dom';

import '../style/profileCard.css';


class ProfileCard2 extends React.Component {
    state = {}

    handleShow = () => {
        this.setState({active: true}) }

    handleHide = () => {
        this.setState({active: false}) }

    render() {
        return (
            <div className="ui card profile-card">
              <div className="profile-card-side profile-card-side-front">
                <div className="profile-card-image-1">
                </div>
                <span className="profile-card-heading">Priesha Negi</span>
                <div className="profile-card-content">
                <ul>
                  <li> Priesha Negi</li>
                  <li> Dehradun</li>
                  <li> Engineer</li>
                  <li> 5'5</li>
                </ul>
                </div>
              </div>
              <div className="profile-card-side profile-card-side-back">
                <div className="profile-buttons">
                  <Link className="profile-button">View Profile</Link>
                  <Link  className="profile-button">Send a message</Link>
                </div>
              </div>
            </div>
        )}

}

export default ProfileCard2;
