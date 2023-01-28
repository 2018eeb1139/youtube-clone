import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AL5GRJVBPsomWYLVlPeYTQlqpMeLM4fnZbPB9eDaE3b-ww=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Triggered Insaan"
        verified
        id="triggeredinsaan"
        subs="17.5M"
        description="A meme who laughs at memes :) Business inquiries: nischay@collabx.in Thanks For Reading :)"
      />
      <hr />
      <h4>Latest from Triggered Insaan</h4>
      <VideoRow
        views="1.4M"
        subs="652K"
        description="Today we are reviewing what Dhinchak Pooja said about me and some other memes as well. Checkout My Spotify ..."
        title="I Can't Believe Dhinchak Pooja Said This About Me"
        image="https://i.ytimg.com/vi/lo3NjQpAEbY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNY51qu8nBcViSDQJneJ_uKOoyXQ"
        channel="Triggered Insaan"
        timestamp="1 hour ago"
      />
      <VideoRow
        views="4.4M"
        subs="541K"
        description="Today we are talking about my friends Ashish, Carry, Harsh Beniwal and Scout and the show we are in together called ...."
        title="Exposing Ashish Chanchlani, Carryminati, Harsh Beniwal (Playground Meme Review)"
        image="https://i.ytimg.com/vi/g4OYd0MPf9o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcN2CyYrqggO4irapWauB381bong"
        channel="Triggered Insaan"
        timestamp="10 days ago"
      />
      <VideoRow
        views="17M"
        subs="65K"
        description="Today we are looking at some Desi Legends of English. Instagram ▻ https://www.instagram.com/"
        title="Legends of English - Funniest English Fails!!"
        image="https://i.ytimg.com/vi/LMWc5Xg3MkQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_l0Zw1REs7j9bCiJy1jaBYTyhOg"
        channel="Triggered Insaan"
        timestamp="2 years ago"
      />
      <VideoRow
        views="14M"
        subs="10.1M"
        description="Finally Tik Tok has been Banned in India. Instagram ▻ https://www.instagram.com/"
        title="Tik Tok Banned!! Hadsaa Ho Gya"
        image="https://i.ytimg.com/vi/o7YaAFIdZkc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuuAyM6tmk0Oohsx6ZewLwhIemMw"
        channel="Triggered Insaan"
        timestamp="3 years ago"
      />
      <VideoRow
        views="18M"
        subs="2.1M"
        description="Bollywood is So Original Instagram - https://www.instagram.com/"
        title="Bollywood Copying Hollywood Scene by Scene #1"
        image="https://i.ytimg.com/vi/i6O7lZLYRiI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQzdj9FAw_u3M1bt9kh-lHCDpOyg"
        channel="Triggered Insaan"
        timestamp="4 years ago"
      />
    </div>
  );
};

export default SearchPage;
