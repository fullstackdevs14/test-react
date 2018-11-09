import React from 'react';
import PanelHeader from './panel-header';
import PanelSectionHeader from './panel-section-header';
import PanelItem from './panel-item';
import '../../assets/styles/side-panel.css';

const SidePanel = () =>
  <div className="side-panel">
    <div className="overlay"/>
    <PanelHeader title="Settings" />
    <PanelSectionHeader title="notifications" />
    <div className="section">
      <PanelItem title="New Messages" switchType="green"/>
      <PanelItem title="Action Reminders" switchType="red"/>
    </div>
  </div>

export default SidePanel;
