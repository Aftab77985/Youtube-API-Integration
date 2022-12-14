import React from "react";
import "./VideoItem.css"

function VideoItem({ video , handleClick }) {
  return (
    <div className="video-item item" onClick={()=>handleClick(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="youtube Video"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
