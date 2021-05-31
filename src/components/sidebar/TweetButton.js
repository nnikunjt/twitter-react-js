import { ReactComponent as Post } from "../../assets/PostTweet.svg";

function TweetButton() {
    return(
        <div className="nav-link">
            <button className="tweetBtn">
                <div className="post-tweet logo">
                    <Post />
                </div>
                <span>Tweet</span>
            </button>
        </div>
    )
}


export default TweetButton;