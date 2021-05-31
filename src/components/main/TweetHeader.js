import React from "react";

function TweetHeader() {
  return (
    <div className="fix">
      <div className="tweet-header">
        <div className="title">
          <h2>Home</h2>
        </div>
        <div className="latest-icon">
          <img class="icon" src={require("../../assets/temp.svg").default} />
        </div>
      </div>
    </div>
  );
}

export default TweetHeader;
