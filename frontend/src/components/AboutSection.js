import React from 'react';
import {Link} from 'react-router-dom';
import  '../style/about.css';
import  '../style/typography.css';
import  '../style/util.css';

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
                    <h3 className="heading-tertiary">YOU'RE GOING TO FALL IN LOVE WITH PRODUCTS</h3>
                    <p className="paragraph">
                      The products we provide are totally hand-made and are Upto the customer's demand. All our products are 100% Natural and Authentic.
                    </p>

                    <h3 className="heading-tertiary">PURCHASE PRODUCTS LIKE YOU NEVER HAD BEFORE</h3>
                    <p className="paragraph">
                      Our products cover a wide range.So get ready to enjoy the originality of products .
                    </p>
                  <Link className="about-btn margin-top-medium">More Detail &rarr;</Link>
                </div>
                <div className="column right">
                  <div className="ui container">
                    <img className="photo about-section-image-1"   src="https://source.unsplash.com/featured/?jam"/>
                    <img className=" photo about-section-image-2"  src="https://source.unsplash.com/featured/?pickle"/>
                    <img className="photo about-section-image-3"  src="https://source.unsplash.com/featured/?food"/>
                  </div>
            </div>
                </div>
              </div>
            </section>
        )}
}
export default AboutSection;
