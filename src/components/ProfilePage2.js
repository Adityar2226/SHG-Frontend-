import React, {
    Component
} from 'react';
import {
    Menu
} from 'semantic-ui-react';
import "../style/profilePage.css"
import imageOne from "../img/garwal.jpg";
import imageTwo from "../img/hands.jpeg";
import imageThree from "../img/dhol.jpg";
import imageFour from "../img/shubhi.jpg";
import imageFive from "../img/hands-2.jpg";

class ProfilePage extends Component {
    render() {
        const bgStyle = {
            backgroundColor: 'black'
        };
        return (
            <div className="ui grid profile-page-photo" >
              <div className="four wide column" style={bgStyle}>
            <div className="profile-text">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque ex, malesuada vitae rutrum at condimentum eu est.</h2>
              </div>
            </div>

              <div className="twelve wide column">
              <div className="ui compact grid">
                <div className="row">
                <div className="eight wide column">
                  <img src={imageFive} className="profile-page-image"/>
                </div>

                <div className="eight wide column">
                  <img src={imageFour} className="profile-page-image"/>
                </div>
                </div>

            <div className="row">
                <div className="eight wide column">
                  <img src={imageTwo} className="profile-page-image"/>
                </div>

                <div className="eight wide column">
                  <img src={imageThree} className="profile-page-image"/>
                </div>
            </div>
            </div>
              </div>
            </div>
        )
    }
}

export default ProfilePage;
