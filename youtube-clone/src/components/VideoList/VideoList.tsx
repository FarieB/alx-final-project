import React, { useEffect, useState } from 'react';
import './VideoList.css';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  userImage: string;
}

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="list-container">
      {videos.map((video) => (
        <div className="vid-list" key={video.id}>
          <img className="thumbnail" src={video.thumbnail} alt={video.title} />
          <div className="flex-div">
            <img src={video.userImage} alt="User" />
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

