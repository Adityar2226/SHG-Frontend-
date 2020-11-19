import React from 'react'
import { Input } from 'semantic-ui-react'

const AgeFilter = () => (
    <div className="ui items">
        <div className="item">
        <div class="ui right labeled input" >
          <label  class="ui label">Min Price</label>
        <input type="text" placeholder="100" id="amount"/>
        <div class="ui basic label">Rupees</div>
        </div>
        </div>

    <div className="item">
        <div className ="ui right labeled input">
        <label class="ui label">Max Price</label>
        <input type="text" placeholder="500" id="amount"/>
        <div class="ui basic label">Rupees</div>
        </div>
        </div>
        </div>
)

export default AgeFilter
