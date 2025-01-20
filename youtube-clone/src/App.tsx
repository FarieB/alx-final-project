import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <VideoList />
        <VideoPlayer />
      </div>
    </div>
  );
};

export default App;

