import React from 'react';
import {Icon} from 'semantic-ui-react';
import "../style/featureSection.css";
import "../style/util.css";
import "../style/featureCard.css";

class FeatureCard extends React.Component {

    render() {
        return (
              <div className="ui card feature-card">
                <div className ="content" text-align="center">
                  <Icon name={this.props.iconName}  size='huge'/>
                  <a className="header" className="feature-card-heading">Home </a>
                  <div className ="description" text-align="center">
                   Hi welcome to feature cards.
                  </div>
                </div>
                <div className="extra content">
                </div>
              </div>);
    }
}

export default FeatureCard;
