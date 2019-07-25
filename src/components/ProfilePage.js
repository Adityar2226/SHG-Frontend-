import React, {
    Component
} from 'react';
import {
    Menu
} from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/profilePage.css"
import ImageGallery from 'react-image-gallery';
import imageOne from "../img/garwal.jpg";
import imageTwo from "../img/hands.jpeg";
import imageThree from "../img/dhol.jpg";
import imageFour from "../img/shubhi.jpg";
import imageFive from "../img/hands-2.jpg";

class ProfilePage extends Component {
    render() {
        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]
        return (<div className="ui grid profile-page__container">
                  <div className="row centered profile-page__carousal">
                    <ImageGallery items = {images} />
                  </div>
                </div>)
    }
}

export default ProfilePage;
