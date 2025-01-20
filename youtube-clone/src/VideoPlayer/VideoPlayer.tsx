import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="play-container">
      <div className="play-video">
        <video controls>
          <source src="/videos/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-description">
        <h4>Description</h4>
        <p>Video details...</p>
      </div>
    </div>
  );
};

export default VideoPlayer;

