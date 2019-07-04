import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'Dehradun', text: 'Dehradun', value: 'Dehradun' },
  { key: 'Delhi', text: 'Delhi', value: 'Delhi' },
  { key: 'Pune', text: 'Pune', value: 'Pune' },
  { key: 'Banglore', text: 'Banglore', value: 'Banglore' },
  { key: 'Noida', text: 'Noida', value: 'Noida' },
]

class SelectCityDropdown extends Component {
  state = { options }

  handleAddition = (e, { value }) => {
    this.setState(prevState => ({
      options: [{ text: value, value }, ...prevState.options],
    }))
  }

  handleChange = (e, { value }) => this.setState({ currentValues: value })

  render() {
    const { currentValues } = this.state

    return (
      <Dropdown
        options={this.state.options}
        placeholder='Choose City'
        search
        selection
        fluid
        multiple
        allowAdditions
        value={currentValues}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    )
  }
}

export default SelectCityDropdown
