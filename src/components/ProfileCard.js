import React from 'react';
import {Link} from 'react-router-dom';
import {Dimmer, Image, Modal, Button, Header, Icon, textarea} from 'semantic-ui-react';

class ProfileCard extends React.Component {
    state = {}

    handleShow = () => {
        this.setState({active: true}) }

    handleHide = () => {
        this.setState({active: false}) }

    jams = ["Apricot Jam", "Apple Jam", "Mixed Jam"]

    render() {
        const { active } = this.state

        return (<div className="card" onMouseEnter={() => this.handleShow()} onMouseLeave={() => this.handleHide()}>
                  <Dimmer.Dimmable className="blurring dimmable image">
                    <Dimmer className="ui dimmer" active={active}>
                      <div className="content">
                        <div className="center">
                          <Link to="/profile" className="ui inverted button">Product details</Link>
                        </div>
                      </div>
                    </Dimmer>
                    <Image src="https://source.unsplash.com/featured/?jam,food" />
                  </Dimmer.Dimmable>

                  <div className="content">
                    <a className="header">{this.jams[Math.floor(Math.random() * 3) + 1  ]}</a>
                    <div className="meta">
                      <span className="date">Price: 300 rupees</span>
                    </div>
                  </div>
                  <div className="extra content">
                    <a>
                      <i className="star icon"></i>
                      {Math.floor(Math.random() * 500) + 1  } reviews
                    </a>
                  </div>
                </div>)
    }

}

export default ProfileCard;
