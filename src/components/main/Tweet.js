import React from "react";

function Tweet(props) {


   let Img = require("../../assets/" + props.data.profile_pic).default
  return (
    <div className="tweet">
      <div className="user-tweet-body">
        <div className="user-icon">
        <img src={Img} />
        </div>
        <div className="tweet-content">
            <div className="tweet-user-info">
               <div className="profile_name"><span> {props.data.profile_name}</span></div>
               {
                 props.data.check ? 
                 <div className="verified">
                   <img src={require("../../assets/verified.svg").default} />
                 </div>
                 : <div></div>
               }
               <div className="username"> <span>@{props.data.username}</span></div>
               <div className="time"><span>. {props.data.time}</span></div>
               
            </div>
            <div className="uset-tweet-msg">
                <p>{props.data.title}</p>
            </div>
            <div className="tweet-bottom-icon">
                <div className="comment">
                    <div className="comment-icon"><img src={require("../../assets/comment.svg").default}/> </div>
                    <div> <span> {props.data.comments}</span></div>
                </div>
                <div className="retweet">
                    <div className="retweet-icon"><img src={require("../../assets/retweet.svg").default}/> </div>
                    <div> <span> {props.data.retweets}</span></div>
                </div>
                <div className="like">
                  {
                    props.data.liked ?
                    <>
                    <div className="like-icon">
                      <img src={require("../../assets/liked.svg").default}/> 
                    </div>
                    <div style={{color:"#D73E69"}}><span> {props.data.likes}</span></div> 
                    </>
                    :
                    <>
                    <div className="like-icon">
                      <img src={require("../../assets/like.svg").default}/> 
                    </div>
                    <div ><span> {props.data.likes}</span></div> 
                    </>
                  }
                    
                     
                </div>
                <div className="share">
                    <div className="share-icon"><img src={require("../../assets/upload.svg").default}/> </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
