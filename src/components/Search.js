import {
  Search
} from 'semantic-ui-react';

import React from 'react';

export default class CitySearch extends React.Component {

  render() {
    return (<div className="ui divided grid">
                <div className="row">
                <Search>
                </Search>
                </div>
                <div className = "equal width row">

            <button class="ui basic button circular mini" style={{marginTop: "2px" }}>
            <i class="icon red close"></i>
            Banglore
            </button>

            <button class="ui basic button circular mini" style={{marginTop: "2px" }}>
            <i class="icon red close"></i>
            Pune
            </button>


            <button class="ui basic button circular mini" style={{marginTop: "2px" }}>
            <i class="icon red close"></i>
            Delhi
            </button>


            <button class="ui basic button circular mini" style={{marginTop: "2px" }}>
            <i class="icon red close"></i>
            Gurgaon
            </button>


            <button class="ui basic button circular mini" style={{marginTop: "2px" }}>
            <i class="icon red close"></i>
            Mumbai
            </button>


            <button class="ui basic button circular mini" style={{marginTop: "2px" }}>
            <i class="icon red close"></i>
            Hydrabad
            </button>
                </div>
                </div>)
  }
}
