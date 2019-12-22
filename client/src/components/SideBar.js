import React, {Component} from 'react';
import SideBarSections from './SideBarSections.js'
import ProfileOverview from './ProfileOverview.js'
import '../stylesheets/SideBar.css';

class SideBar extends Component {

  render() {
    return(
      <div id="sidebar">
        <div id='sidebar-scrollbar'>
        <ul className='sidebar-sections'>
          <SideBarSections sections={this.props.sections}/>
        </ul>
        <ProfileOverview user={this.props.user}/>
        </div>
      </div>
    );
  }

}

export default SideBar;