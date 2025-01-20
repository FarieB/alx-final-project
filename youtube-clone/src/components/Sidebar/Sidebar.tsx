import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-link">
        <a href="/home">
          <img src="/images/home.png" alt="Home" />
          <p>Home</p>
        </a>
        <a href="/explore">
          <img src="/images/explore.png" alt="Explore" />
          <p>Explore</p>
        </a>
        <a href="/subscriptions">
          <img src="/images/subscriprion.png" alt="Subscription" />
          <p>Subscription</p>
        </a>
        <a href="/library">
          <img src="/images/library.png" alt="Library" />
          <p>Library</p>
        </a>
        <a href="/history">
          <img src="/images/history.png" alt="History" />
          <p>History</p>
        </a>
        <a href="/playlist">
          <img src="/images/playlist.png" alt="Playlist" />
          <p>Playlist</p>
        </a>
        <a href="/messages">
          <img src="/images/messages.png" alt="Messages" />
          <p>Messages</p>
        </a>
        <a href="/show-more">
          <img src="/images/show-more.png" alt="Show More" />
          <p>Show More</p>
        </a>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <a href="/fafi-sjambok">
          <img src="/images/fafi.png" alt="Fafi Sjambok" />
          <p>Fafi Sjambok</p>
        </a>
        <a href="/farai-thabang">
          <img src="/images/farai.png" alt="Farai Thabang" />
          <p>Farai Thabang</p>
        </a>
        <a href="/madedido-yhoo">
          <img src="/images/madedido.png" alt="Madedido Yhoo" />
          <p>Madedido Yhoo</p>
        </a>
        <a href="/munashe-ishe">
          <img src="/images/munashe.png" alt="Munashe Ishe" />
          <p>Munashe Ishe</p>
        </a>
        <a href="/tafadzwa-nashe">
          <img src="/images/tafadzwa.png" alt="Tafadzwa Nashe" />
          <p>Tafadzwa Nashe</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

