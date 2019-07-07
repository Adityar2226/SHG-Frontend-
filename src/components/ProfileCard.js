import React from 'react';
import {Link} from 'react-router-dom';
import {Dimmer, Image, Modal, Button, Header, Icon, textarea} from 'semantic-ui-react';

class ProfileCard extends React.Component {
    state = {}

    handleShow = () => {
        this.setState({active: true}) }

    handleHide = () => {
        this.setState({active: false}) }

    render() {
        const { active } = this.state

        return (<div className="card" onMouseEnter={() => this.handleShow()} onMouseLeave={() => this.handleHide()}>
            <Dimmer.Dimmable className="blurring dimmable image">
                <Dimmer className="ui dimmer" active={active}>
                      <div className="content">
                        <div className="center">

                        <Modal trigger={<Button className="ui inverted">Add Friend</Button>} closeIcon>
                        <Header icon='archive' content='Send a message' />
                        <Modal.Content>
                            <div class="ui form">
                            <div class="field">
                                <textarea placeholder="......"></textarea>
                            </div>
                            </div>
                         </Modal.Content>
-                        <Modal.Actions>
                            <Button color='red'>
                                <Icon name='remove' /> Cancel
                            </Button>
                            <Button color='green'>
                                <Icon name='checkmark' /> Send Message
                            </Button>
                        </Modal.Actions>
                        </Modal>
                        <Link to="/profile" className="ui inverted button">View Profile</Link>
                        </div>
                        </div>
                </Dimmer>
                <Image src="matthew.png"/>
            </Dimmer.Dimmable>

            <div class="content">
                <a class="header">Team Fu</a>
                <div class="meta">
                    <span class="date">Created in Sep 2014</span>
                </div>
            </div>
            <div class="extra content">
                <a>
                    <i class="users icon"></i>
                    2 Members
                </a>
            </div>
        </div>)
    }

}

export default ProfileCard;
