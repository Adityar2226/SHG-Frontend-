import React, {Component} from 'react';
import { Menu} from 'semantic-ui-react';
import "../style/profilePage.css"

class ProfilePage extends Component {
  state = {
    text: "Product details"}

  render() {
    return (
      <div className="ui grid">
              <div className="row">
                <div className="seven wide column">
                  <div className="profile-info">
                    <h1>
                      Product details
                    </h1>
                    <ul>
                      <li>Jam is a condiment. It is usually made from pressed fruit, sugar, and sometimes pectin. Most jams are cooked. After making, jam is normally put into an airtight jar.</li>
                      <li>We use traditional techniques including cooking the fruit in small batches using copper pans to make the highest consistent quality – each batch produces only 150 jars of product.</li>

                      <li>The making of preserves begins with an initial mix containing not less than 45 parts by weight fruit for every 55 parts by weight sugar solids. The sugar solids are added after the fruit is crushed, and the mix is then cooked. Cooking may be done in a highly controlled vacuum kettle, in which flavour
                      volatiles are captured and returned to the product.</li>
                      <li>Easy to spread, enjoy this preserve on toast, biscuits, muffins, cheese, pastries or even as a cake filling.</li>
                      <li>Visit our store to see all varieties</li>
            </ul>
                  </div>
                  {/* <img alt="" src={imageTwo} className="profile-page-image profile-page-image-left"/> */}
                </div>
                <div className="nine wide column">
                  <img alt="" src="https://source.unsplash.com/featured/?jam,food" className="profile-page-image profile-page-image-right"/>
                </div>
              </div>
            </div>
    )
  }
}

export default ProfilePage;
