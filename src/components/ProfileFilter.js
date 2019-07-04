import React from 'react';
import {Accordion, Icon} from 'semantic-ui-react';
import Gender from './Gender';
import AgeFilter from './AgeFilter';
import SelectCityDropdown from './selectCityDropdown';
import {filterProfiles} from '../actions';
import {connect} from 'react-redux';

class ProfileFilter extends React.Component {
    state = {activeIndex: 0}


    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({activeIndex: newIndex})
    }

    onSearchSubmit = () => {
        console.log(this.props.filterProfiles());
    }

     render() {
         const { activeIndex } = this.state

        return (
            <div className="ui container">
            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Gender
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <Gender/>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Current City
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <SelectCityDropdown/>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Age
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <AgeFilter/>
                </Accordion.Content>
            </Accordion>
            <div className="ui clearing segment">
        <div className="ui button primary right aligned" onClick={() => this.onSearchSubmit()}>submit</div>
        </div>
        </div>);
     }
}

const mapStateToProps = (state) => {
    return {profiles: state};
}

export default connect(mapStateToProps, {filterProfiles})(ProfileFilter);
