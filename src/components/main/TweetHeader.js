import React from "react";

function TweetHeader() {
  return (
    <div className="tweet-header">
      <div className="title">
        <h2>Home</h2>
      </div>
      <div className="latest-icon">
        <img src={require("../../assets/tweet-latest.svg").default} />
      </div>
    </div>
  );
}

export default TweetHeader;
