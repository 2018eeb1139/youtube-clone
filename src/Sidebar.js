import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your Videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltIcon} />
      <SidebarRow title="Show more" Icon={ExpandMoreIcon} />
      <hr />
    </div>
  );
};

export default Sidebar;
