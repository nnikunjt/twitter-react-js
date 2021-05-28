import React from "react";

function TweetHeader() {
  return (
   <div class="fix">
     <div className="tweet-header">
      <div className="title">
        <h2>Home</h2>
      </div>
      <div className="latest-icon">
        <img src={require("../../assets/tweet-latest.svg").default} />
      </div>
    </div>
   </div>
   
  );
}

export default TweetHeader;
