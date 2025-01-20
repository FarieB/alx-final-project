import React, { useState, useEffect } from 'react';
import './VideoList.css';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  uploaderImage: string;
  uploaderName: string;
  views: string;
  timeUploaded: string;
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
    <div className="container">
      <div className="banner">
        <img src="images/banner.png" alt="Banner" />
      </div>
      <div className="list-container">
        {videos.map(video => (
          <div key={video.id} className="vid-list">
            <a href={`video/${video.id}`}>
              <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            </a>
            <div className="flex-div">
              <img src={video.uploaderImage} alt={video.uploaderName} />
              <div className="vid-info">
                <a href={`video/${video.id}`}>{video.title}</a>
                <p>{video.uploaderName}</p>
                <p>{video.views} Views &bull; {video.timeUploaded}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;

