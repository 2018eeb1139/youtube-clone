import React from "react";
import "./VideoRow.css";

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  image,
  title,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} />
      <div className="videoRow__text">
        <h4>{title}</h4>
        <p className="videoRow__headline">
          {channel} •{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNum">{subs}</span> subscribers
          </span>{" "}
          • {views} views • {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
