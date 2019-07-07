import React from 'react';
import FeatureCard from './FeatureCard';
import "../style/featureSection.css";

class FeatureSection extends React.Component {

    render() {
        return (<div className="feature-section-container">
                  <section className="feature-section">
                    <div className="ui grid">
                      <div className="four column row">
                        <div className="column">
                            <FeatureCard iconName="home"/>
                        </div>
                        <div className="column">
                          <FeatureCard iconName="map"/>
                        </div>
                        <div className="column">
                          <FeatureCard iconName="compass"/>
                        </div>

                        <div className="column">
                          <FeatureCard iconName="compass"/>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>);
    }
}

export default FeatureSection;
