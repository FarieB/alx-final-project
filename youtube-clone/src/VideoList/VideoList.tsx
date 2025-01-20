import React, { useEffect, useState } from 'react';
import './VideoList.css';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className="list-container">
      {videos.map(video => (
        <div key={video.id} className="vid-list">
          <img className="thumbnail" src={video.thumbnail} alt={video.title} />
          <div className="flex-div">
            <img src={video.userImage} alt={video.userName} />
            <div className="vid-info">
              <a href="#">{video.title}</a>
              <p>{video.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;

