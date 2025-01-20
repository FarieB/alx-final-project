import React, { useState, useEffect } from 'react';
import './VideoList.css';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
}

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className="video-list">
      {videos.map(video => (
        <div key={video.id} className="video-item">
          <img src={video.thumbnail} alt={video.title} className="thumbnail" />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;

