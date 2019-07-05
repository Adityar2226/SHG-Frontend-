import React, { Component } from 'react'
import {  Menu} from 'semantic-ui-react'
import ImageCarousel from './ImageCarousel';

class ProfilePage extends Component {
  state = { activeItem: 'bio' , content: null}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name === "pics"){
            this.setState({activeItem: "pics", content: <ImageCarousel/>})
        }
    }

  render() {
      const { activeItem } = this.state;

      return (
          <div className="">
          <Menu tabular>
          <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
          <Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick} />
      </Menu>
      <div className="Segment">
      <ImageCarousel/>
      </div>
          </div>
      )
  }
}

export default ProfilePage;


