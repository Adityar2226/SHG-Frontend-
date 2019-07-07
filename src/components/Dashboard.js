import React from 'react';
import  ProfileFilter  from './ProfileFilter';
import  ProfileCard from './ProfileCard';
import {connect} from 'react-redux';

class  Dashboard extends React.Component {
    state = {activeIndex: 0}


    renderProfiles() {
        return this.props.profiles.map((p) =>
                                       { return  <ProfileCard/> })
    }

    render() {
        return (
            <div className="ui grid">
              <div className="four wide column">
                <ProfileFilter/>
              </div>
              <div className="twelve wide column">
                <div class="ui cards">
                  {this.renderProfiles()}
                </div>
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { profiles: state.profiles };
}

export default connect(mapStateToProps)(Dashboard);
