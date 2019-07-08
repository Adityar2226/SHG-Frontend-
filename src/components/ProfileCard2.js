import React from 'react';
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
                <div className="profile-card-side profile-card-side-front profile-card-image-1">
                <h2>
                <span className="profile-card-heading">
                Priesha Negi
                </span>
                </h2>

            </div>
                <div className="profile-card-side profile-card-side-back">
                Nooooo
            </div>
                </div>
        )}

}

export default ProfileCard2;
