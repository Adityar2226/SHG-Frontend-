import React from "react";
import Slider from "react-slick";
import {Image} from 'semantic-ui-react';

class ImageCarousel extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
                <Slider {...settings}>
                <div>
                <Image src="matthew.png"/>
                </div>
                <div>
                <Image src="matthew.png"/>
                </div>
                <div>
                <Image src="matthew.png"/>
                </div>
                <div>
                <Image src="matthew.png"/>
                </div>
                <div>
                <h3>5</h3>
                </div>
                <div>
                <h3>6</h3>
                </div>
                </Slider>
        );
    }
}
export default ImageCarousel;
