import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  const renderedItem = props.videos.map((video) => {
    return <VideoItem key={window.crypto.randomUUID()} video={video} handleClick={props.handleClick} />;
  });

  return <div  className="ui relaxed divided list">{renderedItem}</div>;
}

export default VideoList;
