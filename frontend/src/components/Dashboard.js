import React from 'react';
import  ProfileFilter  from './ProfileFilter';
import  ProfileCard from './ProfileCard';
import {connect} from 'react-redux';
import '../style/dashboard.css';

class  Dashboard extends React.Component {
    state = {activeIndex:0}


    renderProfiles() {
        return this.props.profiles.map((p) =>
                                       { return  <ProfileCard data={p}/> })
    }

    render() {
        return (
            <div className="ui grid dashboard">
              <div className="four wide column">
                <ProfileFilter/>
              </div>
              <div className="twelve wide column">
                <div className="ui cards">
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
