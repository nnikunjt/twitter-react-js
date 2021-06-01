import React from "react";
import { ReactComponent as TopTweet } from "../../assets/Top-tweet.svg";

function TweetHeader() {
  return (
    <div className="fix">
      <div className="tweet-header">
        <div className="title">
          <h2>Home</h2>
        </div>
        <div className="latest-icon">
          {/* <img class="icon" src={require("../../assets/Top-tweet.svg").default} /> */}
          <TopTweet  className="icon"/>
        </div>
      </div>
    </div>
  );
}

export default TweetHeader;
