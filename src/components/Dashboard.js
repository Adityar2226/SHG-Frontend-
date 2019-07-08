import React from 'react';
import  ProfileFilter  from './ProfileFilter';
import  ProfileCard2 from './ProfileCard2';
import {connect} from 'react-redux';
import '../style/dashboard.css';

class  Dashboard extends React.Component {
    state = {activeIndex: 0}


    renderProfiles() {
        return this.props.profiles.map((p) =>
                                       { return  <ProfileCard2/> })
    }

    render() {
        return (
            <div className="ui grid dashboard">
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
