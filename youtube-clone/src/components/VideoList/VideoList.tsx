import React from 'react';
import './VideoList.css';

const VideoList = () => {
  return (
    <div className="list-container">
      <div className="vid-list">
        <img className="thumbnail" src="/images/video-thumbnail.jpg" alt="Video Thumbnail" />
        <div className="flex-div">
          <img src="/images/user1.jpg" alt="User" />
          <div className="vid-info">
            <a href="#">Video Title</a>
            <p>Video description...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoList;

