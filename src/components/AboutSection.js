import React from 'react';
import {Link} from 'react-router-dom';
import  '../style/about.css';
import  '../style/typography.css';
import  '../style/util.css';
import imageOne from "../img/hands-2.jpg";
import imageTwo from "../img/unsplash-2.jpg";
import imageThree from "../img/mehndi-2.jpg";


class AboutSection extends React.Component {
    render() {
        return (
            <section className="section-about">
              <h2 className="section-about__heading margin-bottom-medium">
                Some catching headline here
              </h2>
              <div className="ui left aligned grid">
                <div className="two column row">
                <div className="column">
                    <h3 className="heading-tertiary">YOU'RE GOING TO FALL IN LOVE WITH NATURE</h3>
                    <p className="paragraph">
                      Ut enim blandit volutpat maecenas volutpat blandit. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc, faucibus a pellentesque sit amet, porttitor eget dolor morbi non arcu.
                      Nisl, condimentum id venenatis a, condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Tellus integer feugiat scelerisque varius morbi enim nunc, faucibus a pellentesque sit amet.
                    </p>

                    <h3 className="heading-tertiary">LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h3>
                    <p className="paragraph">
                      Duis tristique sollicitudin nibh sit! Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget.
                      Arcu dui vivamus arcu felis, bibendum ut tristique et, egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. A pellentesque sit amet, porttitor eget dolor!
                    </p>
                  <Link className="about-btn margin-top-medium">More Detail &rarr;</Link>
                </div>
                <div className="column right">
                  <div className="ui container">
                  <img className="photo about-section-image-1"   src={imageOne}/>
                    <img className=" photo about-section-image-2"  src={imageTwo}/>
                    <img className="photo about-section-image-3"  src={imageThree}/>
                  </div>
            </div>
                </div>
              </div>
            </section>
        )}
}
export default AboutSection;
