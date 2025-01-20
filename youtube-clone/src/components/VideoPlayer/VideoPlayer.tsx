import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="container play-container">
      <div className="row">
        <div className="play-video">
          <video controls autoplay>
            <source src="images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="tags">
            <a href="#">#SUVs</a><a href="#">#CHERRY</a><a href="#">#TIGGO</a><a href="#">#CHINA</a>
          </div>
          <h3>Best Youtube channel to learn about cars</h3>
          <div className="play-video-info">
            <p>2345 Views &bull; 21 days ago</p>
            <div>
              <a href="#"><img src="images/like.png" alt="like" /> 135</a>
              <a href="#"><img src="images/dislike.png" alt="dislike" /> 13</a>
              <a href="#"> <img src="images/share.png" alt="share" /> Share</a>
              <a href="#"> <img src="images/save.png" alt="save" /> Save</a>
            </div>
          </div>
          <hr />
          <div className="publisher">
            <img src="images/farai.png" alt="publisher" />
            <div>
              <p>Modern SUVs</p>
              <span>100K Subscribers</span>
            </div>
            <button type="button">Subscribe</button>
          </div>
          <div className="video-description">
            <p>Know all about modern Chinese SUVs</p>
            <p>Subscribe to Modern SUVs to stay up to date with all the developments in the motor industry</p>
            <hr />
            <h4>265 Comments</h4>
            <div className="add-comments">
              <img src="images/farai.png" alt="commenter" />
              <input type="text" placeholder="Write comment" />
            </div>

            {/* Previous Comments */}
            <div className="previous-comments">
              <img src="images/farai.png" alt="commenter" />
              <div>
                <h3>Farai Thabang <span>10 days ago</span></h3>
                <p>A channel dedicated to following major developments in the motor industry...</p>
                <div className="comments-reaction">
                  <img src="images/like.png" alt="like" />
                  <span>300</span>
                  <img src="images/dislike.png" alt="dislike" />
                  <span>5</span>
                  <span>REPLY</span>
                  <a href="#">All Replies</a>
                </div>
              </div>
            </div>

            <div className="previous-comments">
              <img src="images/megan.png" alt="commenter" />
              <div>
                <h3>Megan Blue <span>10 days ago</span></h3>
                <p>I love your channel, can I please get more information on the Cherry crossover?</p>
                <div className="comments-reaction">
                  <img src="images/like.png" alt="like" />
                  <span>25</span>
                  <img src="images/dislike.png" alt="dislike" />
                  <span>0</span>
                  <span>REPLY</span>
                  <a href="#">All Replies</a>
                </div>
              </div>
            </div>

            <div className="previous-comments">
              <img src="images/gerard.png" alt="commenter" />
              <div>
                <h3>Steven Gerard <span>10 days ago</span></h3>
                <p>Can you please shed more light on the warranty?</p>
                <div className="comments-reaction">
                  <img src="images/like.png" alt="like" />
                  <span>102</span>
                  <img src="images/dislike.png" alt="dislike" />
                  <span>2</span>
                  <span>REPLY</span>
                  <a href="#">All Replies</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sidebar */}
        <div className="right-sidebar">
          <div className="side-video-list">
            <a href="#" className="small-thumbnail"><img src="images/thumbnail1.jpg" alt="thumbnail1" /></a>
            <div className="video-info">
              <a href="#">Exploring the Eastern Cape Sea Life</a>
              <p>Sea World</p>
              <p>20M Views</p>
            </div>
          </div>
          <div className="side-video-list">
            <a href="#" className="small-thumbnail"><img src="images/thumbnail2.jpg" alt="thumbnail2" /></a>
            <div className="video-info">
              <a href="#">Places to visit this summer in South Africa</a>
              <p>Adventure</p>
              <p>15M Views</p>
            </div>
          </div>
          {/* Repeat for additional side videos */}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

