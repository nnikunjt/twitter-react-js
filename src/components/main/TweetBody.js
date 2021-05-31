import React from "react";

function TweetBody() {
  return (
    <div className="tweet-body">
      <div className="user-tweet-img">
        <img src={require("../../assets/user_logo.jpg").default} />
      </div>
      <div>
        <div className="user-tweeet-message">
          <input type="text" placeholder="What's happening?" />
        </div>
        <div className="view-desc">
          <img src={require("../../assets/globe.svg").default} />
          <span> Everyone can reply</span>
        </div>
      </div>
    </div>
  );
}

export default TweetBody;
