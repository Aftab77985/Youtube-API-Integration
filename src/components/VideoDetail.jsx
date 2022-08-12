import React from "react";
import Loader from "./Loader";

function VidoeDetail({ video }) {
  if (!video) {
    return <Loader />;
  }
  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <div className="ui embed">
        <iframe src={videoSource} title="Video Player" allowFullScreen></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </React.Fragment>
  );
}
export default VidoeDetail;
