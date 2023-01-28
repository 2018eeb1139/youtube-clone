import React from "react";
import "./RecommenedVideos.css";

import VideoCard from "./VideoCard";

const RecommenedVideos = () => {
  return (
    <div className="recommenedVideos">
      <h2>Recommened</h2>
      <div className="recommendedVidoes__video">
        <VideoCard
          image="https://i.ytimg.com/vi/pvr947_fOmY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8p_DDWDCKhQ-KQ-irjmdo3SW3-w"
          title="OLYMPIA Q&A | BUILDING A STRONG MINDSET"
          channel="Chris Bumsted"
          channelImage="https://yt3.ggpht.com/ytc/AL5GRJXzuS-GHmG481kJYppkAjM13UYZsuiQbMuPYIPjVg=s68-c-k-c0x00ffffff-no-rj"
          views="29K views"
          timestamp="1 hour ago"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/l8zlKap1JEo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiSDL27qins_MRTfv8LeRWXO4A3g"
          title="Dhindora | Official Music Video | BB Ki Vines"
          channel="BB Ki Vines"
          channelImage="https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s68-c-k-c0x00ffffff-no-rj"
          views="56M views"
          timestamp="1 Year ago"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/4xAQCyNmACQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ5Jb3Js9xS5pl-iYcNRQYznzH_g"
          title="GYMMER NOWADAYS | Round2hell | R2h"
          channel="Round2hell"
          channelImage="https://yt3.ggpht.com/ytc/AL5GRJXvvHNdrVm_jjbWGtOS-YLX0LyXxr3v_doIvyqnvA=s68-c-k-c0x00ffffff-no-rj"
          views="38M views"
          timestamp="5 years ago"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/FHTbsZEJspU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJs1uWNKr9f8JhKK6wNltB4QKFcw"
          title="Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI"
          channel="JavaScript Mastery"
          channelImage="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj"
          views="301K views"
          timestamp="5 months ago"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/5upQGvf22qA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTFbTlc9DsT239YDQFRKjYIoBsAA"
          title="King of Swing | JIMMY ANDERSON | TEST CRICKET"
          channel="England & Wales Cricket Board"
          channelImage="https://yt3.ggpht.com/fRTh6Q0FUUZ50HFjtiUw_5DeDhQy87dhpUOdLzPySHsZXipNu3lpD4R9oxyKUzXY_DDUVPZB=s68-c-k-c0x00ffffff-no-rj"
          views="3.7M views"
          timestamp="7 months ago"
        />
      </div>
    </div>
  );
};

export default RecommenedVideos;
