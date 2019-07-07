import React from 'react';
import {Icon} from 'semantic-ui-react';
import "../style/featureSection.css";
import "../style/util.css";
import "../style/featureCard.css";

class FeatureCard extends React.Component {

    render() {
        return (
              <div class="ui card feature-card">
                <div class="content" text-align="center">
                  <Icon name={this.props.iconName}  size='huge'/>
                  <a class="header" className="feature-card-heading">Explore the world</a>
                  <div class="description" textAlign="center">
                    Varius duis at consectetur lorem donec massa sapien, faucibus et molestie ac. Dictumst quisque sagittis, purus sit amet volutpat consequat, mauris nunc congue nisi, vitae suscipit tellus mauris a diam!
                  </div>
                </div>
                <div class="extra content">
                </div>
              </div>);
    }
}

export default FeatureCard;
