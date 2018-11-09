import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menu-item';
import LogoIcon from '../assets/images/logo_outline.png';
import ConversationIcon from '../assets/images/ico_conversation_png.png';
import MyListIcon from '../assets/images/ico_mylist_png.png';
import ProfileIcon from '../assets/images/ico_profile_png.png';
import CogIcon from '../assets/images/cog.png';
import LogoutIcon from '../assets/images/logout.png';
import { noop } from '../utils';
import '../assets/styles/side-bar.css';

const Sidebar = ({ selectedMenu, menuClick }) =>
  <div className="side-bar">
    <div className="logo">
      <div className="bg" />
      <img src={LogoIcon} alt=""/>
    </div>

    <MenuItem
      icon={ConversationIcon}
      selected={selectedMenu === 'conversation'}
      handleClick={() => menuClick('conversation')}
    />
    <MenuItem
      icon={MyListIcon}
      selected={selectedMenu === 'mylist'}
      handleClick={() => menuClick('mylist')}
    />
    <MenuItem
      icon={ProfileIcon}
      selected={selectedMenu === 'profile'}
      handleClick={() => menuClick('profile')}
    />
    <MenuItem
      icon={CogIcon}
      selected={selectedMenu === 'settings'}
      handleClick={() => menuClick('settings')}
    />
    <div className="spacer"/>
    <MenuItem
      icon={LogoutIcon}
      handleClick={() => menuClick('logout')}
    />
  </div>

Sidebar.propTypes = {
  selectedMenu: PropTypes.string,
  menuClick: PropTypes.func
};

Sidebar.defaultProps = {
  selectedMenu: '',
  menuClick: noop
};

export default Sidebar;