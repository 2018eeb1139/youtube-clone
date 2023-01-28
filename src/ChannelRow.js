import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const ChannelRow = ({ image, channel, verified, id, subs, description }) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__image" src={image} alt={channel} />
      <div className="channelRow__text">
        <h4>
          {channel}{" "}
          {verified && (
            <VerifiedUserOutlinedIcon className="channelRow__icon" />
          )}
        </h4>
        <p>
          @{id} • {subs} subscribers
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
