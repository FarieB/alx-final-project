import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-link">
        <a href="#">
          <img src="/images/icon1.png" alt="Icon 1" />
          Link 1
        </a>
      </div>
      <div className="shortcut-link">
        <a href="#">
          <img src="/images/icon2.png" alt="Icon 2" />
          Link 2
        </a>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>Subscribed Channels</h3>
        <a href="#">
          <img src="/images/channel1.png" alt="Channel 1" />
          Channel 1
        </a>
        <a href="#">
          <img src="/images/channel2.png" alt="Channel 2" />
          Channel 2
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

