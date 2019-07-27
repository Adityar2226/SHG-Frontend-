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
import imageSix from "../img/dress.jpg";

class ProfilePage extends Component {
    state = {text: "I am glad that you liked my profile"}

    render() {
        return (
            <div className="ui grid">
              <div className="row profile-page">
                <div className="seven wide column">
                  <div className="profile-info">
                    <h1>
                      About me
                    </h1>
                    <p>
                      I would like to liken you
                      To a night without starts
                      Were it not for your eyes
                      I would liken you
                      To a sleep without dreams
                      Were it not for your songs
                    </p>
                    <p>
                      I would like to liken you
                      To a night without starts
                      Were it not for your eyes
                      I would liken you
                      To a sleep without dreams
                      Were it not for your songs
                    </p>
                    <p>
                      I would like to liken you
                      To a night without starts
                      Were it not for your eyes
                      I would liken you
                      To a sleep without dreams
                      Were it not for your songs
                    </p>
                  </div>
                  {/* <img alt="" src={imageTwo} className="profile-page-image profile-page-image-left"/> */}
                </div>
                <div className="nine wide column">
                  <img alt="" src={imageFour} className="profile-page-image profile-page-image-right"/>
                </div>
              </div>
              <div className="row profile-page-row-2">
                <div className="seven wide column">
                  <img alt="" src={imageTwo} className="profile-page-image profile-page-image-left-bottom "/>
                </div>
                <div className="nine wide column">
                  <img alt="" src={imageThree} className="profile-page-image profile-page-image-right-bottom"/>
                </div>
              </div>
              <div className="row profile-page-row-2">
                <div className="seven wide column">
                  <img alt="" src={imageFive} className="profile-page-image profile-page-image-left-bottom "/>
                </div>
                <div className="nine wide column">
                  <img alt="" src={imageOne} className="profile-page-image profile-page-image-right-bottom"/>
                </div>
              </div>
            </div>
        )
    }
}

export default ProfilePage;
