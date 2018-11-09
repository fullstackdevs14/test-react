import React from 'react';
import '../assets/styles/side-bar.css';
import LogoIcon from '../assets/images/logo_outline.png';
import ConversationIcon from '../assets/images/ico_conversation_png.png';
import MyListIcon from '../assets/images/ico_mylist_png.png';
import ProfileIcon from '../assets/images/ico_profile_png.png';
import CogIcon from '../assets/images/cog.png';
import LogoutIcon from '../assets/images/logout.png';

const Sidebar = ({
  selectedMenu
}) =>
  <div className="side-bar">
    <div className="logo">
      <div className="bg" />
      <img className src={LogoIcon} alt=""/>
    </div>
    <div className="menuitem">
      <img src={ConversationIcon} alt=""/>
    </div>
    <div className="menuitem">
      <img src={MyListIcon} alt=""/>
    </div>
    <div className="menuitem">
      <img src={ProfileIcon} alt=""/>
    </div>
    <div className="menuitem selected">
      <img src={CogIcon} alt=""/>
    </div>
    <div className="spacer"/>
    <div className="menuitem">
      <img src={LogoutIcon} alt=""/>
    </div>
  </div>

export default Sidebar;