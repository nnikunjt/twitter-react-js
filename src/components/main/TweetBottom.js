import React from 'react'

function TweetBottom() {
    return (
        <div className="tweet-button">
        <div className="tweet-icons">
          <img src={require("../../assets/image.svg").default} />
          <img src={require("../../assets/gif.svg").default} />
          <img src={require("../../assets/poll.svg").default} />
          <img src={require("../../assets/happy.svg").default} />
          <img src={require("../../assets/calendar.svg").default} />
        </div>
        <div className="new-tweet-button">
          <button>Tweet</button>
        </div>
      </div>
    )
}

export default TweetBottom
