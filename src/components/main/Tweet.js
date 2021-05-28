import React from "react";

function Tweet(props) {
  return (
    <div class="tweet">
      <div class="relataed">
        <span>Web Devlopment</span>
      </div>
      <div className="user-tweet-body">
        <div className="user-icon">

        </div>
        <div className="tweet-content">
            <div className="tweet-user-info">
                {props.data.username}
            </div>
            <div>
                {props.data.title}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
