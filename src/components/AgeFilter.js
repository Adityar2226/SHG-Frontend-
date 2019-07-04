import React from 'react'
import { Input } from 'semantic-ui-react'

const AgeFilter = () => (
    <div className="ui items">
        <div className="item">
        <div class="ui right labeled input" >
        <label  class="ui label">Min Age</label>
        <input type="text" placeholder="18" id="amount"/>
        <div class="ui basic label">years</div>
        </div>
        </div>

    <div className="item">
        <div class="ui right labeled input">
        <label class="ui label">Max Age</label>
        <input type="text" placeholder="60" id="amount"/>
        <div class="ui basic label">years</div>
        </div>
        </div>
        </div>
)

export default AgeFilter
